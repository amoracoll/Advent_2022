/*
Para evitar perder datos cuando el servidor falla, Santa Claus ha decidido realizar copias de seguridad incrementales. Un hacker llamado S4vitelf le está ayudando.
Por un lado, tenemos la marca de tiempo de cuando se realizó la última copia de seguridad.
También tenemos los cambios que se han realizado en una serie de matrices. Cada matriz interna contiene dos elementos : la identificación del archivo modificado y la marca de tiempo de la modificación.
Hay que crear un programa que nos devuelva un array con el id de los archivos que tendríamos que hacer copia de seguridad porque han sido modificados desde la última copia de seguridad y ordenados en orden ascendente . Ejemplo:

const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]
*/

//TODO: funcion inacabada
// function getFilesToBackup(lastBackup,changes){
//     for (let i = 0; i < changes.length; i++){
//         for (let x = 0; x < changes.length; x++){
//             if (changes[x][0])
//         }
//     }
//     return
// }