// var array = [];
// const first = 0;
// const second = 1;
// var inputNumber = window.prompt("Enter Number");
// var inputNUmber = Number(inputNumber);
// var arrayLength = array.length;


// if (inputNumber === 1){
//     array.push(first);
//     for (let i = 0; i < arrayLength; i++){
//         console.log(i+",");
//     }
// }
// else if (inputNumber === 2){
//     array.push(first);
//     array.push(second);
//     for (let i = 0; i < arrayLength; i++){
//         console.log(array [i]+",");
//     }
// }
// else{
//     array.push(first);
//     array.push(second);
//     for (let i = 2; i <= inputNUmber; i++){
//         var sum = array[i-2]+array[i-1];
//         array.push(sum);
//     }

//     for (let i = 0; i < arrayLength; i++){
//         console.log(array[i]+",");
//     }
// }

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var output = [];
        if ( n ===1 ){
            output = [0];
        }
        else if (n===2){
            output = [0,1];
        }
        else{
            output = [0,1];

            for (var i = 2; i < n; i++){
                output.push(output[i-2]+output[i-1]);
            }
           
        }
        
        return output;
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    