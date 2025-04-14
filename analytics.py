import hashlib
import json
import os
import sys
import psutil
import subprocess
import pickle
import timeit

from pdgs_generation import *
from FPstatic import *
# from condition import *
from FPanalysis import *
import copy
import jsbeautifier

postProcessorPath = '/home/azafar2/visiblev8/post-processor/artifacts/vv8-post-processor'

def FPIdldata():
    std_api = []
    with open("idldata.json") as f:
        data = json.load(f)

    for i in data:
        if data[str(i)] is not None:
            if "members" in data[str(i)]:
                for ele in data[str(i)]["members"]:
                    std_api.append(str(i) + "." + str(ele))
            else:
                for ele in data[str(i)].values():
                    std_api.append(str(i) + "." + str(ele))
    return std_api

def map_API(node, offset, api, debug=False, content=''):
    range = []
    if node is None:
        return node
    if node.is_leaf():
        return node
    else:
        for child in node.get_children():
            r = (child.get_attributes()["range"])

            if isinstance(child.get_attributes()["range"], dict):
                for key in child.get_attributes()["range"]:
                    range.append(child.get_attributes()["range"][key])
                
                if range[0] <= offset and range[1] > offset:
                    if debug:
                        print("Range: "+str(child.get_attributes()['range']), offset, f' node id: {child.get_id()}')
                        # print("ATT: "+str(child.get_attributes()))

                    # matches Navigator.UserAgent -> a.b    
                    if range[0] == offset and "name" in child.get_attributes():
 
                        if child.get_attributes()["name"] == api or child.get_attributes()["name"] in api:
                            nodeLabel = child.get_attributes()["name"].replace("**",'')
                            if nodeLabel == api or nodeLabel in api:
                                attribute_name = (child.get_attributes()["name"])
                                if debug:
                                    # print("Range: "+str(child.get_attributes()["range"]))
                                    print("Match found!")
                                if not child.get_attributes()['name'].endswith("**"):
                                    # child.set_value(f"{attribute_name}**")
                                    child.set_value(f"{api}**")
                            #TODO: do analysis you like

                    child = map_API(child, offset, api)
                elif range[0] == offset + 1:
                    # print(child.get_attributes())
                    if "name" in child.get_attributes():
                        diff = len(child.get_attributes()["name"])
                        if child.get_attributes()["name"] == content[offset:offset+diff]:
                            # print("q")
                            # print(content_30[1:1+diff])
                            print(1)
                            #TODO: do analysis you like
                    else:
                        for i in child.get_children():
                            # print(i.get_attributes())
                            if "name" in i.get_attributes():
                                diff = len(i.get_attributes()["name"])
                                if i.get_attributes()["name"] == content[offset:offset+diff]:
                                    # print("w")
                                    print(1)
                                    # print(content_30[1:1+diff])
                                    #TODO: do analysis you like
                        
            elif isinstance(child.get_attributes()["range"], list):
                if child.get_attributes()["range"][0] <= offset and child.get_attributes()["range"][1] > offset:
                    if debug:
                        print("Range: "+str(child.get_attributes()['range']), offset, f' node id: {child.get_id()}')
                            
                    if child.get_attributes()["range"][0] == offset and "name" in child.get_attributes():
                        # print("NAME: "+str(child.get_attributes()["name"]))
                        nodeLabel = child.get_attributes()["name"].replace("**",'')
                        if nodeLabel == api or nodeLabel in api:
                            attribute_name = (child.get_attributes()["name"])
                            if debug:
                                # print("Range: "+str(child.get_attributes()["range"]))
                                print("Match found!")
                            if not child.get_attributes()['name'].endswith("**"):
                                # child.set_value(f"{attribute_name}**")
                                child.set_value(f"{api}**")
                            #TODO: do analysis you like
                

                    # Mark the node we are entering for colorization later
                    child = map_API(child, offset, api)
                elif child.get_attributes()["range"][0] == offset + 1:
                    # print(child.get_attributes())
                    
                    # print("OBFUSCATION")
                    if "name" in child.get_attributes():
                        diff = len(child.get_attributes()["name"])
                        # print("OBFUSCATION",content[offset:offset+diff])
                        if child.get_attributes()["name"] == content[offset:offset+diff]:
                            # print("e")
                            if not child.get_attributes()['name'].endswith("**"):
                                    child.set_value(f"{api}")
                            #TODO: do analysis you like
                    elif "value" in child.get_attributes() or "raw" in child.get_attributes():
                        # print("IWANT")
                        if "value" in child.get_attributes() and isinstance(child.get_attributes()["value"], str):
                            # print("kankan")
                            diff = len(child.get_attributes()["value"])
                            if child.get_attributes()["value"] == str(content[offset+1:offset+diff+1])[1:1+diff]:
                                if not child.get_attributes()['name'].endswith("**"):
                                    child.set_value(f"{api}")
                                #TODO: do analysis you like
                        if "raw" in child.get_attributes() and isinstance(child.get_attributes()["raw"], str):
                            # print("kan")
                            diff = len(child.get_attributes()["raw"])
                            if child.get_attributes()["raw"] == str(content[offset+1:offset+diff+1])[1:1+diff] and get_dataflow_stt(child) not in api:
                                if not child.get_attributes()['name'].endswith("**"):
                                    child.set_value(f"{api}")
                                #TODO: do analysis you like
                    else:
                        for i in child.get_children():
                            # print(i.get_attributes())
                            if "name" in i.get_attributes():
                                diff = len(i.get_attributes()["name"])
                                # print(str(content[offset+1:offset+diff+1])==str(i.get_attributes()["name"]))
                                if str(i.get_attributes()["name"]) == str(content[offset+1:offset+diff+1]):
                                    if debug:
                                        # print("Range: "+str(child.get_attributes()["range"]))
                                        print("Match found!")
                                    if not i.get_attributes()['name'].endswith("**"):
                                        # i.set_value(f"{i.get_attributes()['name']}**")
                                        # i.set_value(f"{api.split('.')[-1]}**")
                                        i.set_value(f"{api}")
                                    # print("r")
                                    # print(content_30[1:1+diff])
                                    #TODO: do analysis you like
                            elif "value" in i.get_attributes() or "raw" in i.get_attributes():
                                # print("IWANT")
                                if "value" in i.get_attributes() and isinstance(i.get_attributes()["value"], str):
                                    # print("kankan")
                                    diff = len(i.get_attributes()["value"])
                                    if i.get_attributes()["value"] == str(content[offset+1:offset+diff+1]):
                                        if not i.get_attributes()['name'].endswith("**"):
                                            i.set_value(f"{api}")
                                        #TODO: do analysis you like
                                if "raw" in i.get_attributes() and isinstance(i.get_attributes()["raw"], str):
                                    # print("kan")
                                    diff = len(i.get_attributes()["raw"])
                                    if i.get_attributes()["raw"] == str(content[offset+1:offset+diff+1]) and get_dataflow_stt(i) not in api:
                                        if not i.get_attributes()['name'].endswith("**"):
                                            i.set_value(f"{api}")
                                        #TODO: do analysis you like
        
            else:
                print("ERROR!!!!!!")
    return node

