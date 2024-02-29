//Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
//FIND

//Un predicado es una función que devuelve un booleano , APLICA ESTA FUNCIÓN A CADA UNO DE LOS ELEMENTOS DEL ARRAY
//Sirve para buscar en un listado. VA EN ORDEN ASCENDENTE AL INDICE DEL 0 AL ...
//devuelve el primer elemento del array donde el predicado es TRUE
//te devuelve el objeto

const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];


const searchedDate = 2010;                                                        //creamos una constante para que encuentre en nuestro array de objetos la pelicula del 2010
console.log(movies.find((movie) => movie.date === searchedDate));                // buscamos en cada pelicula si pelicula.fecha es igual al numero buscado.

