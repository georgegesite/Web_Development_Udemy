n = '9875';
k = 4;

var p = '';
for (let i = 0; i < k; i++) {
    p += n;
}

console.log(p);
function superDigit(n, k) {
    if (n.length === 1) {
        return n;
    } else {
        let digitSum = 0;
        for (let i = 0; i < n.length; i++) {
            digitSum += parseInt(n[i]);
        }
        digitSum *= k; // Multiply the sum by k
        
        return superDigit(digitSum.toString(), 1);
    }
}