def is_node_execd(node):
    # checks if the node has executed
    tag = ''
    if "name" in node.get_attributes() and "**" in node.get_attributes()['name']:
        return True
    else:
        return False
        

def get_execd_nodes(node,execd_nodes=set()):
    # input: root node of the pdg
    # output: list of execd nodes
    
    if node is None:
        return execd_nodes
    if node.is_leaf():
        if is_node_execd(node):
            node_id = node.get_id()
            node_name = node.get_attributes()['name']
            node_name = node_name.replace("**","")
            execd_nodes.add((node_id,node_name))
            return execd_nodes
    else:
        for child in node.get_children():
            get_execd_nodes(child,execd_nodes)
        
    return execd_nodes


# postProcessorPath = '/home/azafar2/postprocessor-vv8/visiblev8/post-processor/vv8-post-processor'

def save_to_json(d,filepath):
    with open(filepath,'w') as fp:
        json.dump(d,fp,indent=4)
        fp.close()

def read_json(filepath):
    with open(filepath) as fp:
        d = json.load(fp)
        fp.close()
    return d

# Function to save a list to a file using pickle
def save_list_to_file(input_list, filename):
    with open(filename, 'wb') as file:
        # Pick the list using the highest protocol available.
        pickle.dump(input_list, file, pickle.HIGHEST_PROTOCOL)
    print(f"List saved to {filename}")

# Function to read a list from a file using pickle
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
    

def swap_keys_and_values(input_dict):
    # Create a new dictionary with swapped keys and values
    swapped_dict = {v: k for k, v in input_dict.items()}
    return swapped_dict

def get_desktop_domain_mapping():
    dir = '/home/azafar2/vv8slimcrawler/vv8-crawler-slim/har'
    files = os.listdir(dir)
    m = {}
    for f in files:
        domain = ''
        filepath = os.path.join(dir,f)
        with open(filepath) as fp:
            har = json.load(fp)
        fp.close()
        
        if "log" in har and "pages" in har["log"] and len(har["log"]["pages"]) > 0:
            domain = har["log"]["pages"][0]["title"]
            if domain != '':
                domain = domain.replace("http://","")
                if domain.endswith("/"):
                    domain = domain[:-1]
        dirname = f.replace(".har","")
        m[dirname] = domain
    save_to_json(m,'./additional/desktop_log_map.json')

