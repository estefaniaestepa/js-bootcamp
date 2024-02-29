//Usa un bucle for of para recorrer todos los destinos del array. Imprime en un console log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']


console.group('For of')
for (let i of placesToTravel) {
  console.log(i);

}
console.groupEnd();
