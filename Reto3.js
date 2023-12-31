/*
Recibes un paquete de regalos navideños que Papá Noel quiere entregar a los niños. 
Cada regalo dentro del pack está representado por un hilo y tiene un peso igual al 
número de letras de su nombre. El trineo de Papá Noel sólo puede llevar un límite de
peso .
Papá Noel también tiene una lista de renos que pueden ayudarle a entregar los regalos.
 Cada reno tiene un límite de peso máximo que puede llevar. El límite máximo de peso 
 de cada reno es igual al doble del número de letras de su nombre .
Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers)que reciba 
un paquete de regalos y una lista de renos y devuelva la cantidad máxima de paquetes de regalos que Papá Noel puede entregar. No puedes dividir paquetes de regalos .

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
*/

function distributedGifts(packOfGifts,reindeers){
    //Obtenemos el peso de los regalos
    let giftsWeights = 0;
    for (let i = 0; i < packOfGifts.length; i++){
        giftsWeights += packOfGifts[i].length;
    }
    //Obtenemos el peso que pueden soportar los renos
    let reindeersWeights = 0;
    for (let x = 0; x < reindeers.length; x++){
        reindeersWeights += reindeers[x].length;
    }
    reindeersWeights = reindeersWeights * reindeers.length;

    //Comprobamos si los renos pueden soportar el peso de los regalos
    if (giftsWeights <= reindeersWeights){
        return Math.floor(reindeersWeights / giftsWeights);
    }
    else{
        return 0;
    }
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
console.log(distributedGifts(packOfGifts,reindeers));