def get_platform_common_domains():
    android_domains = []
    dir = '/home/azafar2/garb/top1K/'
    android_files = os.listdir(dir)
    desktop_files = read_json('./additional/desktop_log_map.json')
    desktop_files = list(set(desktop_files.values()))
    common_domains = set(android_files).intersection(desktop_files)
    save_list_to_file(common_domains,'./additional/common_domains.txt')

def featureExtractionFromLogFile(filename,mode):
    ag = []
    cmd = "{} -aggs {} {}".format(postProcessorPath,mode,filename)
    proc = subprocess.Popen(cmd,shell=True,stdout=subprocess.PIPE)
    out,err = proc.communicate()
    out = (out.decode().replace('\n',','))[:-1]
    try:
        if mode != 'causality_graphml':
            out = "[" + out + "]"
            out = json.loads(out)
        else:
            return out
        # out = ast.literal_eval(out)
    except SyntaxError:
        return []
    except ValueError as error:
        return error
    for i in out:
        try:
            ag.append(i[1])
        except KeyError as e:
            print("error",out)
            continue
    return ag

def convert_set_to_list(a):
    converted_list = [list(item) for item in a]
    return converted_list

def get_marked_pdg(apis,content,url,std_api):
    # take the url name and convert it into a hash value
    # this hash value will be used to save the pdg
    hashed_url = hashlib.md5(content.encode()).hexdigest()
    open(f'/tmp/js_src/{hashed_url}.js', 'w').close()
    with open(f'/tmp/js_src/{hashed_url}.js',"w") as fp:
        fp.write(content)
    fp.close()
    
    filepath = f'/tmp/js_src/{hashed_url}.js'
    benchmarks = dict()
    pdg = get_data_flow(filepath,benchmarks=benchmarks)
    # print(benchmarks)
    for feature in apis:
        if feature[feature.index(",")+1:] in std_api:
            if len(feature.split(",")) > 1:
                start,api = feature.split(",")
                start = int(start)
                map_API(pdg, start, api)
                # finding the executed nodes
    
    exec_nodes = set()
    get_execd_nodes(pdg,exec_nodes)
    return exec_nodes

