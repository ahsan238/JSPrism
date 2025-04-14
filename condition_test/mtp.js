function checkMaxTouchPoints() {
    let list = [];
    navigator.maxTouchPoints && navigator.userAgent && list.push(navigaotr.maxTouchPoints);
    return list;
}

/*
    - Test Case 1: maxTouchPoints
        + Input: {'start': 127, 'end': 141, 'range': [127, 141], 'name': 'maxTouchPoints'}
        + Given IFlow Output: []
        + Expected IFlow Output: [{Attributes: {'start': 56, 'end': 142, 'range': [56, 142], 'operator': '&&'}, ID: 10}, {Attributes: {'start': 56, 'end': 103, 'range': [56, 103], 'operator': '&&'}, ID: 11}', {Attributes: {'start': 66, 'end': 80, 'range': [66, 80], 'name': 'maxTouchPoints'}, ID: 14}]
        + Given Condition Output: None
        + Expected Condition Output: Attributes: {'start': 56, 'end': 142, 'range': [56, 142], 'operator': '&&'}, ID: 10
    - Test Case 2: userAgent
        + Input: {'start': 94, 'end': 103, 'range': [94, 103], 'name': 'userAgent'}
        + Given IFlow Output: []
        + Expected IFlow Output: ['{Attributes: {'start': 56, 'end': 103, 'range': [56, 103], 'operator': '&&'}, ID: 11}', {Attributes: {'start': 66, 'end': 80, 'range': [66, 80], 'name': 'maxTouchPoints'}, ID: 14}]
        + Given Condition Output: Attributes: {'start': 56, 'end': 103, 'range': [56, 103], 'operator': '&&'}, ID: 11
        + Expected Condition Output: Output: Attributes: {'start': 56, 'end': 103, 'range': [56, 103], 'operator': '&&'}, ID: 11

*/