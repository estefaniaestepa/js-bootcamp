//Dado el siguiente array, crea una copia usando spread operators.


const pointsList = [32, 54, 21, 64, 75, 43];            //tenemos dos constantes y queremos unir estos arrays



const copiaPointsList = [...pointsList];              //generamos con (...spread operators) una copia normal del array

console.log('Original', pointsList);                //mostramos por consola
console.log('Copia', copiaPointsList)