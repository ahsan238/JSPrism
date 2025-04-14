from FPstatic import * 
from node import *
#TODO: 2. check information flow after getPlugin 
def getFuncReturnedValues(node, inode, rhs_list,rhs_total):
    if node is None:
        return node
    else:
        for child in node.get_children():
            if child.get_name() == "Identifier" and child not in rhs_total:
                if child.get_parent().get_parent().get_name() == "ReturnStatement" or child.get_parent().get_name() == "ReturnStatement":
                    rhs_list.append(child)
            getFuncReturnedValues(child, inode, rhs_list,rhs_total)         

# get function declaration which is also parent of given node 
def getFunctionDclrOrExpr(node):
    ffs = None
    while node.get_parent():
        if node.get_name() == "FunctionDeclaration":
            ffs = node
            break 
        node = node.get_parent()
    return ffs

def getBlock(node):
    block = None
    while node.get_parent():
        if node.get_name() == "BlockStatement":
            ffs = node
            break 
        node = node.get_parent()
    return ffs

def getMethodAppearance(nodeName, node, root, appreance):
    if node is None or node.is_leaf():
        return node
    else:
        for child in root.get_children():
            if "name" in node.get_attributes() and node.get_attributes()['name'] == nodeName and node not in appreance:
                appreance.append(node)
            getMethodAppearance(nodeName, node, child, appreance) 

# If given node is variable which has initial declaration value
# we also want this value, but it requires us going through the
# whole data flow chain. This function returns other appearance 
# of given node. 
def getAppearance(node):
    otherAppearance = []
    inputs = []
    dataflow_stt = get_dataflow_stt(node)
    # looking for function declaration of given function call node
    if node.get_name() == "CallExpression":
        if len(dataflow_stt.data_dep_children) > 0:
            print("CallExpression should not have dep children!")
        for i in dataflow_stt.data_dep_parents:
            for j in node.get_children():
                if j == i.get_id_begin() and i.get_id_end() not in otherAppearance:
                    otherAppearance.append(i.get_id_end())
                elif j == i.get_id_end() and i.get_id_begin() not in otherAppearance:
                    otherAppearance.append(i.get_id_begin())
                else:
                    inputs.append(j)

    # looking for function call node of given function expression
    elif node.get_name() == "FunctionExpression":
        if len(dataflow_stt.data_dep_parents) > 0:
            print("FunctionExpression should not have dep parents!")
        for i in dataflow_stt.data_dep_children:
            for j in node.get_children():
                if j == i.get_id_begin() and i.get_id_end() not in otherAppearance:
                    otherAppearance.append(i.get_id_end())
                elif j == i.get_id_end() and i.get_id_begin() not in otherAppearance:
                    otherAppearance.append(i.get_id_begin())
                else:
                    print("FunctionExpression should not have else!")

    # looking for function call node of given function declaration
    elif node.get_name() == "FunctionDeclaration":
        if len(dataflow_stt.data_dep_parents) > 0:
            print("FunctionDeclaration should not have dep parents!")
        for i in dataflow_stt.data_dep_children:
            for j in node.get_children():
                if j == i.get_id_begin() and i.get_id_end() not in otherAppearance:
                    otherAppearance.append(i.get_id_end())
                elif j == i.get_id_end() and i.get_id_begin() not in otherAppearance:
                    otherAppearance.append(i.get_id_begin())
                else:
                    inputs.append(j)


    # when given node is a variable

    for i in dataflow_stt.data_dep_parents:
        if node == i.get_id_begin() and i.get_id_end() not in otherAppearance:
            otherAppearance.append(i.get_id_end())
        if node == i.get_id_end() and i.get_id_begin() not in otherAppearance:
            otherAppearance.append(i.get_id_begin())
    
    for i in dataflow_stt.data_dep_children:
        if node == i.get_id_begin() and i.get_id_end() not in otherAppearance:
            otherAppearance.append(i.get_id_end())
        if node == i.get_id_end() and i.get_id_begin() not in otherAppearance:
            otherAppearance.append(i.get_id_begin())
    return otherAppearance

