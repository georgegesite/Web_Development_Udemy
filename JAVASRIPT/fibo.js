// function Fibo(n) {

//     var firstNumber = 0;
//     var secondNUmber = 1;

//     if (n == 1) return 0;
//     else if (n == 2) return 1;
//     else {
//         var sum = 0;
//         for (let i = 2; i < n; i++) {
//             sum = firstNumber + secondNUmber;
//             firstNumber = secondNUmber;
//             secondNUmber = sum;

//         }
//         return sum;
//     }

// }

// var n = 100;
// console.log("Fibonacci of " + n + " is " + Fibo(n));

function fibonacci(n) {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  // Example usage:
  const n = 10; // Change this to the desired Fibonacci number
  const fibNumber = fibonacci(n);
  console.log(fibNumber);