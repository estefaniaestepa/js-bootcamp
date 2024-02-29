//Dado el siguiente array, usa .find() para econtrar el número 100.

//FIND

//Un predicado es una función que devuelve un booleano , APLICA ESTA FUNCIÓN A CADA UNO DE LOS ELEMENTOS DEL ARRAY
//Sirve para buscar en un listado. VA EN ORDEN ASCENDENTE AL INDICE DEL 0 AL ...
//devuelve el primer elemento del array donde el predicado es TRUE
//te devuelve el objeto


const numbers = [32, 21, 63, 95, 100, 67, 43];


const searchedNumber = 100;                                                    //creamos una constante con el numero que queremos buscar
console.log(numbers.find((number) => number === searchedNumber));             // buscamos en cada número si numero es igual al numero buscado, si no existe el 100 indicará undefined


/* LO QUE HACE EL CONSOLE LOG
  32 = 100 /false
   21 = 100 /false
   63 = 100 / false
   95 = 100 /false
  100 = 100 /true */
