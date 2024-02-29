//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

//FILTER

//Recibe un predicado es una función que devuelve un booleano (true/false)
//Sirve para filtar el listado en base a una condición


const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];               //constante de arrays


const agesPar= ages.filter(age => age % 2 === 0);               //creamos una constante que filtre por la constante del array . Para saber los números pares dividimos por 2 y resto de la división sea igual a 0 




console.log(agesPar);                                        //mostramos por consola los números pares