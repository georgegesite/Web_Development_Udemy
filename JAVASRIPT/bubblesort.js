function bubbleSort(arr) {
    const n = arr.length;
  
    // Outer loop for the number of passes
    for (let i = 0; i < n - 1; i++) {
      // Inner loop for comparisons and swapping
      for (let j = 0; j < n - 1 - i; j++) {
        // Compare adjacent elements
        if (arr[j] > arr[j + 1]) {
          // Swap the elements if they are in the wrong order
        //   const temp = arr[j];
        //   arr[j] = arr[j + 1];
        //   arr[j + 1] = temp;
        
          arr[j+1] += arr[j];
          arr[j] =  arr[j+1] - arr[j];
          arr[j+1] = arr[j+1] - arr[j];

        }
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [45, 34, 25, 12, 22, 11, 50];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  