def batchProcess(common_domains):
    std_api = FPIdldata()
    desktopDir = '/home/azafar2/visiblev8-crawler/raw_logs'
    mobileDir = '/home/azafar2/logs/'
    desktop_files = read_json('desktop_mapping.json')
    agg_data = {}
    agg_script_data = {}
    benchmark = dict()
    start = timeit.default_timer()
    for domain in common_domains:
        logs = []
        scriptSuccessReport = {}
        # print(domain)
        script_data = {"mobile":{},"desktop":{}}
        agg_script_data[domain] = {}
        
        # desktop first
        dir = desktop_files[domain]
        dir_path = os.path.join(desktopDir,dir)
        files = os.listdir(dir_path)
        # field = ["script_flow",{"APIs":["193,Navigator.userAgent","347,Window.DeviceOrientationEvent","396,Window.addEventListener","396,Window.addEventListener","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma"],"Code":"(function(){\n\n    var x = 0\n    let fp = ' ';\n    function handleOrientation(event) {\n            x = event.alpha+event.beta+event.gamma;\n    }\n\n    try {\n        var userAgentInfo = navigator.userAgent;\n\n        fp += userAgentInfo\n        if (userAgentInfo.indexOf(\"Android\") \u003e 0 \u0026\u0026 userAgentInfo.indexOf(\"Mobile\") \u003e 0) {\n            if (window.DeviceOrientationEvent) {\n                window.addEventListener('deviceorientation', handleOrientation, true);\n                fp += '' + x\n            }\n        }\n        return fp;\n    } catch (e) {}\n    return '';\n})();\n","FirstOrigin":{"Origin":"https://ahsan238.github.io","OriginSecurityToken":""},"ID":3,"IsEvaledBy":-1,"IsVisibleV8":False,"Isolate":"0x200918000","URL":"https://ahsan238.github.io/src/sensor.js"}]
        for file in files:
            print(f'File: {file}')
            filepath = os.path.join(dir_path,file)
            res = featureExtractionFromLogFile(filepath,'flow')
            for script_entry in res:
                content = script_entry['Code']
                url = script_entry['URL']
                apis = script_entry['APIs']
                script_data["desktop"][url] = {
                    "code": content,
                    "apis": apis
                }

        benchmark['Desktop Log Processed'] = timeit.default_timer() - start
        # mobile then
        dir_path = os.path.join(mobileDir,domain)
        dir_path = os.path.join(dir_path,'Documents')
        files = os.listdir(dir_path)
        for file in files:
            print(f'File: {file}')
            filepath = os.path.join(dir_path,file)
            res = featureExtractionFromLogFile(filepath,'flow')
            for script_entry in res:
                content = script_entry['Code']
                url = script_entry['URL']
                apis = script_entry['APIs']
                script_data["mobile"][url] = {
                    "code": content,
                    "apis": apis
                }

        benchmark['Mobile Log Processed'] = timeit.default_timer() - start
        agg_data[domain] = script_data

        # save_to_json(agg_data,'./additional/agg.json')  

        print('completed flow extraction')

        mobile_scripts = list(script_data['mobile'].keys())
        desktop_scripts = list(script_data['desktop'].keys())
        common_scripts = list(set(mobile_scripts).intersection(desktop_scripts))
        print(f'common scripts: {len(common_scripts)}')

        # desktop script analysis
        for url in script_data['desktop']:
            if url in common_scripts:
                print(f"desktop: {url}")
                content = script_data['desktop'][url]['code']
                apis = script_data['desktop'][url]['apis']
                try:
                    exec_nodes = get_marked_pdg(apis,content,url,std_api)
                    exec_nodes = convert_set_to_list(exec_nodes)
                    if url not in agg_script_data[domain]:
                        agg_script_data[domain][url] = {}
                    agg_script_data[domain][url]['desktop'] = {
                        "code": content,
                        "exec_nodes": exec_nodes
                    }
                except Exception as e:
                    error = f'Error in {domain} - {url} - desktop - {e}'
                    logs.append(error)
                    continue
        
        benchmark['Desktop Scripts Processed'] = timeit.default_timer() - start
        print(f"{domain} - desktop's script finished")
        # mobile script analysis
        for url in script_data['mobile']:
            if url in common_scripts:
                print(f"mobile: {url}")
                content = script_data['mobile'][url]['code']
                apis = script_data['mobile'][url]['apis']
                try:
                    exec_nodes = get_marked_pdg(apis,content,url,std_api)
                    exec_nodes = convert_set_to_list(exec_nodes)
                    if url not in agg_script_data[domain]:
                        agg_script_data[domain][url] = {}
                    agg_script_data[domain][url]['mobile'] = {
                        "code": content,
                        "exec_nodes": exec_nodes
                    }
                except Exception as e:
                    error = f'Error in {domain} - {url} - mobile - {e}'
                    logs.append(error)
                    continue
        benchmark['Mobile Scripts Processed'] = timeit.default_timer() - start
        print(f"{domain} - mobile's script finished")
        
        if not os.path.exists(f'./additional/data/{domain}'):
            os.mkdir(f'./additional/data/{domain}')
        save_to_json(agg_script_data,f'./additional/data/{domain}/script_agg.json')  
        save_to_json(benchmark,f'./additional/data/{domain}/benchmark.json')  
        save_to_json(agg_data,f'./additional/data/{domain}/agg_data.json')
        save_list_to_file(logs,f'./additional/data/{domain}/logs.txt')
        agg_script_data = {}
        benchmark = dict()
        agg_data = {}
        logs = []
    

