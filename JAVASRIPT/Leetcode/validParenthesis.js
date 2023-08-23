var isValid = function(s) {
    const hashmap = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    const stack = [];

    if (s === "" || s.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashmap) {
            stack.push(s[i]);
        } else {
            let topElement = stack.pop();
            if (hashmap[topElement] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


var s = "(()){}[]"
console.log(` Check if The string ${s} is valid: `,isValid(s));
var s2 = "{}{(){{{]}"
console.log(` CHeck if The string ${s2} is valid:`,isValid(s2))