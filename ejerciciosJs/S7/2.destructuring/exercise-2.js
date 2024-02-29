//En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. 
//Posteriormente imprimelo por consola.



const fruits = ['Banana', 'Strawberry', 'Orange'];         //quereremos desestructurar esta constante de arrays


const[uno, dos, tres] = fruits;                          //esto lo desestrucctura y te crea 3 variables que igualamos a la función

console.log(`La primera fruta es: ${uno}`);             //imprimimos los arrays por consola
console.log(`La segunda fruta es: ${dos}`);
console.log(`La tercera fruta es: ${tres}`);