def run():
    std_api = FPIdldata()
    desktopDir = '/home/azafar2/visiblev8-crawler/raw_logs'
    mobileDir = '/home/azafar2/logs/'
    desktop_files = read_json('desktop_mapping.json')
    # this is the script for which pdg creation is failed (found on dell.com)
    _script = 'https://www.microsoft.com/etc.clientlibs/onecloud/clientlibs/clientlib-reimagine/main-light.min.ACSHASHe347a14912b2a7436e7ad0ff79bd500f.js'

    # desktop_files = swap_keys_and_values(desktop_files)
    common_domains = get_common_domains()
    common_domains = common_domains[3000:]
    # common_domains = ['chinanews.com.cn']
    # print(len(common_domains), common_domains)
    n = 30
    
    # Our objective is to run n processes where we batch process the domains.
    # There will be n processes. Write the code now
    processes = []
    for i in range(n):
        start = i*len(common_domains)//n
        end = (i+1)*len(common_domains)//n
        # print(start,end)
        p = Process(target=batchProcess, args=(common_domains[start:end],))
        processes.append(p)
        p.start()
        # join
    for p in processes:
        p.join()
        
    return
    agg_data = {}
    agg_script_data = {}
    benchmark = dict()
    start = timeit.default_timer()
    for domain in common_domains:
        # print(domain)
        script_data = {"mobile":{},"desktop":{}}
        agg_script_data[domain] = {}
        
        # desktop first
        dir = desktop_files[domain]
        dir_path = os.path.join(desktopDir,dir)
        files = os.listdir(dir_path)
        # field = ["script_flow",{"APIs":["193,Navigator.userAgent","347,Window.DeviceOrientationEvent","396,Window.addEventListener","396,Window.addEventListener","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma"],"Code":"(function(){\n\n    var x = 0\n    let fp = ' ';\n    function handleOrientation(event) {\n            x = event.alpha+event.beta+event.gamma;\n    }\n\n    try {\n        var userAgentInfo = navigator.userAgent;\n\n        fp += userAgentInfo\n        if (userAgentInfo.indexOf(\"Android\") \u003e 0 \u0026\u0026 userAgentInfo.indexOf(\"Mobile\") \u003e 0) {\n            if (window.DeviceOrientationEvent) {\n                window.addEventListener('deviceorientation', handleOrientation, true);\n                fp += '' + x\n            }\n        }\n        return fp;\n    } catch (e) {}\n    return '';\n})();\n","FirstOrigin":{"Origin":"https://ahsan238.github.io","OriginSecurityToken":""},"ID":3,"IsEvaledBy":-1,"IsVisibleV8":False,"Isolate":"0x200918000","URL":"https://ahsan238.github.io/src/sensor.js"}]
        for file in files:
            print(f'File: {file}')
            filepath = os.path.join(dir_path,file)
            res = featureExtractionFromLogFile(filepath,'flow')
            for script_entry in res:
                content = script_entry['Code']
                url = script_entry['URL']
                apis = script_entry['APIs']
                script_data["desktop"][url] = {
                    "code": content,
                    "apis": apis
                }

        benchmark['Desktop Log Processed'] = timeit.default_timer() - start
        # mobile then
        dir_path = os.path.join(mobileDir,domain)
        dir_path = os.path.join(dir_path,'Documents')
        files = os.listdir(dir_path)
        for file in files:
            print(f'File: {file}')
            filepath = os.path.join(dir_path,file)
            res = featureExtractionFromLogFile(filepath,'flow')
            for script_entry in res:
                content = script_entry['Code']
                url = script_entry['URL']
                apis = script_entry['APIs']
                script_data["mobile"][url] = {
                    "code": content,
                    "apis": apis
                }

        benchmark['Mobile Log Processed'] = timeit.default_timer() - start
        agg_data[domain] = script_data

        # save_to_json(agg_data,'./additional/agg.json')  

        print('completed flow extraction')

        mobile_scripts = list(script_data['mobile'].keys())
        desktop_scripts = list(script_data['desktop'].keys())
        common_scripts = list(set(mobile_scripts).intersection(desktop_scripts))
        print(f'common scripts: {len(common_scripts)}')

        # desktop script analysis
        for url in script_data['desktop']:
            if url in common_scripts:
                print(f"desktop: {url}")
                content = script_data['desktop'][url]['code']
                apis = script_data['desktop'][url]['apis']
                try:
                    exec_nodes = get_marked_pdg(apis,content,url,std_api)
                    exec_nodes = convert_set_to_list(exec_nodes)
                    if url not in agg_script_data[domain]:
                        agg_script_data[domain][url] = {}
                    agg_script_data[domain][url]['desktop'] = {
                        "code": content,
                        "exec_nodes": exec_nodes
                    }
                except:
                    continue
        
        benchmark['Desktop Scripts Processed'] = timeit.default_timer() - start
        print(f"{domain} - desktop's script finished")
        # mobile script analysis
        for url in script_data['mobile']:
            if url in common_scripts:
                print(f"mobile: {url}")
                content = script_data['mobile'][url]['code']
                apis = script_data['mobile'][url]['apis']
                try:
                    exec_nodes = get_marked_pdg(apis,content,url,std_api)
                    exec_nodes = convert_set_to_list(exec_nodes)
                    if url not in agg_script_data[domain]:
                        agg_script_data[domain][url] = {}
                    agg_script_data[domain][url]['mobile'] = {
                        "code": content,
                        "exec_nodes": exec_nodes
                    }
                except:
                    continue
        benchmark['Mobile Scripts Processed'] = timeit.default_timer() - start
        print(f"{domain} - mobile's script finished")
        
        if not os.path.exists(f'./additional/data/{domain}'):
            os.mkdir(f'./additional/data/{domain}')
        save_to_json(agg_script_data,f'./additional/data/{domain}/script_agg.json')  
        save_to_json(benchmark,f'./additional/data/{domain}/benchmark.json')  
        save_to_json(agg_data,f'./additional/data/{domain}/agg_data.json')  


