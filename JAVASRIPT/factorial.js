function factorial(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  const number = 5; // Change this to the desired number
  const result = factorial(number);
  console.log(`The factorial of ${number} is: ${result}`);
  