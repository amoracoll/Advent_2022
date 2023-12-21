// Estamos imprimiendo códigos de barras para los paquetes. En la fábrica de Santa 
// utilizamos un sistema de numeración donde cada número está impreso con una tinta 
// diferente. Es un sistema antiguo pero confiable. Sin embargo, a veces nos quedamos 
// sin tinta para un número.
// Escribe una función que reciba el número para el que no tenemos tinta (un número 
// entre 0 y 9) y como segundo parámetro, el número de códigos de barras a 
// imprimir (empezamos desde 1 hasta el número que recibimos).
// Debería devolver una matriz con los números que incluyen el número para el que no 
// tenemos tinta . Veamos un ejemplo:

// dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// // we don't have ink for the number 1
// // we have to print 15 barcodes from 1 to 15
// // the barcodes that will be wrong because of the lack of ink are:
// // 1, 10, 11, 12, 13, 14, 15

function dryNumber(dry, numbers){
    //Creacion lista de retorno
    let listaRetorno = [];

    //Bucle para pasar por todas las variables
    for (let i = 0; i < numbers; i++){
        //Pasamos las variables a string y comprobamos si estan incluidas
        if (i.toString().includes(dry.toString())){
            listaRetorno.push(i);
        }
    }
    return "Las variables que no se pueden imprimir son: " + listaRetorno;
}

console.log(dryNumber(1,15));