def analyse_agg_scripts(filename):
    fp = open(filename)
    # fp = open("/home/azafar2/VV8_PDG_mapping/additional/graph_analysis/godaddy.com/script_agg.json")
    agg = json.load(fp)
    fp.close()
    for domain in agg:
        for i,url in enumerate(agg[domain]):
            try:
                print(f"domain: {domain}")
                mobile_apis = [str(x[0])+"_"+x[1] for x in agg[domain][url]['mobile']['exec_nodes']]
                code = agg[domain][url]['mobile']['code']
                desktop_apis = [str(x[0])+"_"+x[1] for x in agg[domain][url]['desktop']['exec_nodes']]
                intersection_apis = set(mobile_apis).intersection(desktop_apis)
                mobile_unique_apis = set(mobile_apis).difference(desktop_apis)
                desktop_unique_apis = set(desktop_apis).difference(mobile_apis)
                print(f"url:{url} : intersection nodes {intersection_apis}")
                print(f"mobile unique exec nodes {mobile_unique_apis}")
                print(f"desktop unique exec nodes {desktop_unique_apis}")
            except:
                continue
        #     break
        # break

def generate_differential_report():
    threshold = 2
    sensitive_apis = {'PerformanceTiming.responseStart', 'CanvasRenderingContext2D.beginPath', 'Window.name', 'DynamicsCompressorNode.connect', 'CanvasRenderingContext2D.arc', 'Window.requestAnimationFrame', 'CanvasRenderingContext2D.restore', 'PermissionStatus.state', 'Window.btoa', 'AudioParam.setValueAtTime', 'Navigator.appVersion', 'ScreenOrientation.unlock', 'Window.screenY', 'Window.defaultstatus', 'MediaSource.readyState', 'Window.clearTimeout', 'PluginArray.length', 'Navigator.mediaCapabilities', 'DeviceMotionEventRotationRate.beta', 'CSSStyleSheet.insertRule', 'IntersectionObserverEntry.intersectionRatio', 'PluginArray.refresh', 'Window.crypto', 'Navigator.connection', 'MutationRecord.addedNodes', 'WebSocket.readyState', 'Navigator.productSub', 'PerformanceTiming.loadEventStart', 'Screen.colorDepth', 'WebGLShaderPrecisionFormat.precision', 'ProgressEvent.total', 'WebGL2RenderingContext.createTexture', 'CanvasRenderingContext2D.quadraticCurveTo', 'PerformanceResourceTiming.toJSON', 'Navigator.appCodeName', 'CanvasRenderingContext2D.createRadialGradient', 'NetworkInformation.saveData', 'Navigator.keyboard', 'CanvasRenderingContext2D.closePath', 'SourceBuffer.updating', 'Navigator.mimeTypes', 'CanvasGradient.addColorStop', 'Performance.timeOrigin', 'Navigator.locks', 'Window.matchMedia', 'OfflineAudioContext.createDynamicsCompressor', 'Window.requestIdleCallback', 'Screen.height', 'ImageData.data', 'Window.length', 'Window.open', 'Screen.pixelDepth', 'GainNode.gain', 'WebGL2RenderingContext.isContextLost', 'CanvasRenderingContext2D.rect', 'WebGL2RenderingContext.bindTexture', 'Window.window', 'DeviceOrientationEvent.gamma', 'Screen.orientation', 'ScreenOrientation.angle', 'Window.speechSynthesis', 'History.length', 'Navigator.appName', 'Window.closed', 'CSSStyleDeclaration.getPropertyValue', 'Window.frames', 'WebGL2RenderingContext.getExtension', 'Navigator.languages', 'Navigator.vendorSub', 'Window.webkitRequestFileSystem', 'Geolocation.watchPosition', 'Window.location', 'Geolocation.clearWatch', 'CanvasRenderingContext2D.lineTo', 'Window.fetch', 'PerformanceResourceTiming.responseEnd', 'IntersectionObserver.observe', 'Window.onerror', 'IntersectionObserver.disconnect', 'ServiceWorkerContainer.controller', 'Window.top', 'Window.setTimeout', 'RTCSessionDescription.sdp', 'Navigator.hardwareConcurrency', 'TimeRanges.start', 'WebGL2RenderingContext.texImage2D', 'Window.locationbar', 'TextEncoder.encode', 'DeviceOrientationEvent.alpha', 'SourceBuffer.buffered', 'MimeTypeArray.namedItem', 'CSSStyleDeclaration.cssText', 'MutationObserver.observe', 'CanvasRenderingContext2D.stroke', 'Window.pageXOffset', 'DynamicsCompressorNode.release', 'PerformanceObserverEntryList.getEntries', 'MediaQueryList.addListener', 'PerformanceTiming.navigationStart', 'Window.document', 'Navigator.cookieEnabled', 'Screen.availTop', 'Window.screenX', 'PerformanceTiming.fetchStart', 'CSSStyleSheet.cssRules', 'Navigator.plugins', 'Navigator.vendor', 'CanvasRenderingContext2D.save', 'Window.external', 'Navigator.doNotTrack', 'Window.visualViewport', 'Screen.availHeight', 'CanvasRenderingContext2D.rotate', 'MutationRecord.target', 'Screen.availLeft', 'Window.performance', 'IdleDeadline.timeRemaining', 'WebGL2RenderingContext.texParameteri', 'WebGL2RenderingContext.getParameter', 'Window.getComputedStyle', 'Performance.timing', 'WebGLRenderingContext.getParameter', 'Navigator.javaEnabled', 'Navigator.userAgentData', 'WebGL2RenderingContext.isEnabled', 'Window.clientInformation', 'Window.devicePixelRatio', 'ScreenOrientation.lock', 'Crypto.getRandomValues', 'DynamicsCompressorNode.threshold', 'CanvasRenderingContext2D.fill', 'Performance.measure', 'MimeTypeArray.length', 'WebGLLoseContext.loseContext', 'Window.atob', 'Window.pageYOffset', 'Window.screenTop', 'DeviceMotionEventRotationRate.gamma', 'MediaDevices.getDisplayMedia', 'CanvasRenderingContext2D.ellipse', 'PluginArray.namedItem', 'HTMLCanvasElement.getContext', 'DOMRect.y', 'Navigator.getBattery', 'TimeRanges.length', 'MutationRecord.attributeName', 'Window.parent', 'Geolocation.getCurrentPosition', 'BatteryManager.level', 'CanvasRenderingContext2D.clearRect', 'DeviceOrientationEvent.beta', 'WebGL2RenderingContext.canvas', 'TextDecoder.decode', 'Window.screen', 'IntersectionObserver.unobserve', 'Screen.availWidth', 'Screen.left', 'CanvasRenderingContext2D.fillText', 'SourceBuffer.appendBuffer', 'CanvasRenderingContext2D.createLinearGradient', 'TextMetrics.fontBoundingBoxAscent', 'Window.screenLeft', 'IntersectionObserverEntry.target', 'Window.event', 'Window.opener', 'CanvasRenderingContext2D.translate', 'ScreenOrientation.type', 'PresentationRequest.getAvailability', 'WebGLRenderingContext.canvas', 'CanvasRenderingContext2D.getImageData', 'IntersectionObserverEntry.isIntersecting', 'CanvasRenderingContext2D.clip', 'CanvasRenderingContext2D.bezierCurveTo', 'CanvasRenderingContext2D.measureText', 'NetworkInformation.type', 'PluginArray.item', 'MediaQueryList.matches', 'PerformanceResourceTiming.fetchStart', 'CanvasRenderingContext2D.strokeText', 'PerformanceResourceTiming.responseStart', 'Screen.width', 'Navigator.platform', 'WebGL2RenderingContext.deleteProgram', 'CSSRuleList.length', 'OfflineAudioContext.createOscillator', 'Window.self', 'Navigator.language', 'ProgressEvent.loaded', 'DynamicsCompressorNode.ratio', 'Crypto.subtle', 'PerformanceResourceTiming.connectStart', 'PerformanceTiming.connectEnd', 'CanvasRenderingContext2D.moveTo', 'Performance.memory', 'OscillatorNode.frequency', 'CSSStyleDeclaration.setProperty', 'Navigator.xr', 'TimeRanges.end', 'MimeTypeArray.item', 'Window.setInterval'}
    dir = "/home/azafar2/VV8_PDG_mapping/additional/data/"
    domainPaths = os.listdir(dir)
    data = {}
    for i,domainPath in enumerate(domainPaths):
        print(i)
        # if i == 5:
        #     break
        data[domainPath] = {}
        path = os.path.join(dir,domainPath)
        filePath = os.path.join(path,"script_agg.json")
        with open(filePath) as fp:
            agg = json.load(fp)
            fp.close()
        for domain in agg:
            data[domainPath][domain] = {}
            for i,url in enumerate(agg[domain]):
                try:
                    mobile_apis = [str(x[0])+"_"+x[1] for x in agg[domain][url]['mobile']['exec_nodes']]
                    code = agg[domain][url]['mobile']['code']
                    desktop_apis = [str(x[0])+"_"+x[1] for x in agg[domain][url]['desktop']['exec_nodes']]
                    intersection_apis = list(set(mobile_apis).intersection(desktop_apis))
                    mobile_unique_apis = list(set(mobile_apis).difference(desktop_apis))
                    desktop_unique_apis = list(set(desktop_apis).difference(mobile_apis))
                    if len(mobile_unique_apis) > threshold or len(mobile_unique_apis) > threshold:
                        mobileCount, desktopCount = 0,0
                        for api in mobile_unique_apis:
                            api = api.split('_')[-1]
                            if api in sensitive_apis:
                                mobileCount += 1
                        
                        for api in desktop_unique_apis:
                            api = api.split('_')[-1]
                            if api in sensitive_apis:
                                desktopCount += 1
                        
                        if mobileCount > threshold or desktopCount > threshold:

                            data[domainPath][domain][url] = {
                                "intersectionApis": intersection_apis,
                                "mobileUniqueApis": mobile_unique_apis,
                                "desktopUniqueApis": desktop_unique_apis
                            }
                except:
                    continue

    save_to_json(data,'./additional/aggregatedData.json')


    
