let nota1 = parseFloat(prompt("Ingrese la nota el estudiante"))
let nota2 = parseFloat(prompt("Ingrese la nota el estudiante"))
let nota3 = parseFloat(prompt("Ingrese la nota el estudiante"))
let nota4 = parseFloat(prompt("Ingrese la nota el estudiante"))
let nota5 = parseFloat(prompt("Ingrese la nota el estudiante"))

let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if (promedio > 75) {
    console.log(`Tu nota final es: ${promedio}, Aprobaste`);
}else{
    console.log(`Tu nota final es: ${promedio}, Reprobaste`);
}