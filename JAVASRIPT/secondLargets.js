function findSecondHighest(array) {
    let highest = 0;
    let secondHighest = 0;
  
    for (let i =0; i < array.length; i++) {
      if (i > highest) { // 5 >  0
        secondHighest = highest; // secondH = 0;
        highest = i; //highest = 5
      } else if (i > secondHighest) {
        secondHighest = i;
      }
    }
  
    return secondHighest;
  }
  
  // Example usage:
  const array = [5, 8, 2, 10, 7, 1];
  const secondHighest = findSecondHighest(array);
  console.log("Second Highest:", secondHighest);
  