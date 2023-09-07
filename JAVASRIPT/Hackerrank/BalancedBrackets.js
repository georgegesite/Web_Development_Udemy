function isBalanced(s) {
    const hashmap = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    const stack = [];

    if (s === "" || s.length % 2 !== 0) {
        return "NO";
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashmap) {
            stack.push(s[i]);
        } else {
            let topElement = stack.pop();
            if (hashmap[topElement] !== s[i]) {
                return "NO";
            }
        }
    }

    if (stack.length === 0) {
        return "YES";
    } else {
        return "NO"; // There are unmatched opening brackets
    }
}

var  s ='{{[[(())]]}}';
console.log(isBalanced(s));