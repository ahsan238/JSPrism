from pdgs_generation import *
import copy
import bisect
from FPstatic import print_node
from information import *
from FPanalysis import *
from pathlib import Path


# General idea: we have two executed API sequences from dynamic analysis, 
# one is from desktop and another one is from mobile (e.g. Android specifically).
# We make comparison and get the variant executed API which is executed in one 
# platform but not another one. The reasonable deduction is that there is some
# conditionals affecting the execution of this API and the job of this file is
# to find the root cause of the different execution. 

# Right now, we have the variant executed API. We know it is executed, so its 
# lowest direct conditional node is very likely to be the casue. Most of cases
# is under this situation and other situations require no API execution before 
# given divergent API (otherwise divergent API will be any API before the given
# one). So other situations are more of nested conditionals that serve same as
# conditionals combined through AND operator. Experiments is needed to see if 
# such situations exist. 

# Thus, it is reasonable to focus on the lowest direct conditional first. Let's
# start with naive search algorithm that searches lowest direct conditional node.
# However, there is a case that given divergent node is not under conditional node
# but right behind a conditional statement that contains a control flow statement.
# In such case, the control flow statement (e.g. return) will change execution 
# sequence of the script and thus the divergent API. 

# There is a better heuristic for search algorithm. We know there must be a conditional
# statement node affecting the divergent node. The better search algorithm will be 
# seaching closest conditional statement node relative to divergent node. For examaple,
# in the case of: if (conditional1) {return} if (conditional2) {divergent node}, 
# conditional2 is closer to our divergent node, so we will mark it as the cause and return 
# it.


def getTheCondition(divergent_node, file_name):
    cdc = getClosestDirectConditional(divergent_node)
    cic = getClosestIndirectConditional(divergent_node, cdc)
    cdc_le = getClosestDirectLogicalExpression(divergent_node)
    cic_le = getClosestIndirectLogicalExpression(divergent_node, cdc)

    co = pickClosestOne(cdc, cic, divergent_node, file_name)
    co_le = pickClosestOne(cdc_le, cic_le, divergent_node, file_name)
    tco = pickClosestOne(co, co_le, divergent_node, file_name)
    print_node(divergent_node.get_parent())
    # when divergent node is in function definition and the divergent happens in the corresponding # function call
    if not co and not co_le and not tco:
        return None
    s = getSymbol(tco, divergent_node)
    return s

def getClosestDirectConditional(divergent_node):
    fcdc = getClosestParentalConditionalStatement(divergent_node)
    return fcdc

def getClosestIndirectConditional(divergent_node, fcdc): 
    fcsc = getClosestSiblingConditionalStatement(divergent_node, fcdc)
    return fcsc

def getFuncCall(node):
    s = getClosestParentalStatement(node)
    if not s:
        return None
    if len(s.data_dep_children) == 0:
        return None
    if len(s.data_dep_children) > 1:
        print("We cannot handle it")
    for i in s.data_dep_children:
        begin = i.get_id_begin()
        end = i.get_id_end()
        return end
    

# find the closest distance to z
# in this case, character offset
def pickClosestOne(x, y, z, fname):
    beforeAND = False
    
    xsi,xei = getCharacterOffset(x)
    ysi,yei = getCharacterOffset(y)
    zsi,zei = getCharacterOffset(z)

    if hasAND(x):
        with open(fname, "r") as f:
            logicalExpression = str(f.read())[xsi:]
            position = logicalExpression.find('&&')
            if position != -1 and position + xsi < zsi:
                beforeAND = True
    if hasAND(y):
        with open(fname, "r") as f:
            logicalExpression = str(f.read())[ysi:]
            position = logicalExpression.find('&&')
            if position != -1 and position + ysi < zsi:
                beforeAND = True

    # we only care symbols before z due to code execution sequnce
    dxe = abs(zei - xei)
    dye = abs(zei - yei)
    dxs = abs(zsi - xsi)
    dys = abs(zsi - ysi)
    m = min(dxe,dye,dxs,dys)
    
    if m == dxe or m == dxs:
        return x
    elif m == dye or m == dys:
        return y
    elif xei > zei and yei > zei and beforeAND:
        return None
    else:
        print("Check this case!!!")
        return None 

