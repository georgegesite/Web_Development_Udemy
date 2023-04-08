// var output = [];
// var count = 1;
// function fizzBuzz(){
// output.push(count);

//     console.log(output);
// }

// fizzBuzz();

for (let i = 0; i <= 100; i++){
    if (i % 3 === 0){
        console.log ("Fizz");
    }
    if( i % 5 ===0){
        console.log ("Buzz");
    }
    if(i % 3 === 0 &&  i % 5 ===0 ){
        console.log ("FizzBuzz");
    }
    else{
        console.log(i);
    }
}