import json
import os
import sys
from pdgs_generation import *


# kind of an ad hoc way of getting the node
def get_node(node, name, target):
    if node is None:
        return node
    else:
        for child in node.get_children():
            if ('name' in child.get_attributes() and child.get_attributes()['name'] == name) or ('value' in child.get_attributes() and child.get_attributes()['value'] == name):
                target.append(copy.deepcopy(child))
                print(len(target))
            get_node(child, name, target)


# get program dependency graph - need to provide the script file path
def get_pdg(file_name):
    pdg = get_data_flow(file_name, benchmarks=dict())
    return pdg

# better to us this function if you have the node id already
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


# run the conditionality check on the given node (node_id is the id of the node in the pdg)
def condionality_check(pdg, node_id):
    target = []
    get_node_parents(pdg, node_id, target)
    api_node = target[0] # this is the unique node(execd in only one platform) for which we are checking if a conditionality exists

    """
    for conditionality, we need to check two cases
    1. if the node has a direct parent which is a conditional node
        that includes the following: i.get_name() == "IfStatement" or i.get_name() == "ConditionalExpression" or i.get_name() == "SwitchStatement"
    2. if the node has a parent which is a block statement and contains a conditional node that is not a direct parent of the node 
        AND that conditional node has a children node that is a return statement
    """
    # case 1
    while api_node.get_parent():
        if api_node.is_condition():
            return True
        api_node = api_node.get_parent()

    # case 2
        while api_node.get_parent():
            if api_node.get_name() == "BlockStatement":
                for i in api_node.get_children():
                    if i.is_condition():
                        for j in i.get_children():
                            if j.get_name() == "ReturnStatement":
                                return True
            api_node = api_node.get_parent()
    return False