def hasAND(node):
    if node and 'operator' in node.get_attributes():
        return node.get_attributes()['operator'] == "&&"
    return False

def getCharacterOffset(node):
    if node and 'range' in node.get_attributes():
        return node.get_attributes()['range'][0],node.get_attributes()['range'][1]
    else:
        return 1000000000000000,1000000000000000

def getClosestParentalConditionalStatement(node):
    while node.get_parent():
        if node.is_condition() and not isInForLoop(node):
            return node
        node = node.get_parent()
    return None

def getClosestParentalStatement(node):
    while node.get_parent():
        if node.is_real_statement():
            return node
        node = node.get_parent()
    return None

# fcsc is to ensure we have sibling rather than parent
def getClosestSiblingConditionalStatement(node, fcsc):
    p = node
    while p.get_parent():
        p = p.get_parent()
        for i in p.get_children():
            if i.is_condition() and i.get_attributes()['range'][1] < node.get_attributes()['range'][0] and i != fcsc and not isInForLoop(i):
                return i
        
    return None

def getClosestDirectLogicalExpression(node):
    while node.get_parent():
        if node.is_logical_expression() and not isInForLoop(node):
            return node
        node = node.get_parent()
    return None

# fcsc is to ensure we have sibling rather than parent
def getClosestIndirectLogicalExpression(node, fcsc):
    p = node
    while p.get_parent():
        p = p.get_parent()
        for i in p.get_children():
            if i.is_logical_expression() and i.get_attributes()['range'][1] < node.get_attributes()['range'][0] and i != fcsc and not isInForLoop(i):
                return i
        
    return None

def getClosestIfNode(children, divergent_node):
    childrenOffsets = []
    for i in children:
        childrenOffsets.append(i.get_attributes()['range'][1])
    dOffset = divergent_node.get_attributes()['range'][0]
    index = bisect.bisect_left(childrenOffsets, dOffset)

    if index == 0:
        return None
    else:
        return children[:index]
    
def getSymbol(conditional_statement, divergent_node):
    if conditional_statement == None:
        return None
    for i in conditional_statement.get_children():
        if i.get_name() == "Identifier":
            return i
        # when it has muiltiple conditionals (e.g. test4)
        if conditional_statement.get_name() == "LogicalExpression":
            # le = handleLogicalExpression(i)
            # if not le:
            #     print("le cannot be NULL!!!")
            return conditional_statement
        # when it is if + else if
        if conditional_statement.get_name() == "IfStatement" and len(conditional_statement.get_children()) > 2:
            cn = getClosestIfNode(conditional_statement.get_children(),divergent_node)
            if not cn:
                print("Closest if node does not exist. Check!!!")
            for child in reversed(cn):
                if child.get_name() == "UnaryExpression" or child.get_name() == "BinaryExpression" or child.get_name() == "LogicalExpression":
                    return child
            return cn[-1]
        # When it is ternary case (e.g. test3)
        if i.get_name() == "BinaryExpression":
            return i
        if i.get_name() == "MemberExpression":
            return i

    # when it is the last switch case (e.g. test2)
    # we look for switch(TARGET)
    if conditional_statement.get_name() == "SwitchCase":
        for i in conditional_statement.get_parent().get_children():
            if i.get_name() == "Literal":
                return i

    print("Impossible!!!")
    return None

def handleLogicalExpression(logical_node):
    for i in logical_node.get_children():
        for j in i.get_children():
            if j.get_name() == "Identifier":
                return j
    return None

def getIdentifier(node, name, target):
    if node is None:
        return node
    for child in node.get_children():
        if ('name' in child.get_attributes() and child.get_attributes()['name'] == name) or ('value' in child.get_attributes() and child.get_attributes()['value'] == name):
            target.append(copy.deepcopy(child))
        getIdentifier(child, name, target)
            
            
# given node id, find all the parent nodes
def getParentNode(node, id, target):
    if node is None:
        return node
    for child in node.get_children():
        if child.get_id() == id:
            print(node.get_attributes())
            target.append(copy.deepcopy(child))
        getParentNode(child, id, target)
    return None

