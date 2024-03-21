function calculator(num1, operator, num2) {
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
    else {
        console.log('invalid operator');
    }
}
console.log(calculator(10, '+', 5));
console.log(calculator(10, '-', 5));
console.log(calculator(10, '*', 5));
console.log(calculator(10, '/', 5));
console.log(calculator(25, '^', 27));
