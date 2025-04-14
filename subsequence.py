def find_unique_subsequences(array_A, array_B):
    # Initialize variables
    unique_subsequences = []
    current_subsequence = []
    i = 0

    # Iterate through array A
    while i < len(array_A):
        if array_A[i] not in array_B:
            # Add element to the current subsequence
            current_subsequence.append(array_A[i])
        else:
            # Check if the current subsequence is not empty
            if current_subsequence:
                # Add the subsequence to the list
                unique_subsequences.append(current_subsequence.copy())
                current_subsequence.clear()

        i += 1

    # Check if the last subsequence is complete
    if current_subsequence:
        unique_subsequences.append(current_subsequence.copy())

    return unique_subsequences

# Example usage:
mobile_apis = ["a", "b", "c", "d", "e"]
desktop_apis = ["a", "b", "x", "y", "d", "e", "z"]

result = find_unique_subsequences(desktop_apis,mobile_apis)
print(result)


