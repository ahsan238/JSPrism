import json
import pickle
import os
import time

from pdgs_generation import *
import copy
from FPstatic import print_node
from information import *
from FPanalysis import *
from pathlib import Path
import jsbeautifier
from condition import *
import timeout_decorator

from multiprocessing import Pool


import hashlib

def string_to_hash(input_string):
    # Convert the input string to bytes before hashing
    input_bytes = input_string.encode('utf-8')
    # Create a new SHA-256 hash object
    sha256_hash = hashlib.sha256()
    # Update the hash object with the input bytes
    sha256_hash.update(input_bytes)
    # Get the hexadecimal representation of the hash
    hashed_string = sha256_hash.hexdigest()
    return hashed_string


def read_list_from_file(filename):
    try:
        with open(filename, 'rb') as file:
            output_list = pickle.load(file)
        print(f"List loaded from {filename}")
        return output_list
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
        return []
    except pickle.UnpicklingError:
        print(f"Error occurred while unpickling the file '{filename}'.")
        return []

# Function to read JSON
def read_json(filename):
    try:
        with open(filename, 'r') as file:
            output_json = json.load(file)
        print(f"JSON loaded from {filename}")
        return output_json
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
        return {}
    
# Function to write JSON
def write_json(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)
    
def find_unique_subsequences(array_A, array_B):
    # Initialize variables
    unique_subsequences = []
    current_subsequence = []
    i = 0

    # Iterate through array A
    while i < len(array_A):
        if array_A[i] not in array_B:
            # Add element to the current subsequence
            current_subsequence.append(array_A[i])
        else:
            # Check if the current subsequence is not empty
            if current_subsequence:
                # Add the subsequence to the list
                unique_subsequences.append(current_subsequence.copy())
                current_subsequence.clear()

        i += 1

    # Check if the last subsequence is complete
    if current_subsequence:
        unique_subsequences.append(current_subsequence.copy())

    return unique_subsequences

def find_common_elements(array_A, array_B):
    return list(set(array_A) & set(array_B))

# Function to read a list from a file. The entire list is stored on one line as [item1, item2, item3, ...]
def parseListFromFile(filename):
    try:
        with open(filename, 'r') as file:
            output_list = file.read()
        output_list = output_list.replace('[','').replace(']','').replace('\'','').replace(' ','').split(',')
        # print(f"List loaded from {filename}")
        return output_list
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
        return []

# Function to filter out sensitive APIs from subsequences
def filterSensitiveApiFromSubsequences(subsequences):
    sensitiveApiList = [] # list of sensitive apis that were provided by Junhua. We are using these to match the ones in the subsquences
    returnList = [] # list of sensitive apis that were found in the execution of the scripts
    # Read the sensitive APIs from the supplement
    filenames = ['./supplement/fp_apis_google.txt', './supplement/fp_apis_jsu.txt']
    for filename in filenames:
        apis = parseListFromFile(filename)
        sensitiveApiList.extend(apis)
    sensitiveApiList = list(set(sensitiveApiList))

    # Filter out the sensitive APIs from the subsequences
    for subseq in subsequences:
        found = False
        for api in subseq:
            for sensitiveApi in sensitiveApiList:
                if sensitiveApi in api:
                    returnList.append(api)
                    found = True
                    break
            if found:
                break
    return returnList

# Function that takes api and its char offset and returns the responsible node in the PDG
def getResponsibleNode(node, api, charOffset, target):
    if node is None:
        return node
    else:
        for child in node.get_children():
            childAttr = child.get_attributes()
            start = int(childAttr.get('start'))
            end = int(childAttr.get('end'))
            lenthOfApi = len(api)
            name = ''
            if 'name' in childAttr:
                name = childAttr.get('name')
            if start == charOffset or start == charOffset+1 and start+lenthOfApi == end:
                # if name == api:
                #     target.append(child)
                # print(child.get_attributes())
                target.append(child)
            getResponsibleNode(child, api, charOffset, target)
    return None


def ifTargetNodeExistsInLogicalExpression(node, target, returnList):
    """
    Apply BFS on the node and explore all the children node and match their ids with the target node.
    """
    if node == None:
        return Node
    if child.get_id() == target.get_id():
        returnList.append(copy.deepcopy(child))
    for child in node.get_children():
        ifTargetNodeExistsInLogicalExpression(child, target, returnList)
        
def exploreLogicalExpressionChildren(node, returnList):
    """
    Explore all the children of the logical expression and return list of IdentifierNodes
    """
    if node == None:
        return node
    if node.get_name() == "Identifier":
        returnList.append(copy.deepcopy(node))
    for child in node.get_children():
        exploreLogicalExpressionChildren(child, returnList)
    
         
