//Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
        name: 'Wormuck',
        race: 'Cucusumusu',
        planet: 'Eden',
        weight: '259kg'
}

console.group('Datos del alienigena:');

for (let i in alien) {
        console.log(alien[i]);

}
console.groupEnd();


/******************************************************* */

/* console.group('For-in');

for (let i in alien) {
        console.log(alien[i]);
   
}
console.groupEnd(); */


