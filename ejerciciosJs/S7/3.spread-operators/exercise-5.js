/*Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
, usando spread operatos.*/


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];        //tenemos una constante de un array 

                                                                       //crea un nuevo array, que es una copia del array original, sin el elemento que queremos quitar
const newColors = [...colors.slice(0, 2), ...colors.slice(3)];        //(0, 2) selecciona rojo y azul, posiciones anteriores a la 2 / (3) verde y naranja / de esta forma le decimos que no queremos el amarillo. Eñ nº 3 es posiciones posteriores a la 3
                                                                     //.slice la posición 2 no llega al dos sería 0 y 1, 

console.log(elimin);                                                //te muestra el array sin el numero 2
console.log(colors);                                               //array original 