def handleSpecialConditionalNode(conditionalNode, deviantNode):
    """
    This function currently only deals with conditionalNodes that are LogicalExpressions.
    We are to explore the other side of the logical expression to find the Identifier nodes upon which we can run the iflow algorithm.
    For this, first we find which side (there are two children of LogicalExpression) we want to explore
    Once we have determined that, we then traverse that subgraph and return the list of all the identifier nodes on that side.
    NOTE: Iflow will run on each of those nodes
    """
    listOfIdentifierNodesOnTheOtherSide = []
    childToExplore = None
    if conditionalNode.get_name() == "LogicalExpression":
        for child in conditionalNode.get_children():
            # Run Breadth First Search on the children of the logical expression to check if the deviantNode is present
            returnList = []
            ifTargetNodeExistsInLogicalExpression(child, deviantNode, returnList)
            if len(returnList) == 1 and returnList[0].get_id() == deviantNode.get_id():
                # deep copy into childToExplore
                childToExplore = copy.deepcopy(child)
                break
                
    if childToExplore == None:
        return []
    else: # we know there is a side which we can explore
        exploreLogicalExpressionChildren(childToExplore, listOfIdentifierNodesOnTheOtherSide)
        return listOfIdentifierNodesOnTheOtherSide
            
            

def ifConditionalExists(sensitiveApi,pdg,file_name):
    # Get the char offset and property of the sensitive API (=> 316780,HTMLScriptElement.getAttribute)
    ret = {
        "conditionalNode": 0,
        "isLogicalExpression": False,
        "auxNodes": []
    }
    auxNodes = []
    # print(sensitiveApi)
    charOffset = int(sensitiveApi.split(',')[0])
    apiStr = sensitiveApi.split(',')[1].split('.')[-1]
    # Get the responsible node in the PDG
    target = []
    getResponsibleNode(copy.deepcopy(pdg), apiStr, charOffset, target)
    try:
        c = getTheCondition(target[0],file_name)
        ret['conditionalNode'] = c
        if 'name' in c.get_attributes() and c.get_name() == "LogicalExpression":
            # handling special conditional nodes like LogicalExpressions
            # iflow cannot run on LogicalExpression. Iterate the children which are on the other side of the logical expression (not on the side where our responseNode resides)
            ret['isLogicalExpression'] = True
            auxNodes = handleSpecialConditionalNode(c, target[0])
            ret['auxNodes'] = auxNodes
    except:
        c = None
    if c == None:
        return ret
    else:
        return ret
    
# Function that will find an api in a list and return n elements before and after it    
def getNApisBeforeAndAfter(api,apisList,n=15):
    index = apisList.index(api)
    n = 15
    start = index-n if index-n > 0 else 0
    end = index+n if index+n < len(apisList) else len(apisList)
    return apisList[start:end]


def get_leaf_nodes(startNode, children=[]):
    # Recursively search for the children node of the input node until you find the leaf nodes (that are determined by the length of children == 0)
    if startNode == None:
        return children
    if startNode.is_leaf():
        children.append(startNode)
    for child in startNode.get_children():
        get_leaf_nodes(child, children)
    return children


@timeout_decorator.timeout(300)
def getIflow(ret):
    """
    This is the structure of ret
    ret = {
        "conditionalNode": 0,
        "isLogicalExpression": False,
        "auxNodes": []
    }
    """
    conditional_node = ret['conditionalNode']
    iflow = []
    chain = []
    identifiers = []
    if conditional_node == 0 or conditional_node == None:
        return []
    # attr = ret['conditionalNode'].get_attributes()
    if 'operator' in conditional_node.get_attributes():
        children = get_leaf_nodes(conditional_node)
        # condition node is a binary expression, we need to feed its children to the iflow
        for child in children:
            if child.get_attributes().get('name') == 'document':
                continue
            trace_info(child, chain)
    elif conditional_node.get_name() == "LogicalExpression" and hasOnlyFunctioncallChildren(conditional_node):
        getLogicalExpression(conditional_node,identifiers)
        # In this case, the conditional node is the source of the iflow
        
        chain.append(conditional_node)
    elif conditional_node.get_name() == "LogicalExpression":
        getLogicalExpression(conditional_node,identifiers)
        for i in identifiers:
            trace_info(i, chain)
    elif conditional_node.get_name() == "MemberExpression":
        for child in conditional_node.get_children():
            # print("CHILDREN OF MEMBER EXPRESSION",child.get_name(), child.get_attributes())
            trace_info(child, chain)
    else: # if the conditional node is already an identifier (a variable), IFlow can be run on it directly
        trace_info(conditional_node, chain)
    for node in chain:
        print(node.get_attributes())
        if node == None:
            continue
        iflow.append(node.get_attributes())
            
    return iflow

