import json
from pdgs_generation import *

# Function to read a JSON file
def read_json_file(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        print("File not found.")
        return None
    except json.JSONDecodeError:
        print("Error decoding JSON.")
        return None

# Path to your JSON file
file_path = 'condition_tests/template_files/google_analytics.json'

# Read the JSON file
data = read_json_file(file_path)

if data is not None:
    print("JSON data read successfully:")
    print(data["code"])
    with open("google_analytics.js", "w") as f:
        f.write(data["code"])
    
    pdg = get_data_flow("google_analytics.js", benchmarks=dict())

    if pdg:
        print("We got pdg!")