def getNodeByOffset(node, offset, target):
    if node is None:
        return node
    for child in node.get_children():
        print(child.get_attributes())
        # if 'range' in child.get_attributes() and child.get_attributes()['range'][0] == offset or child.get_attributes()['range'][0] == offset+1:
        if 'range' in child.get_attributes() and child.get_attributes()['start'] == offset or child.get_attributes()['start'] == offset+1:
            target.append(copy.deepcopy(child))
        getNodeByOffset(child, offset, target)
    return None

def isInForLoop(node):
    return getClosestParentalStatement(node).get_name() == "ForStatement"

# check if there is a logical expression in the lineage and if so, return the other child of the logical expression - this child will be explored
def checkLogicalExpression(node):
    # check if in the parent node, there is a logical expression
    while(node.get_parent() != None):
        if node.get_parent().get_name() == "LogicalExpression":
            # check if the node is the left or right child of the logical expression
            if node.get_parent().get_children()[0].get_id() == node.get_id():
                return node.get_parent().get_children()[1]
            else:
                return node.get_parent().get_children()[0]
        node = node.get_parent()


# given a node whose parent is the logical expression, we hunt for the conditional node 
def checkLogicalExpressionChild(node, target):
    # descend into the children of the logical expression and search for the conditional node
    while(node.get_children() != []):
        for child in node.get_children():
            if child.get_name() == "Identifier":
                print(child.id, child, child.get_attributes())
                target.append(copy.deepcopy(child))
            checkLogicalExpressionChild(child, target)
        break

# test function for conditional that occurs under logical expression
def testLogicalExpressionConditional(node):
    """
    function checkMaxTouchPoints() {
    let list = [];
    navigator.maxTouchPoints && list.push(navigaotr.maxTouchPoints);
    return list;
    }
    """
    target = []
    logicalNodeOtherChild = checkLogicalExpression(node)
    if logicalNodeOtherChild:
                print('logical node found')
                target = []
                checkLogicalExpressionChild(logicalNodeOtherChild, target)
                print(len(target))

def getLogicalExpression(node, identifiers):
    if not node or not node.get_children():
        return node
    for child in node.get_children():
        if child.get_name() == "Identifier" or child.get_name() == "Literal":
            identifiers.append(child)
        getLogicalExpression(child, identifiers)
    return None

def hasOnlyFunctioncallChildren(node):
    functioncallFlag = True
    for child in node.get_children():
        if child.get_name() != "CallExpression" and child.get_name() != "BlockStatement" and child.get_name() != "BinaryExpression" and child.get_name() != "MemberExpression" and child.get_name() != "UnaryExpression":
            functioncallFlag = False
    return functioncallFlag

if __name__ == '__main__':
    # Entry
    # pdg = get_data_flow('condition_tests/mtp.js', benchmarks=dict())
    file_name = 'condition_tests/365scores.js'
    pdg = get_data_flow(file_name, benchmarks=dict())
    
    if pdg:
        print("Got pdg!!!")
        t = []
        # getIdentifier(pdg,"userAgent",t)
        getNodeByOffset(pdg, 90, t)
        # print the length of t
        print(len(t))
        # print(t[0].get_id())
        # curr = t[0]
        print_node(t[0])
        # print(curr.get_children()[0].get_attributes())
        # print(curr.is)
        
        c = getTheCondition(t[0],file_name)
        if not c:
            cfc = getFuncCall(t[0])
            if cfc:
                fc = getTheCondition(cfc,file_name)
                print_node(fc)
            else:
                print("No Function call nor condition")
            
        else:
            print('-----------------')
            print_node(c)
            print('conditional node found')
            chain = []
            identifiers= []
            if c.get_name() == "LogicalExpression" and hasOnlyFunctioncallChildren(c): 
                getLogicalExpression(c,identifiers)
                for i in identifiers:
                    print_node(i)
            elif c.get_name() == "LogicalExpression":
                getLogicalExpression(c,identifiers)
                for i in identifiers:
                    trace(i, chain)
                if len(chain) > 0:
                    print('chain established')
                for i in chain:
                    print_node(i)
            else:
                trace(c, chain)
                if len(chain) > 0:
                    print('chain established')
                for i in chain:
                    print_node(i)
        # else:
        #     testLogicalExpressionConditional(t[1])
        


       