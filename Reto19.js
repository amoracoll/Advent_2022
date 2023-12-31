// Se acerca el día y Papá Noel tiene la juguetería hecha un desastre. Ayúdalo a clasificar los juguetes en el almacén para que pueda encontrarlos más fácilmente.
// Para ello, disponemos de dos matrices. El primero es una serie de juguetes y el segundo es una serie de números que indican la posición de cada juguete en el almacén.
// Lo único que debes tener en cuenta es que las posiciones no podrán empezar por 0 , aunque siempre serán números consecutivos y en orden ascendente.
// Tenemos que devolver un array donde cada juguete esté en la posición que le corresponde .

// const toys = ['ball', 'doll', 'car', 'puzzle']
// const positions = [2, 3, 1, 0]

// sortToys(toys, positions)
// // ['puzzle', 'car', 'ball', 'doll']

// const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
// const morePositions = [8, 6, 5, 7, 9]

// sortToys(moreToys, morePositions)
// // ['ps4', 'xbox', 'switch', 'pc', 'nintendo']

function sortToys(toys, position){
    if (!(toys.length === position.length)){
        return "El tamaño de las dos listas no es el mismo";
    }    

    //Creación lista vacia
    let listaPosiciones = [];

    //Inicializa para comprobar todos los valores
    for (let x = 0; x < position.length; x++){
        //Inicializamos con un valor grande
        let minimo = Infinity;
        let jueguete = "";

        //Inicializamos bucle para comprobar todas las posiciones
        for (let i = 0; i < position.length; i++){
            //Condicional para comprobar si el valor es menor y esta incluido en la lista
            if (position[i] < minimo && !listaPosiciones.includes(toys[i])){
                minimo = position[i];
                jueguete = toys[i];
            }
        }
        //Añadimos el valor a la lista de retorno
        listaPosiciones.push(jueguete);
    }
    //Retorno de la funcion
    return "Las posiciones son la siguientes: " + listaPosiciones;
}

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys,morePositions));