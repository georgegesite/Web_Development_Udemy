// Provided countingSort function
function countingSort(arr) {
    const returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (i < 100 && returnArr[i] === undefined) {
            returnArr[i] = 0;
        }
        if (returnArr[item]) {
            returnArr[item] += 1;
        } else {
            returnArr[item] = 1;
        }
    }
    console.log(returnArr.length);
    return returnArr;
}

// Create a dummy array
const dummyArray = [5, 2, 9, 5, 2, 7, 8, 9, 1, 5, 4, 3, 1, 0, 7, 3, 6, 8, 0];
console.log(dummyArray.length);

// Test countingSort with the dummy array
const resultArray = countingSort(dummyArray);

// Print the result array
console.log(resultArray);
