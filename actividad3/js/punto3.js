let sueldo = parseInt(prompt("Ingrese el sueldo del trabajador"))

if (sueldo < 300000) {
    sueldo += sueldo * 0.15
    console.log(`El sueldo con el aumento es de: ${sueldo}`);
}else{
    console.log(`El sueldo permanece igual (${sueldo})`);
    
}