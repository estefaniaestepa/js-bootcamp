//Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};              //tenemos dos constantes con objetos que queremos unir
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}


const fusion = {...toy, ...toyUpdate};                                                 //generamos con (...spread operators) dentro del mismo objeto una copia seprandolo por , los dos listados en un sólo listado

console.log(fusion);                                                                  //mostramos por consola
