/*
En las tiendas de Papá Noel están haciendo inventario. Hay tres tiendas (que se representan como cada Arrayuna). En cada tienda hay regalos.
Nos han pedido que escribamos un programa que nos diga qué regalos tenemos que comprar para reponer nuestras tiendas ahora que se acerca la Navidad. Un regalo deberá reponerse cuando sólo quede stock en una de las tres tiendas.
Por ejemplo, si tenemos las siguientes tiendas:

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

function getGiftsToRefill(a1,a2,a3){
    //Unir todas las listas
    const todasLasListas = a1.concat(a2,a3);
    //Crear conjuntos para cada lista y para la lista combinada
    const conjuntoA1 = new Set(a1.map(JSON.stringify));
    const conjuntoA2 = new Set(a2.map(JSON.stringify));
    const conjuntoA3 = new Set(a3.map(JSON.stringify));
    const conuntoTodasLasListas = new Set(todasLasListas.map(JSON.stringify));
    //Obtener la lista de valores que no están en las tres listas
    const valoresNoComunes = todasLasListas.filter(elemento => !conjuntoA1.has(JSON.stringify(elemento))
                                                            || !conjuntoA2.has(JSON.stringify(elemento))
                                                            || !conjuntoA3.has(JSON.stringify(elemento)));

    //Crear un conjunto a partir de la lista para eliminar duplicados
    const conjuntoUnicos = new Set(valoresNoComunes);
    //Convertir el conjunto de nuevo a una lista ( si es necesario)
    const listaUnica = [...conjuntoUnicos];
    return "A continuación una lista de los elementos que queda poco stock: " + listaUnica;
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

console.log(getGiftsToRefill(a1,a2,a3));