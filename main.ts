function calculator(num1: number, operator: string, num2: number) {
    if (operator === '+') {
        return num1 + num2;
    }else if (operator === '-') {
        return num1 - num2;
    }else if (operator === '*'){
        return num1 * num2;
    }else if (operator ==='/') {
        return num1 / num2;
    }else{
        console.log('invalid operator');
}
}


console.log(calculator(10, '+' , 5)); 
console.log(calculator(10, '-' , 5));
console.log(calculator(10, '*' , 5));
console.log(calculator(10, '/' , 5));
console.log(calculator(25, '^', 27)); 
