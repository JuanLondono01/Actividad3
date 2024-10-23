let nombre = prompt('Ingrese el nombre de la persona');
let edad = parseInt(prompt('Ingrese la edad de la persona'));
let sexo = prompt('Ingrese el sexo de la persona (M/F)').toUpperCase();
let estadoCivil = prompt('Ingrese el estado civil de la persona (soltero/a (1) | casado/a (2))').toLowerCase();

if (sexo == 'M' && estadoCivil == '2' && edad > 40) {
    console.log(nombre);
} else if (sexo == 'F' && estadoCivil == '1' && edad < 50) {
    console.log(nombre);
}