# Besides assignment and declaration, another big factor we need 
# to consider is function. For function, we only care about input 
# and output. For output case, the node we want is like a = func(b)
# Take a step further, a -> return value of func -> input of func b
# Between input and return, it is just assignment and declaration case.
# For input case, func(b), we do not care about the down flow of the 
# information in Ahsan's project. However, in browser fingerprinting
# case, this is exactly what we want when finding the source. 
def getFunctionInput(node,rhs_total):
    # a = func(b)
    if node.get_parent().get_name() == "CallExpression":
        rhs = []
        fd = []
        fd = getAppearance(node.get_parent())
        if len(fd) > 1:
            print("There should be only one function declaration")
        for i in fd:
            if i.get_parent().get_name() == "FunctionDeclaration" or i.get_parent().get_name() == "FunctionExpression":
                # Trace information flow inside function declaration tree
                getFuncReturnedValues(i.get_parent(), i, rhs,rhs_total)
        
        # Handle function input
        for i in node.get_parent().get_children():
            if i.get_name() == "Identifier" and i.get_body() == "arguments":
                rhs.append(i)

        return rhs
    # if given node's parent is FE, this node is function input argument
    elif node.get_parent().get_name() == "FunctionExpression":
        rhs = []
        fe = []
        fe = getAppearance(node.get_parent())
        
        for i in fe:
            if i.get_parent().get_name() == "CallExpression":
                # Trace information flow inside function declaration tree
                getFuncReturnedValues(i.get_parent(), i, rhs,rhs_total)

        return rhs
    
    # if given node's parent is FD, this node is either function input argument or function name
    elif node.get_parent().get_name() == "FunctionDeclaration":
        rhs = []
        # we want all function calls
        dataflow_stt = get_dataflow_stt(node)
        
        data_dep_pairs = []
        if len(dataflow_stt.data_dep_children) == 0:
            print("It should have dataflow_stt.data_dep_children")
        for i in dataflow_stt.data_dep_children:
            for j in node.get_children():
                if j == i.get_id_begin() or j == i.get_id_end():
                    data_dep_pairs.append([i.get_id_begin(),i.get_id_end()])
                
        for i in data_dep_pairs:
            if i[0].get_parent().get_name() == "CallExpression":
                for j in i[0].get_parent().get_children():
                    if i[0] != j:
                        rhs.append(j)
            else:
                print("This should not happen!")
            if i[1].get_parent().get_name() == "CallExpression":
                for j in i[1].get_parent().get_children():
                    if i[1] != j:
                        rhs.append(j)
            else:
                print("This should not happen!!")
        return rhs
                
    # if given node's parent is MemberExpression, this node is either function or interface/receiver
    elif node.get_parent().get_name() == "MemberExpression":
        rhs = []
        fd = []
        fd = getAppearance(node.get_parent())
        if len(fd) > 1:
            print("There should be only one function declaration")
        for i in fd:
            if i.get_parent().get_name() == "FunctionDeclaration" or i.get_parent().get_name() == "FunctionExpression":
                # Trace information flow inside function declaration tree
                getFuncReturnedValues(i.get_parent(), i, rhs,rhs_total)
        
        if node.get_parent().get_parent().get_name() == "CallExpression" or node.get_parent().get_parent().get_name() == "LogicalExpression":
            # Handle function input
            for i in node.get_parent().get_parent().get_children():
                if i.get_name() == "Identifier" and i.get_body() == "arguments":
                    rhs.append(i)  

        return rhs
    else:
        return []

# find other function calls that may lead to a assignment
def getMemberExpression(node, initial_nodeSibling, rhs, rhs_buffer):
    if node.get_name() != "Identifier" or 'name' not in node.get_attributes():
        print("Check this case!")
    if node.get_parent().get_name() != "MemberExpression":
        return
    if not initial_nodeSibling:
        return
    
    nodeAppearance = getAppearance(node)
    for na in nodeAppearance:
        if na not in rhs_buffer:
            rhs_buffer.append(na)
            # when both are the same foo.bar
            if set(getIdentifiers(initial_nodeSibling)) == set(getIdentifiers(na.get_parent().get_children())) and set(initial_nodeSibling) != set(na.get_parent().get_children()):
                for child in na.get_parent().get_children():
                    rhs.append(child)
            # when one is foo.bar and another one is foo.far,
            # we only look for data flows of foo
            else:
                getMemberExpression(na, initial_nodeSibling, rhs, rhs_buffer)

    return

def getIdentifiers(nodelist):
    ids = []
    for i in nodelist:
        if i.get_name() == "Identifier" and 'name' in i.get_attributes():
            ids.append(i.get_attributes()['name'])
    return ids

# get all children nodes which have name (e.g. variables) of given input node
# b = a + 2. Only using for loop is not efficient since we don't know how 
# complicate the code is  
def getAllChildren(node, children):
    if node is None:
        return node
    else:
        for child in node.get_children():
            if child not in children:
                children.append(child)
            getAllChildren(child, children)  

