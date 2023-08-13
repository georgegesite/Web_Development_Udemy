function diagonalDifference(arr) {
    var l2r = 0;
    var r2l = 0;
    
    for (let i = 0; i < arr.length; i++) {
        l2r += arr[i][i];
        r2l += arr[i][arr.length - 1 - i];
    }
    
    return Math.abs(l2r - r2l);
}

// Example usage
const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(matrix)); // Output: 0 (|15 - 15| = 0)
