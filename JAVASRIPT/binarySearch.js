function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] < key) {
        low = mid + 1;
      } else if (arr[mid] === key) {  
        return mid;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example usage:
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
  const target = 7;
  
  const result = binarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`Element ${target} found at index ${result}.`);
  } else {
    console.log(`Element ${target} not found in the array.`);
  }
  