import csv
import subprocess
import ast

import json
import os
import subprocess
import sys, time
import pandas as pd
import jsbeautifier

from pdgs_generation import *
from FPstatic import *
from FPanalysis import *
import psycopg2


ANDROID_LOG_FILEPATH = "/home/azafar2/vv8-graph/VV8_PDG_mapping/sample-log-files/buyma.com-android.log"
postProcessorPath = "/home/azafar2/causality/visiblev8/post-processor/artifacts/vv8-post-processor"

lineages = []
lineageMapping = {}
debug = False
content = ''

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

def map_API(node, offset, api):
    # global lineages
    # lineages.append(node.get_id())
    # print(node.get_id())
    content_30=""
    range = []
    if node is None:
        return node
    if node.is_leaf():
        return node
    else:
        for child in node.get_children():
            r = (child.get_attributes()["range"])
            # if r[0] == 1199:
            #     currNode = child
            #     print(child.get_attributes())
                # print(currNode.get_children()[0].get_attributes())
                
            # print(r)
            # for key in child.get_attributes()["range"]:
            #     print(key)
            #     range.append(child.get_attributes()["range"][key])
            if isinstance(child.get_attributes()["range"], dict):
                for key in child.get_attributes()["range"]:
                    range.append(child.get_attributes()["range"][key])
                
                if range[0] <= offset and range[1] > offset:
                    if debug:
                        print("Range: "+str(child.get_attributes()['range']), offset, f' node id: {child.get_id()}')
                        # print("ATT: "+str(child.get_attributes()))

                    # matches Navigator.UserAgent -> a.b    
                    if range[0] == offset and "name" in child.get_attributes():
                        # print("Range: "+str(range))
                        # print(str(child.get_attributes()))
                        # print("NAME: "+str(child.get_attributes()["name"]))
                        
                        # matches Navigator.UserAgent -> Navigator.UserAgent   
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
                        # content_30 = script_code[offset:offset+30]
                        
                    # Mark the node we are entering for colorization later
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
                        # print("ATT: "+str(child.get_attributes()))
                    
                    # for j in child.get_children():
                    #     print(j.get_attributes())

                    # if child.get_attributes()["range"][0] == offset:
                    #     print(child.get_attributes())
                            
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
                            print(1)
                            # print(content_30[1:1+diff])
                            #TODO: do analysis you like
                    elif "value" in child.get_attributes() or "raw" in child.get_attributes():
                        # print("IWANT")
                        if "value" in child.get_attributes() and isinstance(child.get_attributes()["value"], str):
                            # print("kankan")
                            diff = len(child.get_attributes()["value"])
                            if child.get_attributes()["value"] == content_30[1:1+diff]:
                                print(1)
                                #TODO: do analysis you like
                        if "raw" in child.get_attributes() and isinstance(child.get_attributes()["raw"], str):
                            # print("kan")
                            diff = len(child.get_attributes()["raw"])
                            if child.get_attributes()["raw"] == content_30[1:1+diff] and get_dataflow_stt(child) not in api:
                                print(1)
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
                                    if i.get_attributes()["value"] == content_30[1:1+diff]:
                                        print(1)
                                        #TODO: do analysis you like
                                if "raw" in i.get_attributes() and isinstance(i.get_attributes()["raw"], str):
                                    # print("kan")
                                    diff = len(i.get_attributes()["raw"])
                                    if i.get_attributes()["raw"] == content_30[1:1+diff] and get_dataflow_stt(i) not in api:
                                        print(1)
                                        #TODO: do analysis you like
        
            else:
                print("ERROR!!!!!!")
    return node


# android mywebsite
# field = ["script_flow",{"APIs":["193,Navigator.userAgent","347,Window.DeviceOrientationEvent","396,Window.addEventListener","396,Window.addEventListener","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma","108,DeviceOrientationEvent.alpha","120,DeviceOrientationEvent.beta","131,DeviceOrientationEvent.gamma"],"Code":"(function(){\n\n    var x = 0\n    let fp = ' ';\n    function handleOrientation(event) {\n            x = event.alpha+event.beta+event.gamma;\n    }\n\n    try {\n        var userAgentInfo = navigator.userAgent;\n\n        fp += userAgentInfo\n        if (userAgentInfo.indexOf(\"Android\") \u003e 0 \u0026\u0026 userAgentInfo.indexOf(\"Mobile\") \u003e 0) {\n            if (window.DeviceOrientationEvent) {\n                window.addEventListener('deviceorientation', handleOrientation, true);\n                fp += '' + x\n            }\n        }\n        return fp;\n    } catch (e) {}\n    return '';\n})();\n","FirstOrigin":{"Origin":"https://ahsan238.github.io","OriginSecurityToken":""},"ID":3,"IsEvaledBy":-1,"IsVisibleV8":False,"Isolate":"0x200918000","URL":"https://ahsan238.github.io/src/sensor.js"}]



# con = psycopg2.connect(
#     database="android_1k",
#     user="azafar2",
#     password="pd",
#     host="0.0.0.0",
#     port="5432",
# )

# con = psycopg2.connect(
#     database="vv8_backend",
#     user="azafar2",
#     password="vv8",
#     host="0.0.0.0",
#     port="5434",
# )


def run():
    con = psycopg2.connect(
        database="android_1k",
        user="azafar2",
        password="pd",
        host="0.0.0.0",
        port="5432",
    )
    
    std_api = FPIdldata()
    with con.cursor(name="custom_cursor") as cursor:
        
        cursor.itersize = 1000  # chunk size
        query = "SELECT url,code,apis FROM script_flow;" # get important information
        cursor.execute(query)
        
        count = 1
        for script_name, content, features in cursor:
            if count == 3:
                break
            # print(content)
            with open("/tmp/content.js","w") as fp:
                fp.write(content)
                # fp.close()
            filepath = '/tmp/content.js'
            pdg = get_data_flow(filepath,benchmarks=dict())
            for feature in features:
                if feature[feature.index(",")+1:] in std_api:
                    if len(feature.split(",")) > 1:
                        start,api = feature.split(",")
                        start = int(start)
                        if debug:
                            print(api,start)
                        pdg = map_API(pdg, start, api)
                        
            # finding the executed nodes
            exec_nodes = get_execd_nodes(pdg)
            print(exec_nodes)
            count += 1

        cursor.close()


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
      

# run()
# if __name__ == "__main__":

#     run()

# execd_nodes = get_execd_nodes(pdg)
# print(execd_nodes)

# print(lineageMapping)
# draw_pdg(pdg, attributes=True, save_path='/home/azafar2/jstap/JStap/sample_jscode/sample1_pdg')
pdg = get_data_flow('/tmp/_content.js',benchmarks=dict())
draw_pdg(pdg, attributes=True, save_path='./additional/graphs/toy_example')
# pdg = get_data_flow(filepath, store_pdgs='/home/azafar2/jstap/JStap/sample_jscode/',benchmarks=dict(),save_path_pdg='/home/azafar2/jstap/JStap/sample_jscode/sample1_pdg')