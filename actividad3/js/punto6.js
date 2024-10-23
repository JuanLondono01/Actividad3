let centigrados = prompt("ingrese la temperatura en grados centigrados")



if (Number.isInteger(parseInt(centigrados))) {
    let kelvin = centigrados +  273.15
    console.log(`${centigrados}°C son ${kelvin} K`);
    
}else if (parseFloat(centigrados) == centigrados) {
    if (parseFloat(centigrados) > 10.5) {
        console.log(`${centigrados} es mayor que 10.5`);
    }else{
        console.log(`${centigrados} es menor que 10.5`);
        
    }
}

if (isNaN(centigrados)) {
    console.log(`Ingresaste un caracter: ${centigrados.toString().toUpperCase()}`);
    
}