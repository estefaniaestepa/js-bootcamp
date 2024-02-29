/* En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. 
Cuidado, no hace falta hacer destructuring del array, solo del objeto.

*/

const game = {title: 'The last us 2',                       //la constante tiene 3 objetos que queremos destruccturar, para crear 3 variables   
 gender: ['action', 'zombie', 'survival'], year: 2020}


 const{title, gender, year} = game;                      //esto lo desestrucctura y te crea 3 variables que igualamos a la función

console.log(`El título es: ${title}`);                 //mostramos por consola las variables
console.log(`El genero es: ${gender}`);
console.log(`El año es: ${year}`);
