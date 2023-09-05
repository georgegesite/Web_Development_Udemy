function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Store the current element to be compared
      const currentElement = arr[i];
  
      // Start at the previous element
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than currentElement
      // one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) { //arr[j] is the left or arr[i]
        arr[j + 1] = arr[j]; // if left is greater than right, move left to right
        j--;  //decrement j
      }
  
      // Insert the current element at its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  