def getAssignment(node, innode, rhs_total):
    if node.get_parent().get_name() == "AssignmentExpression":
        rhs = []
        for i in node.get_parent().get_children():
            if i != node and i.get_attributes()['start'] > node.get_attributes()['end'] and i not in rhs_total:
                children = []
                getAllChildren(i,children)
                children.append(i)
                for j in children:
                    if j not in rhs_total:
                        rhs.append(j)
        return rhs
    elif node.get_parent().get_name() == "MemberExpression" and node.get_parent().get_parent().get_name() == "AssignmentExpression" and set(getIdentifiers(node.get_parent().get_children())) == set(getIdentifiers(innode.get_parent().get_children())):
        rhs = []
        for i in node.get_parent().get_parent().get_children():
            if i != node.get_parent() and i.get_attributes()['start'] > node.get_parent().get_attributes()['end']:
                for j in i.get_children():
                    if j not in rhs_total:
                        rhs.append(j)
        return rhs
    else:
        return []

# handles var x = a and var x = func()
def getDeclaration(node,rhs_total):
    if node.get_parent().get_parent().get_name() == "VariableDeclaration" or node.get_parent().get_parent().get_name() == "FunctionDeclaration":
        rhs = []
        for i in node.get_parent().get_children():
            if i != node and i not in rhs_total:
                children = []
                getAllChildren(i,children)
                children.append(i)
                for j in children:
                    if j not in rhs_total:
                        rhs.append(j)
        return rhs
    else:
        return []
    
def getRoot(node):
    while node.get_parent():
        node = node.get_parent()
    return node

def getSibling(node):
    sbl = []
    for i in node.get_parent().get_children():
        if i != node:
            sbl.append(i)
    return sbl

def getSiblingTwoGen(node):
    sbl = []
    for i in node.get_parent().get_parent().get_children():
        if i != node.get_parent():
            children = []
            getAllChildren(i,children)
            sbl += children
    return sbl

# Get sibling nodes and thier names of given node
def getSiblingAndNames(node):
    sbl = []
    sblnames = []
    for i in node.get_parent().get_children():
        if i != node:
            sbl.append(i)
            sblnames.append(i.get_name())
    return sbl,sblnames

def checkFuncDeclarationAndCallsites(node):
    sib = []
    callsites = []
    ffs = getFunctionDclrOrExpr(node)
    if not ffs:
        return [],[]
    ffs_start = ffs.get_attributes()['start']
    ffs_end = ffs.get_attributes()['end']
    if len(ffs.data_dep_children) > 0:
        for i in ffs.data_dep_children:
            if i.get_id_begin().get_attributes()['start'] > ffs_end or i.get_id_begin().get_attributes()['end'] < ffs_start:
                if i.get_id_begin().get_parent().get_name() == "VariableDeclarator" or i.get_id_begin().get_parent().get_name() == "AssignmentExpression":
                    sib += getSibling(i.get_id_begin())
                if i.get_id_begin().get_parent().get_parent().get_name() == "VariableDeclarator" or i.get_id_begin().get_parent().get_parent().get_name() == "AssignmentExpression":
                    sib += getSiblingTwoGen(i.get_id_begin())
                callsites.append(i.get_id_begin())
            if i.get_id_end().get_attributes()['start'] > ffs_end or i.get_id_end().get_attributes()['end'] < ffs_start:
                if i.get_id_end().get_parent().get_name() == "VariableDeclarator" or i.get_id_end().get_parent().get_name() == "AssignmentExpression":
                    sib += getSibling(i.get_id_end())
                if i.get_id_end().get_parent().get_parent().get_name() == "VariableDeclarator" or i.get_id_end().get_parent().get_parent().get_name() == "AssignmentExpression":
                    sib += getSiblingTwoGen(i.get_id_end())
                callsites.append(i.get_id_end())
            
        return callsites, sib
    return [],[]

