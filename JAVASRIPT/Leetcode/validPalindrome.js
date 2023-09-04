var isPalindrome = function(s) {

    if (s == "" || s == " ")return true;
    
    var removeWhiteSpaces = s.replace(/\s/g, "");
    var removeNonalphchar = removeWhiteSpaces.replace(/[^a-zA-Z0-9]/g, '');
    var originalString = removeNonalphchar.toLowerCase();
    var reversedString = originalString.split('').reverse().join('');

    if(originalString == reversedString) return true; else return false;

};

var s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