def foo():
    std_api = FPIdldata()
    agg = read_json('/home/azafar2/VV8_PDG_mapping/additional/graph_analysis/godaddy.com/agg_data.json')
    i = agg['godaddy.com']['desktop']['https://d9.flashtalking.com/d9core']
    code = i['code']
    apis = i['apis']
    open('/tmp/content.js', 'w').close()
    with open("/tmp/content.js","w") as fp:
        fp.write(jsbeautifier.beautify(code))
    fp.close()
    
    filepath = '/tmp/content.js'
    benchmarks = dict()
    pdg = get_data_flow(filepath,benchmarks=benchmarks)
    for feature in apis:
        if feature[feature.index(",")+1:] in std_api:
            if len(feature.split(",")) > 1:
                start,api = feature.split(",")
                start = int(start)
                map_API(pdg, start, api)
    exec_nodes = set()
    exec_nodes = {(720,"Navigator.platform"),(2064,"Navigator.plugins"),(161,"Navigator.language"),(126,"Window.devicePixelRatio")}
    exec_nodes = {(2056,"Navigator.plugins")}
    
    # target = []
    # t = []
    # exec_nodes = {(720,"Navigator.platform")}
    # get_node_parents(pdg,2013,target) # function
    # get_node_parents(pdg,2021,target) # 'm'
    
    
    for n in exec_nodes:
        node_id = n[0]
        api_name = n[1]
        target = []
        node_parents = get_node_parents(pdg,node_id,target)
        for i in target:
            name = ""
            attributes = i.get_attributes()
            if "name" in i.get_attributes():
                name = i.get_attributes()["name"]
                print(f'{name} ',end=' ')
            print(f"{i.get_id()},{i.get_name()}")
        print("\n")
    
    target = []
    get_node_parents(pdg,2021,target)
    curr = target[0] # m
    print(curr.get_attributes())
    chain = []
    root = copy.deepcopy(curr)
    trace(curr, chain, root)
    print(chain)


