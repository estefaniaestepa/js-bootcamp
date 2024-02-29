//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18


//FILTER

//Recibe un predicado es una función que devuelve un booleano (true/false)
//Sirve para filtar el listado en base a una condición

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];            //constante de array

const mayorEdad = ages.filter(number => number > 18);       //creamos una constante que filtre por la constante del array y comparamos los números que sean mayor de 18                     
                           




console.log(mayorEdad);                                //mostramos por consola los números mayor de 18
