const Factorial = function (n) {
    if (n === 2) {
        return 2;
    }
    return n * Factorial(n - 1);
}

console.log(Factorial(10));