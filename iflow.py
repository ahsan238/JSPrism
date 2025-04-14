from pdgs_generation import *
from FPstatic import *
from FPanalysis import *
from information import *
import psycopg2
import copy
from pathlib import Path

home = Path.home()
file_name = "/home/azafar2/VV8_PDG_mapping/iflow_tests/securepubads.js"

with open(file_name, "r") as file:
    # pdg = get_data_flow(file_name, benchmarks=dict(), save_path_cfg='./tests/spm',save_path_pdg='./tests/spm')
    pdg = get_data_flow(file_name, benchmarks=dict())
    if pdg:
        print(pdg)
    c = []


    chain = []
    get_node(pdg, 'sharedStorage', c)
    # for i in c:
    #     print_node(i)
    trace_info(c[0], chain)
    print("Chains: ")
    
    for i in chain:
        print_node(i)
 
    # # this function label nodes' self.iflow which are relevant to 
    # # information flow in pdg graph 
    # markIflow(chain, pdg)
    # # printGraph(pdg)
    
    

