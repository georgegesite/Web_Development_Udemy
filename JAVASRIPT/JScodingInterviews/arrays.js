// Arrays (called arrays in JavaScript)
let arr = [1, 2, 3];
console.log(arr);

// Can be used as a stack
arr.push(4);
arr.push(5);
console.log(arr);

arr.pop();
console.log(arr);

arr.splice(1, 0, 7); // Insert 7 at index 1
console.log(arr);

arr[0] = 0;
arr[3] = 0;
console.log(arr);

// Initialize an array of size n with a default value of 1
let n = 5;
let arr = new Array(n).fill(1);
console.log(arr);
console.log(arr.length);

// Negative indices in JavaScript work similarly to Python
console.log(arr[arr.length - 1]); // Last element
console.log(arr[arr.length - 2]); // Second to last element

// Sublists (slicing) in JavaScript
arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(0, 4)); // [1, 2, 3, 4]
console.log(arr.slice(0, 10)); // No out of bounds error, returns [1, 2, 3, 4]

// Unpacking arrays (destructuring) in JavaScript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// Loop through arrays
let nums = [1, 2, 3];

// Using index
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// Without index (for...of loop)
for (let n of nums) {
    console.log(n);
}

// With index and value (for...of loop with entries())
for (let [i, n] of nums.entries()) {
    console.log(i, n);
}

// Loop through multiple arrays simultaneously with destructuring
let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];
for (let [n1, n2] of nums1.map((value, index) => [value, nums2[index]])) {
    console.log(n1, n2);
}

// Reverse
nums = [1, 2, 3];
nums.reverse();
console.log(nums);

// Sorting
arr = [5, 4, 7, 3, 8];
arr.sort((a, b) => a - b); // Ascending
console.log(arr);

arr.sort((a, b) => b - a); // Descending
console.log(arr);

arr = ["bob", "alice", "jane", "doe"];
arr.sort();
console.log(arr);

// Custom sort (by length of string)
arr.sort((a, b) => a.length - b.length);
console.log(arr);

// List comprehension (array comprehension) doesn't exist in JavaScript
// You can achieve similar results with array methods like map or filter

// 2-D arrays (arrays of arrays)
arr = Array.from({ length: 4 }, () => Array(4).fill(0));
console.log(arr);
console.log(arr[0][0], arr[3][3]);

// Be careful with multidimensional arrays, as they are shallow-copied
