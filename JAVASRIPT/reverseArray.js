const a = [1, 2, 7, 6, 4, 9, 12];
console.log(a.reverse());
for (let t = 0; t < a.length / 2; t++) {
  const tmp = a[t];
  a[t] = a[a.length - t - 1];
  a[a.length - t - 1] = tmp;
}

console.log(a); // Output: [12, 9, 4, 6, 7, 2, 1]


nums = [1, 2, 3];
nums.reverse();
console.log(nums);