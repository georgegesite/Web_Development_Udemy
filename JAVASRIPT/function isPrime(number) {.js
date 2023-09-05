function isPrime(number) {
    if (number <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If the number is divisible by any integer in this range, it's not prime
      }
    }
  
    return true; // If no divisors were found, the number is prime
  }
  
  // Example usage:
  const num = 100; // Change this to the number you want to check
  if (isPrime(num)) {
    console.log(`${num} is prime.`);
  } else {
    console.log(`${num} is not prime.`);
  }
  