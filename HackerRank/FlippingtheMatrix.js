function flippingMatrix(matrix) {
    // Write your code here

    const n = matrix.length;
    let s = 0;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            s += Math.max(
                matrix[i][j],
                matrix[i][n - j - 1],
                matrix[n - i - 1][j],
                matrix[n - i - 1][n - j - 1]
            );
        }
    }
    return s;
}
