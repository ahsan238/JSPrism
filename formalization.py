import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import timeout_decorator
from multiprocessing import Pool


def convert_flow_to_tuples(flow):
    t = []
    for api in flow:
        charoffset = api.split(',')[0]
        api_name = api.split(',')[1]
        # convert charoffset to int
        charoffset = int(charoffset)
        t.append((charoffset, api_name))
    return t

@timeout_decorator.timeout(300)
def compute_divergence(flow_mobile, flow_desktop, k=10, w=5, gap_penalty=1, misalignment_penalty=0.5, visualize=False):
    """
    Compute divergence between two API execution flows and visualize alignment.
    
    Parameters:
    - flow_mobile: List of (offset, API) tuples for mobile
    - flow_desktop: List of (offset, API) tuples for desktop
    - k: Allowed offset tolerance for matching APIs
    - gap_penalty: Cost for missing an API in either sequence
    - misalignment_penalty: Cost for reordering beyond threshold
    - visualize: If True, generate a heatmap of the alignment matrix and flow alignment plot
    
    Returns:
    - divergence score (normalized)
    """
    N, M = len(flow_mobile), len(flow_desktop)
    D = np.zeros((N + 1, M + 1))

    # Initialize DP table with gap penalties
    for i in range(1, N + 1):
        D[i][0] = i * gap_penalty
    for j in range(1, M + 1):
        D[0][j] = j * gap_penalty

    # Compute DP table
    for i in range(1, N + 1):
        offset_i, api_i = flow_mobile[i - 1]
        
        for j in range(1, M + 1):
            offset_j, api_j = flow_desktop[j - 1]

            # Exact match at the same offset
            if (offset_i, api_i) == (offset_j, api_j):
                cost = 0
            else:
                # Look for a match within the threshold range
                found_match = False
                for shift in range(-k, k + 1):
                    new_j = j + shift
                    if 1 <= new_j <= M and flow_desktop[new_j - 1] == (offset_i, api_i):
                        found_match = True
                        break
                
                if found_match:
                    cost = misalignment_penalty  # API exists but executed at a different point
                else:
                    cost = gap_penalty  # API is missing in the other flow

            # Apply dynamic programming update
            D[i][j] = min(
                D[i - 1][j - 1] + cost,  # Match or mismatch
                D[i - 1][j] + gap_penalty,  # Deletion (API missing in desktop)
                D[i][j - 1] + gap_penalty   # Insertion (API missing in mobile)
            )
            """ 
            # **Lookahead Window for Rejoining**
            for lookahead in range(1, w + 1):
                if i + lookahead <= N and j + lookahead <= M:
                    if flow_mobile[i + lookahead - 1] == flow_desktop[j + lookahead - 1]:
                        # Reduce the penalty by directly skipping to the rejoining point
                        D[i + lookahead][j + lookahead] = min(
                            D[i + lookahead][j + lookahead],
                            D[i][j]  # No extra penalty for skipping divergence
                        )
            """
    
    # Visualization: Heatmap of the alignment matrix
    if visualize:
        plt.figure(figsize=(10, 6))
        sns.heatmap(D, cmap='coolwarm', annot=False)
        plt.xlabel('Desktop API Sequence')
        plt.ylabel('Mobile API Sequence')
        plt.title('Alignment Cost Heatmap')
        plt.show()
    
    divergence_score = D[N][M] / max(N, M)
    return divergence_score


# Getting the list of all the scripts in our dataset
import os
import json

def get_script_exec_nodes(scriptname, filename):
    mobile_exec_nodes = []
    desktop_exec_nodes = []
    logs = load_json(filename)
    for domain in logs:
        for platform in logs[domain]:
            for script in logs[domain][platform]:
                if script == scriptname:
                    if platform == 'mobile':
                        mobile_exec_nodes = logs[domain][platform][script]['apis']
                    elif platform == 'desktop':
                        desktop_exec_nodes = logs[domain][platform][script]['apis']
    return mobile_exec_nodes, desktop_exec_nodes

def load_json(filename):
    with open(filename) as fp:
        data = json.load(fp)
        fp.close()
    return data

def getAllScripts(pathToScripts):
    allScripts = {}
    for path in pathToScripts:
        logs = load_json(path)
        for domain in logs:
            for platform in logs[domain]:
                for script in logs[domain][platform]:
                    if script not in allScripts:
                        allScripts[script] = []
                    allScripts[script].append(path.split('/')[-2])
    return allScripts

def formJsonPath(domain):
    basePath = '/home/azafar2/VV8_PDG_mapping/additional/data/'
    return basePath + domain + '/' + 'agg_data.json'



def getResultJson(baseDir='./../results'):
    files = os.listdir(baseDir)
    filepaths = [baseDir + '/' + file for file in files]
    return filepaths

def getDeviantScripts(filepath):
    d = load_json(filepath)
    scripts = set()
    for script in d:
        for p in d[script]:
            if p == 'code':
                continue
            if len(d[script][p].keys()) > 0:
                scripts.add(script)
    return scripts

def getDeviantScoreForScript(domain,script):
    agg_data_path = formJsonPath(domain)
    mobile_exec_nodes, desktop_exec_nodes = get_script_exec_nodes(script, agg_data_path)
    mobile_flow, desktop_flow = convert_flow_to_tuples(mobile_exec_nodes), convert_flow_to_tuples(desktop_exec_nodes)
    return compute_divergence(mobile_flow, desktop_flow)

def save_json(data,filename):
    with open(filename, 'w') as fp:
        json.dump(data, fp, indent=4)
        fp.close()

def processsDomain(domain):
    domain_path = domain
    domain = domain.split('/')[-1].replace('.json','')
    deviant_scripts = getDeviantScripts(domain_path)
    results = {}
    for script in deviant_scripts:
        if script not in results:
            results[script] = 0
        print('Script: ', script)
        print('Domain: ', domain)
        print('-------------------------------------')
        try:
            deviant_score = getDeviantScoreForScript(domain, script)
        except:
            deviant_score = -1
        results[script] = deviant_score
        print('Deviant Score: ', results[script])
    print('=====================================')
    # return results
    # save the formalization result
    with open(f'formalization_results/{domain}.json', 'w') as fp:
        json.dump(results, fp, indent=4)
        fp.close()  

def launch_divergence_computation(function, domains):
    pool = Pool(processes=30)
    results = pool.map(function, domains)
    pool.close()
    pool.join()
    return results

def main():
    # scriptname = 'https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015'
    # filename = '/home/azafar2/VV8_PDG_mapping/additional/data/24tv.ua/agg_data.json'
    result_jsons = getResultJson()
    results = {}
    # print(result_jsons)
    launch_divergence_computation(processsDomain, result_jsons)
    # for file in result_jsons:
    #     domain = file.split('/')[-1].replace('.json','')
    #     deviant_scripts = getDeviantScripts(file)
    #     for script in deviant_scripts:
    #         if script not in results:
    #             results[script] = 0
    #         print('Script: ', script)
    #         print('Domain: ', domain)
    #         print('-------------------------------------')
    #         try:
    #             deviant_score = getDeviantScoreForScript(domain, script)
    #         except:
    #             deviant_score = -1
    #         results[script] = deviant_score
    #         print('Deviant Score: ', results[script])
    #     print('=====================================')
    # save_json(results, 'deviant_scores.json')

main()