# run()

def get_node_parents(node, id, target):
    if node is None:
        return node
    if node.is_leaf():
        return node
    else:
        for child in node.get_children():
            # print(child.get_attributes())
            if child.get_id() == id:
                target.append(child)
                curr = child.parent
                while curr != None:
                    target.append(curr)
                    curr = curr.parent
                return node
            get_node_parents(child, id, target)
            


def dummy():
    filename = "/home/azafar2/VV8_PDG_mapping/additional/data/wp.com/script_agg.json"
    d = read_json(filename)
    for domain in d:
        for script in d[domain]:
            scriptUrl = 'https://www.google-analytics.com/analytics.js'
            if script == scriptUrl:
                print(1)
                scriptdata = d[domain][script]['desktop']
                code = scriptdata['code']

                open('/tmp/content.js', 'w').close()
                with open("/tmp/content.js","w") as fp:
                    fp.write(jsbeautifier.beautify(code))
                fp.close()
                
                filepath = '/tmp/content.js'
                benchmarks = dict()
                pdg = get_data_flow(filepath,benchmarks=benchmarks)
                target = []
                get_node_parents(pdg,17398,target)

                for node in target:
                    if (node.get_name()) == "IfStatement":
                        print(node.get_attributes())
                        # draw_pdg(node.get_parent(), attributes=True, save_path='./additional/graphs/google_analytics')
    # break


def get_common_domains():
    with open('desktop_mapping.json') as f:
        data = json.load(f)
        desktop_websites = list(data.keys())
        desktop_websites = [x.replace("https://","").replace('http://','') for x in desktop_websites]
        desktop_websites = list(set(desktop_websites))
    mobile_websites = [x for x in os.listdir('/home/azafar2/logs/')]
    # find the intersection
    common_websites = set(desktop_websites).intersection(mobile_websites)
    return list(common_websites)

if __name__ == '__main__':
    
    filename = '/home/azafar2/VV8_PDG_mapping/additional/data/wp.com/script_agg.json'
    # foo()
    # dummy()
    # run()
    batchProcess(['kakuyomu.jp'])
    # analyse_agg_scripts(filename)
    # generate_differential_report()
    
    

    