# @timeout_decorator.timeout(300)
def reAttemptFailediFlows(domain):
    resultPath = './results/'
    domainJsonPath = './results/' + domain + '.json'
    # check if file exists
    if not os.path.exists(domainJsonPath):
        return
    # read the json file
    data = read_json(domainJsonPath)
    
    for script in data:
        # if script != 'https://securepubads.g.doubleclick.net/static/topics/topics_frame.html':
        #     continue
        try:
            # get the code, save it to file with hash of domain as the filename
            code = data[script]['code']
            hashValue = string_to_hash(domain)
            open(f'/tmp/jsanalysis/{hashValue}.js', 'w').close()
            with open(f'/tmp/jsanalysis/{hashValue}.js',"w") as fp:
                # fp.write(jsbeautifier.beautify(desktopCode))
                fp.write(code)
            fp.close()
            
            file_name = f'/tmp/jsanalysis/{hashValue}.js'
            pdg = get_data_flow(file_name, benchmarks=dict())
        except Exception as e:
            print(e)
            continue
        
        # find failed iflows, reprocess those
        for platform in data[script]:
            if platform == 'code':
                continue
            for api in data[script][platform]:
                # if api != '15711,Window.document':
                #     continue
                try:
                    if 'iflow' in data[script][platform][api]:
                        if data[script][platform][api]['iflow'] == []:
                            # print(f"Reprocessing {script} {platform} {api}")
                            # rerun the iflow
                            ret = ifConditionalExists(api, copy.deepcopy(pdg), f'/tmp/jsanalysis/{hashValue}.js')
                            c = ret['conditionalNode']
                            chain = getIflow(ret)
                            data[script][platform][api]['iflow'] = chain
                            print(chain)
                except Exception as e:
                    print(e)
                    continue
    write_json(domainJsonPath, data)
    
    # save this domain name as a file in the ./tmp folder
    with open(f'./tmp/{domain}.txt',"w") as fp:
        fp.write("done")
    fp.close()
            
    
