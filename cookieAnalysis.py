import json
import pickle
import os

from pdgs_generation import *
import copy
from FPstatic import print_node
from information import *
from FPanalysis import *
from pathlib import Path
import jsbeautifier
from condition import *

from multiprocessing import Pool


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


def find_common_elements(array_A, array_B):
    return list(set(array_A) & set(array_B))


# Function to save JSON
def save_json(data, filename):
    with open(filename, 'w') as file:
        json.dump(data, file,indent=4)
        file.close()
    
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

def containsCookieApi(listOfApis):
    # cookieApis = ['document.cookie', 'localStorage', 'sessionStorage', 'cookie']
    cookieApis = ['cookie']
    # create a dictionary of cookie APIs
    cookieDict = {api: [] for api in cookieApis}
    for api in listOfApis:
        for _api in cookieApis:
            if _api in api:
                cookieDict[_api].append(api)
    return cookieDict

def processDomainExecution(domain):
    # data object that we will return
    d = {}
    baseFilePath = f"./additional/data/{domain}/agg_data.json"
    # Read the JSON file
    data = read_json(baseFilePath)
    # Get domain data
    data = data[domain]
    scriptData = {}

    # Determine the common scripts by comparing script_urls
    desktopScripts = list(data['desktop'].keys())
    mobileScripts = list(data['mobile'].keys())
    commonScripts = find_common_elements(desktopScripts, mobileScripts)
    # For each script, determine unique subsequences of each platform

    for script in commonScripts:
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
            
            # APIs unique to desktop and mobile separately
            desktopUnique = list(set(desktopApis) - set(mobileApis))
            mobileUnique = list(set(mobileApis) - set(desktopApis))
            
            desktopCookieApis = containsCookieApi(desktopUnique)
            mobileCookieApis = containsCookieApi(mobileUnique)
            
            scriptData[script] = {
                "desktop": desktopCookieApis,
                "mobile": mobileCookieApis
            }
            
        except:
            print("Error in script: ", script)
            continue
    
    return scriptData
def main():
    # domains = list(read_list_from_file("./additional/common_domains.txt"))
    domain = 'bilibili.com'
    data = processDomainExecution(domain)
    save_json(data,f'./cookieData/{domain}.json')
    
main()