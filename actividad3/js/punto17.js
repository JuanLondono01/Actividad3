let num1 = parseInt(prompt('Ingresa un numero'));
let num2 = parseInt(prompt('Ingresa un numero'));
let num3 = parseInt(prompt('Ingresa un numero'));

if (num1 % num2 === 0) {
    console.log(`El número ${num1} es divisible por ${num2}`);
} else if (num2 % num1 === 0) {
    console.log(`El número ${num2} es divisible por ${num1}`);
}

if (num1 % num3 === 0) {
    console.log(`El número ${num1} es divisible por ${num3}`);
} else if (num3 % num1 === 0) {
    console.log(`El número ${num3} es divisible por ${num1}`);
}

if (num2 % num3 === 0) {
    console.log(`El número ${num2} es divisible por ${num3}`);
} else if (num3 % num2 === 0) {
    console.log(`El número ${num3} es divisible por ${num2}`);
}