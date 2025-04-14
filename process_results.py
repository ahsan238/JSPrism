import os
import json

def read_json_files(directory):
    json_files = [pos_json for pos_json in os.listdir(directory) if pos_json.endswith('.json')]

    json_data = []

    for file in json_files:
        with open(os.path.join(directory, file)) as json_file:
            data = json.load(json_file)
            json_data.append(data)
    
    return json_data     

def getSourceCode(data):
    si = int(data[url]["mobile"][api]["conditional_node_attributes"]["start"])
    ei = int(data[url]["mobile"][api]["conditional_node_attributes"]["end"])
    print("#######################################################")
    print(data[url]["mobile"][api]["conditional_node_attributes"])
    print("-------------------------------------------------------")
    print(data[url]["code"][si-20:ei+20])

# From the current directory
directory = '/Users/jsu6/Downloads/results'
json_data = read_json_files(directory)
empty = []
total = []
condition = []

mobile = []
mobile_condition_name = []
mobile_condition_operator = []
mobile_condition_empty = []
mobile_iflow_empty = []
mobile_iflow = []

desktop = []
desktop_condition_operator = []
desktop_condition_name = []
desktop_condition_empty = []
desktop_iflow_empty = []
desktop_iflow = []
for data in json_data:
    for url in data:
        total.append(url)
        if not data[url]["mobile"] and not data[url]["desktop"]:
            empty.append(url)
        if data[url]["mobile"]:
            mobile.append(str(data[url]["mobile"]))
            for api in data[url]["mobile"]:
                if "operator" in data[url]["mobile"][api]["conditional_node_attributes"]:
                    mobile_condition_operator.append(str(data[url]["mobile"][api]["conditional_node_attributes"]))
                elif "name" in data[url]["mobile"][api]["conditional_node_attributes"]:
                    mobile_condition_name.append(str(data[url]["mobile"][api]["iflow"]))
                    getSourceCode(data)
                else:
                    mobile_condition_empty.append(str(data[url]["mobile"][api]["iflow"]))
                if not data[url]["mobile"][api]["iflow"]:
                    mobile_iflow_empty.append(str(data[url]["mobile"][api]["iflow"]))
                else:
                    mobile_iflow.append(str(data[url]["mobile"][api]["iflow"]))


        if data[url]["desktop"]:
            desktop.append(str(data[url]["desktop"]))
            for api in data[url]["desktop"]:
                if "operator" in data[url]["desktop"][api]["conditional_node_attributes"]:
                    desktop_condition_operator.append(str(data[url]["desktop"][api]["conditional_node_attributes"]))
                elif "name" in data[url]["desktop"][api]["conditional_node_attributes"]:
                    desktop_condition_name.append(str(data[url]["desktop"][api]["iflow"]))
                    getSourceCode(data)
                else:
                    desktop_condition_empty.append(str(data[url]["desktop"][api]["iflow"]))
                if not data[url]["desktop"][api]["iflow"]:
                    desktop_iflow_empty.append(str(data[url]["desktop"][api]["iflow"]))
                else:
                    desktop_iflow.append(str(data[url]["desktop"][api]["iflow"]))


print("######################################################################")
print("len(total): "+str(len(total)))
print("len(empty): "+str(len(empty)))
print("len(mobile): "+str(len(mobile)))
print("len(mobile_condition_empty): "+str(len(mobile_condition_empty)))
print("len(mobile_condition_name): "+str(len(mobile_condition_name)))
print("len(mobile_condition_operator): "+str(len(mobile_condition_operator)))
print("len(mobile_iflow_empty): "+str(len(mobile_iflow_empty)))
print("len(mobile_iflow): "+str(len(mobile_iflow)))
print("----------------------------------------------------------------------")
print("len(desktop): "+str(len(desktop)))
print("len(desktop_condition_empty): "+str(len(desktop_condition_empty)))
print("len(desktop_condition_name): "+str(len(desktop_condition_name)))
print("len(desktop_condition_operator): "+str(len(desktop_condition_operator)))
print("len(desktop_iflow_empty): "+str(len(desktop_iflow_empty)))
print("len(desktop_iflow): "+str(len(desktop_iflow)))
open('/Users/jsu6/Downloads/mobile.txt', 'w').close()
with open("/Users/jsu6/Downloads/mobile.txt", "w") as f:
    for i in mobile:
        f.write(i+"\n")
open('/Users/jsu6/Downloads/mobile_iflow.txt', 'w').close()
with open("/Users/jsu6/Downloads/mobile_iflow.txt", "w") as f:
    for i in mobile_iflow:
        f.write(i+"\n")