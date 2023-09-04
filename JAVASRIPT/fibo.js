function Fibo(n) {

    var firstNumber = 0;
    var secondNUmber = 1;

    if (n == 1) return 0;
    else if (n == 2) return 1;
    else {
        var sum = 0;
        for (let i = 2; i < n; i++) {
            sum = firstNumber + secondNUmber;
            firstNumber = secondNUmber;
            secondNUmber = sum;

        }
        return sum;
    }

}

n = 100;
console.log("Fibonacci of " + n + " is " + Fibo(n));