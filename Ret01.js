/*
Este año los elfos compraron una máquina para envolver regalos. ¡Pero no está programado! Necesitamos crear un algoritmo que le ayude en la tarea.
La máquina recibe una variedad de regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque 
en una serie de regalos envueltos.
El papel de regalo es el *símbolo y, para envolver un regalo, debes colocarlo rodeando la cuerda. Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

function wrapped(gifts){
    let newGifts = [];
    //Bucle para pasar por todas las variables
    for (let i = 0; i < gifts.length; i++){
        let wrappedGift = "";
        //Bucle para añadir tantos * segun tamaño variable delante
        for (let x = 0; x < gifts[i].length + 2; x++){
            wrappedGift += "*";
        }
        //Añadimos variable actual en la nueva lista
        wrappedGift += "\n*" + gifts[i] + "*\n";
        //Bucle para añadir tantos * segun tamaño variable detras
        for (let x = 0; x < gifts[i].length + 2; x++){
            wrappedGift += "*";
        }
        newGifts.push(wrappedGift);
    }
    //El metodo devuelve la nueva lista
    return newGifts;
}

const gifts = ['cat', 'game', 'socks']
console.log(wrapped(gifts));
