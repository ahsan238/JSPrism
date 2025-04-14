from pdgs_generation import *
from FPstatic import *
from FPanalysis import *
import psycopg2


double_checked_list = []   
std_api = FPIdldata()
# # connect to Postgres
# insert_con = psycopg2.connect(
#     database="ahsan_mobile",
#     user="jane_doe",
#     password="never_gonna_give_you_up",
#     host="localhost",
#     port="5432",
# )

insert_con = psycopg2.connect(
    database="vv8_android_monday",
    user="vv8",
    password="vv8",
    host="0.0.0.0",
    port="5434",
)

search_con = psycopg2.connect(
    database="vv8_android_monday",
    user="vv8",
    password="vv8",
    host="0.0.0.0",
    port="5434",
)
search_cursor = search_con.cursor()

with insert_con.cursor(name="custom_cursor") as cursor:
    cursor.itersize = 1000  # chunk size
    query = "SELECT url,code,apis FROM script_flow WHERE EXISTS (   SELECT 1   FROM unnest(apis) AS element   WHERE element LIKE ANY (ARRAY['%Accelerometer%', '%Sensor%', '%Gyroscope%', '%Magnetometer%', '%Orientation%', '%Motion%', '%motion%', '%orientation%']) );"
    cursor.execute(query)
    
    # Iterate every API sequence per execution context
    for script_name,content, features in cursor:      
        double_checked_flag = []
        apiList = []
        sinkList = []
        dataflow = []
        pdg_flag = False
        for feature in features:
            start,api = feature.split(",")
            if api not in double_checked_list:
                # print(api)
                # if api == "HTMLInputElement.defaultValue" or api == "HTMLInputElement.disabled" or api == "HTMLInputElement.files" or api == "HTMLInputElement.type" or api == "HTMLInputElement.value":
                    # print("QWE")
                pdg_flag = True
                break
                
        if pdg_flag:
            con_list = []
            # remove file content
            open('/tmp/exp.js', 'w').close()
            # write content of current url js code
            with open("/tmp/exp.js", 'a') as jsfile:
                print(content, file=jsfile)

            pdg = get_data_flow('/tmp/exp.js', benchmarks=dict())
            print("PDG ready!")
            # print("Number of Features: "+str(len(features)))
            # print("Features: "+str((features)))
            # For every feature we got from locality algorithm
            if pdg:
                # sinkapis_set = list(set(sinkapis))
                # for s in sinkapis_set:
                #     # print(s)
                #     s_start,s_api = s.split(",")
                #     snk = s_api.split(".")[1]
                #     search_API(pdg, int(s_start), content[int(s_start):int(s_start)+30], snk, sinkList)
                print("----------------------------------------------------------------------------------")
                print(script_name)
                # print(features)
                for feature in features:
                    double_checked_flag = []
                    apiList = []
                    dataflow = []
                    sttList = []
                    # print(feature)
                    # 123,Func
                    # [123,123+len(Func)]
                    if feature[feature.index(",")+1:] in std_api:
                        if len(feature.split(",")) > 1:
                            start,api = feature.split(",")
                        else:
                            print("Weird!!!")
                            print(feature)
                        if len(api.split(".")) > 1:
                            fea = api.split(".")[1]
                        else:
                            print("Weird!!!")
                            print(api)

                    # if api not in double_checked_list:
                    # if api == "HTMLInputElement.defaultValue" or api == "HTMLInputElement.disabled" or api == "HTMLInputElement.files" or api == "HTMLInputElement.type" or api == "HTMLInputElement.value":
                    #     print("------------------------------")
                    #     print(script_name)
                    #     print(feature)
                    #     print(set(features))
                    #     print(set(sinkapis))
                    #     print(content[int(start):int(start)+30])
                    #     print(content[int(start)-30:int(start)+30])
                    
                        # We need to find their corresponding parent statement
                        # The parent statement is stored in apiList
                        # print(str(int(start)))
                        # print(str(content[int(start):int(start)+30]))
                        # print(str(fea))
                        if "motion" in str(api).lower() or "sensor" in str(api).lower() or "orientation" in str(api).lower() or "accelerometer" in str(api).lower() or "gyroscope" in str(api).lower() or "magnetometer" in str(api).lower(): 
                            search_API_condition(pdg, int(start), content[int(start):int(start)+30], fea, apiList, con_list)
                            for i in con_list:
                                # print(i)
                                if i and 'range' in str(i):
                                    call_site = i['range'][0]
                                else:
                                    call_site = -1
                                search_query = "SELECT url,apis FROM script_flow WHERE EXISTS (   SELECT 1   FROM unnest(apis) AS element   WHERE element LIKE ANY (ARRAY['%" +str(call_site)+ "%']) ) AND url = '%"+str(script_name)+"%';"
                                search_cursor.execute(search_query)
                                
                                for turl,apis in search_cursor:
                                    print(turl)
                                    for j in apis:
                                        if call_site in j:
                                            print(j)

        #                 # If there is only one parent statement per one feature
        #                 # which is the correct case
        #                 if len(apiList) == 1:
        #                     # print(apiList[0].get_name())
        #                     # print(apiList[0].get_id())
        #                     # print(apiList[0].get_attributes())
        #                     prev_dataflow = len(set(dataflow))
        #                     # Find dataflows connect to the parent statement in apiList
        #                     # and store them in dataflow
        #                     search_dataflow(apiList, dataflow)
        #                     # print("1 st prev_dataflow "+str(prev_dataflow))
        #                     # print("len(dataflow)"+str(len(dataflow)))
        #                     # print("len(set(dataflow)) "+str(len(set(dataflow))))
        #                     # print(set(dataflow))
        #                     # for i in dataflow:
        #                     #     print(i.get_id())
                            
        #                     # iterate_node(pdg, sttList)
        #                     # print("len(set(sttList)): "+str(len(set(sttList))))
        #                     while prev_dataflow != len(set(dataflow)):
        #                         dataflowset = list(set(dataflow))
        #                         prev_dataflow = len(dataflowset)
        #                         # print("prev_dataflow "+str(prev_dataflow))
        #                         for i in dataflowset:
        #                             apiList[0] = i
        #                             search_dataflow(apiList, dataflow)
        #                             # print("len(set(dataflow)) "+str(len(set(dataflow))))
        #                     # print("set(dataflow)): "+str(len(set(dataflow))))
        #                     dataflowset = list(set(dataflow))
        #                     # print("len(set(dataflowset)) "+str(len(set(dataflowset))))
        #                     # print(set(dataflowset))
        #                     # for i in dataflowset:
        #                     #     print(i.get_name())
        #                     #     iterate_node_name(i)
        #                     # print("len(sinkapis): " + str(len(sinkapis)))
        #                     # print("len(sinkList): " + str(len(sinkList)))
        #                     # print(sinkList)
                            
        #                     for i in sinkList:
        #                         # print(i.get_name())
        #                         # print(i.get_attributes())
        #                         # print(i)
        #                         # print(dataflowset)
        #                         if i in dataflowset:
        #                             # print("HAHAHAHAHA")
        #                             # print(i.get_name())
        #                             # print(i.get_attributes())
        #                             # iterate_node_name(i)
        #                             double_checked_list.append(api)
                            
        #                     # for i in dataflowset:
        #                     #     iterate_stt(i,double_checked_flag)
        #                     #     # print(double_checked_flag)
        #                     # if True in double_checked_flag:
        #                     #     double_checked_list.append(api)
        #                 elif len(apiList) > 1:
        #                     # for i in apiList:
        #                     #     print("------------------------")
        #                     #     print(i.get_attributes())
        #                     #     print(i.get_name())
        #                     #     for j in i.get_children():
        #                     #         print(j.get_attributes())
        #                     #         for k in j.get_children():
        #                     #             print(k.get_attributes())
        #                     #             for z in k.get_children():
        #                     #                 print(z.get_attributes())
        #                     print(script_name)
        #                     print(feature)
        #                     print(set(features))
        #                     print(set(sinkapis))
        #                     print(content[int(start):int(start)+30])
        #                     print(content[int(start)-30:int(start)+30])
        #                     print("ERROR!!!!!!!!!!!!!!!!!")
        #                 else:
        #                     print(script_name)
        #                     print(feature)
        #                     print(set(features))
        #                     print(set(sinkapis))
        #                     print(content[int(start):int(start)+30])
        #                     print(content[int(start)-30:int(start)+30])
        #                     print("ERROR!!!!!!!!!!!!!!!!!ELSE")
        
        # # print(len(double_checked_list))
        # # print(len(set(double_checked_list)))
        # # print("Features: "+str((features)))
        # print("Double Checked list: "+str(set(double_checked_list)))
        