//Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos


const pointsList = [32, 54, 21, 64, 75, 43];                               //tenemos dos constantes que queremos unir
const pointsLis2 = [54,87,99,65,32];

const listaConcat = [...pointsList, ...pointsLis2];                      //generamos con (...spread operators) dentro del mismo array  una copia seprandolo por , los dos listados en un sólo listado

console.log(listaConcat);                                               //mostramos por consola