# with given function declaration name of given node (e.g. variable)
# and callsites of this declaraed function, we want to find the
# callsites of the function/method that is assigned by given node 
def createLink(node, func_children, callsites):
    func_name = ""
    func_callsites = []
    for i in func_children:
        if i.get_name() == "Identifier" and 'name' in i.get_attributes():
            func_name = i.get_attributes()['name']
        else:
            print("Inspection REQUIRED!!!")
    
    for cs in callsites:
        cs_block = getBlock(cs)
        block_children = []
        getAllChildren(cs_block,block_children)
        for i in block_children:
            if 'name' in i.get_attributes() and i.get_attributes()['name'] == func_name:
                if i.get_parent().get_name() == "MemberExpression":
                    for j in i.get_parent().get_children():
                        func_callsites.append(j)
                else:
                    func_callsites.append(i)
            if i.get_name() == "LogicalExpression":
                le_children = []
                getAllChildren(i,le_children)
                for j in le_children:
                    if 'name' in j.get_attributes() or 'raw' in j.get_attributes():
                        func_callsites.append(j)
    return func_callsites

def preprocess(node):
    if node.get_name() == "UnaryExpression":
        if len(node.get_children()) == 1 and node.get_children()[0].get_name() == "CallExpression":
            return node.get_children()[0]
        print("Add more rules to preprocess!!!")
        return node
    else:
        return node
        # for child in node.get_children():


# input node is the node in given pdg that we are interested in
# e.g. x = fp_func, x can be the input node. input rhs_total is 
# a set of all rhs related to input node e.g. fp_func. We are
# interested in three types of rhs: assignment, declaration, and
# function_input. This function is a recursive function which 
# mainly serves for searching all related rhs
def trace(innode, rhs_total):
    pnode = preprocess(innode)
    # get all appearance of input node
    buffer_rhs = []
    appearance = []
    appearance.append(pnode)
    appr = getAppearance(pnode)
    appearance += appr
    # check information flow of every appearance of input node
    for i in appearance:
        if i.get_parent().get_name() == "FunctionDeclaration":
            rhs_total.append(i)
            buffer_rhs.append(i)
        sbl = getSibling(i)
        sbl_names = [i.get_name() for i in sbl]
        parent_sbl = getSibling(i.get_parent())
        parent_sbl_names = [i.get_name() for i in parent_sbl]
        func_callsites = []
        function_member_list = []
        if (i.get_parent().get_parent().get_name() == "AssignmentExpression" and "MemberExpression" in parent_sbl_names):
            callsites, cs_siblings = checkFuncDeclarationAndCallsites(i)
            if callsites and cs_siblings:
                for j in parent_sbl:
                    if j.get_name() == "MemberExpression":
                        func_callsites = createLink(i, j.get_children(), callsites)
                for j in func_callsites:
                    if j not in rhs_total and j not in buffer_rhs:
                        buffer_rhs.append(j)

        if (i.get_parent().get_name() == "AssignmentExpression" and "MemberExpression" in sbl_names):
            print("Manual Inspection REQUIRED!!!")

        assignment_list = getAssignment(i,pnode,rhs_total)
        declaration_list = getDeclaration(i,rhs_total)
        function_input_list = getFunctionInput(i,rhs_total)
        getMemberExpression(i, i.get_parent().get_children(), function_member_list, [])
        buffer_rhs += assignment_list
        buffer_rhs += declaration_list
        buffer_rhs += function_input_list
        function_members = [item for item in function_member_list if item is not None]
        buffer_rhs += function_members
        # if there are new rhs
        if len(assignment_list) + len(declaration_list) + len(function_input_list) + len(func_callsites) + len(function_members) > 0:
            if pnode not in rhs_total:
                rhs_total.append(pnode)
            for j in buffer_rhs:
                flag = True
                # check if we already checked new rhs
                for k in rhs_total:
                    if j.get_attributes() == k.get_attributes():
                        flag = False
                if flag:
                    rhs_total.append(j)
                    trace(j, rhs_total)
            
def isSource(node):
    sourceFlag = False
    while node.get_parent() and not node.get_parent().is_statement():
        node = node.get_parent()
        if node.get_name() == "LogicalExpression" or node.get_name() == "BinaryExpression" or (node.get_name() == "MemberExpression" and node.get_parent().get_name() == "IfStatement"):
            sourceFlag = True
    return sourceFlag

def trace_info(innode, rhs_total):
    rhs_total_c = len(rhs_total)
    trace(innode, rhs_total)

    if len(rhs_total) - rhs_total_c == 0 and isSource(innode):
        rhs_total.append(innode)
    return rhs_total

def iterateIflowNode(node, idList):
    if node is None:
        return node

    for child in node.get_children():
        if child.get_id() in idList:
            child.set_iflow(True)
        iterate_node(child, idList)

def markIflow(iflowList, pdg):
    ids = [i.get_id() for i in iflowList]
    iterateIflowNode(pdg, ids)

