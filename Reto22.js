// Verifique que todas las secuencias independientes de los sistemas de iluminación 
// navideña estén en orden estrictamente creciente. Tenemos dos matrices: systemNamesy 
// stepNumbers.
// systemNamescontiene los nombres de los sistemas de iluminación navideña y stepNumberscontiene 
// los números de paso de cada sistema.
// Debemos verificar que los stepNumbersde cada sistema estén en orden estrictamente 
// creciente. Si esto es cierto, regresa true; en caso contrario, regresar false.
// Por ejemplo:

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

function checkStepNumbers(systemNames,stepNumbers){
    //Iniciamos variable
    let minimo = 0;
    //Bucle para comprobar todas las variables
    for (let i = 0; i < stepNumbers.length; i++){
        //Condicional para comprobar si el siguiente número es más grande
        if (minimo < stepNumbers[i]){
            minimo = stepNumbers[i];
        }
        //En caso negativo, finalizamos la función
        else{
            return "La lista no es incremental a causa de este valor: " + systemNames[i-1];
        }
    }
}

console.log(checkStepNumbers(systemNames,stepNumbers));