# Function to process the domain
# @timeout_decorator.timeout(300)
def processDomainExecution(domain):
    # data object that we will return
    d = {}
    try:
        baseFilePath = f"./additional/data/{domain}/agg_data.json"
        # Read the JSON file
        data = read_json(baseFilePath)
        # Get domain data
        data = data[domain]

        # Determine the common scripts by comparing script_urls
        desktopScripts = list(data['desktop'].keys())
        mobileScripts = list(data['mobile'].keys())
        commonScripts = find_common_elements(desktopScripts, mobileScripts)
        # For each script, determine unique subsequences of each platform
    except Exception as e:
        d = {
            "failed": -1
        }
        write_json(f"./results/{domain}.json", d)
        return

    for script in commonScripts:
        # if script != 'https://res.365scores.com/static/js/4746.bc803ae2.chunk.js':
        #     continue
        try:
            # First check if the code of both script matches exactly
            desktopCode = data['desktop'][script]['code']
            mobileCode = data['mobile'][script]['code']
            if desktopCode != mobileCode:
                # print('Code did not match!')
                continue
            d[script] = {
                "desktop": {},
                "mobile": {},
                "code": desktopCode
            }
            print(script)

            # If the code matches, then find unique subsequences of executed APIs
            desktopApis = data['desktop'][script]['apis']
            mobileApis = data['mobile'][script]['apis']

            uniqueDesktopApis = find_unique_subsequences(desktopApis, mobileApis)
            uniqueMobileApis = find_unique_subsequences(mobileApis, desktopApis)

            # remove the duplicates
            uniqueDesktopApis = [list(x) for x in set(tuple(x) for x in uniqueDesktopApis)]
            uniqueMobileApis = [list(x) for x in set(tuple(x) for x in uniqueMobileApis)]

            # only consider the subsequences with length > 5
            uniqueDesktopApis = [x for x in uniqueDesktopApis if len(x) > 5]
            uniqueMobileApis = [x for x in uniqueMobileApis if len(x) > 5]

            # for a in uniqueDesktopApis:
            #     print(len(a))
            # for a in uniqueMobileApis:
            #     print(len(a))
            # continue

            # Find those respective unique subsequences that contain a sensitive API
            # Ok for now we are skipping this part

            # uniqueDesktopApis = list(set(filterSensitiveApiFromSubsequences(uniqueDesktopApis)))
            # uniqueMobileApis = list(set(filterSensitiveApiFromSubsequences(uniqueMobileApis)))

            # Now is the tricky part. For each subsequence, we pick out the sensitive API and determine the corresponding node in the PDG
            # then we supply that node to conditionality and check if the algorithm returns a responsible node

            if len(uniqueDesktopApis) == 0 and len(uniqueMobileApis) == 0:
                continue
            
            # First write the code to a file
            hashValue = string_to_hash(domain)
            open(f'/tmp/jsanalysis/{hashValue}.js', 'w').close()
            with open(f'/tmp/jsanalysis/{hashValue}.js',"w") as fp:
                # fp.write(jsbeautifier.beautify(desktopCode))
                fp.write(desktopCode)
            fp.close()
            # Generate PDG
            file_name = f'/tmp/jsanalysis/{hashValue}.js'
            pdg = get_data_flow(file_name, benchmarks=dict())
            print(f"total expected determinations for desktop:{len(uniqueDesktopApis)}")

            # For each sensitive API, check if the condition exists
            for sensitiveApi in uniqueDesktopApis:
                uniqueSequence = sensitiveApi
                sensitiveApi = sensitiveApi[0]
                ret = ifConditionalExists(sensitiveApi,copy.deepcopy(pdg), file_name)
                c = ret['conditionalNode']
                try:
                    c_attributes = c.get_attributes()
                except:
                    c_attributes = {}
                chain = getIflow(ret) # IFlow would need auxNodes if the conditional node is a LogicalExpression. Therefore I am not simply returning the conditionalNode but the entire object
                neighboringApis = getNApisBeforeAndAfter(sensitiveApi,desktopApis)
                d[script]['desktop'][sensitiveApi] = {
                    "conditional_node_attributes": c_attributes,
                    "neighboring_apis": neighboringApis,
                    "iflow": chain,
                    "subsequence": uniqueSequence
                }
            print(f"total expected determinations for mobile:{len(uniqueMobileApis)}")
            for sensitiveApi in uniqueMobileApis:
                uniqueSequence = sensitiveApi
                sensitiveApi = sensitiveApi[0]
                ret = ifConditionalExists(sensitiveApi,copy.deepcopy(pdg),file_name)
                c = ret['conditionalNode']
                try:
                    c_attributes = c.get_attributes()
                except:
                    c_attributes = {}
                chain = getIflow(ret)
                neighboringApis = getNApisBeforeAndAfter(sensitiveApi,mobileApis)
                d[script]['mobile'][sensitiveApi] = {
                    "conditional_node_attributes": c_attributes,
                    "neighboring_apis": neighboringApis,
                    "iflow": chain,
                    "subsequence": uniqueSequence
                }

        except Exception as e:
            with open(f"./tmp/{domain}",'w') as fp:
                fp.write(f'process failing. last domain processed: {domain}')
                fp.close()
            print(e)
            continue

    write_json(f"./results/{domain}.json", d)
    # return d

@timeout_decorator.timeout(5)   
def test_func(domain):
    for i in range(1,10):
        time.sleep(1)
        print("{} seconds have passed for {}".format(i,domain))

def launchAnalysis(function, domains):
    # first ensure that only 30 domains are processed in one batch; this is temporary to speed up metadata gathering
    domainsProcessed = [x.replace('.json','') for x in os.listdir("./results")]
    domains = [x for x in domains if x not in domainsProcessed]
    # domains = domains[:4]
    print(len(domains))

    # return
    # Launch the analysis in parallel
    pool = Pool(processes=28)
    results = pool.map(function, domains)
    pool.close()
    pool.join()
    return results

def getProcessedDomains():
    path = './additional/data/'
    domains = [x for x in os.listdir(path) if os.path.isdir(os.path.join(path, x))]
    return domains

def getAlreadyProcessedDomains():
    path = './results/'
    domains = [x.replace('.json','') for x in os.listdir(path) if os.path.isfile(os.path.join(path, x))]
    return domains

def main():
    # domains = list(read_list_from_file("./additional/common_domains.txt"))
    domains = getProcessedDomains()
    # processedDomains = getAlreadyProcessedDomains()
    # processedDomains = []
    # domains = [x for x in domains if x not in processedDomains]
    print(len(domains))
    launchAnalysis(processDomainExecution, domains)
    # launchAnalysis(test_func, domains)



if __name__ == "__main__":
    main()
    # processDomainExecution('365scores.com')
    # processDomainExecution('liveworksheets.com')
        

    
