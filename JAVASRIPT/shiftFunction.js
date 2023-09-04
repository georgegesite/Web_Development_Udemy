const array1 = [1, 2, 3];
console.log(array1);
console.log(array1[0]);
const firstElement = array1.shift();

console.log(array1);
console.log(array1[0]);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1