var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (x) {
    return x *2;
});
console.log(newNumbers);

//ForEach
// var newNumbers = [];
// numbers.forEach(function(x) {
//     newNumbers.push(x *2);
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filternumber = numbers.filter(function(num){
 return num < 10;
});
console.log(filternumber);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber2 = numbers.reduce((accumulator, currentNumber) =>{
    return accumulator+=currentNumber;
});
console.log(newNumber2);
//Find - find the first item that matches from an array.

const newfind = numbers.find((num)=>{
    return num > 10;
})
console.log(newfind);

//FindIndex - find the index of the first item that matches.
const newfindindex = numbers.findIndex((num)=>{
    return num > 10;
})
console.log(newfindindex);

