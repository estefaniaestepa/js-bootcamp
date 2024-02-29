//PROGRAMACION FUNCIONAL : SE DICE DE AQUELLA PROGRAMACION QUE SE ENFOCA EN FUNCIONES
//EN LA SEPARACION DE LA FUNCIONALIDAD EN FUNCIONES
/**

/****************************MAP******************************************************* */

//APLICADO ARRAYS
//MAP (ES UTIL CUANDO QUEREMOS COPIAS)

const numbers = [1, 2, 3, 4];

console.groupCollapsed('Map');

/* Sirve para aplicar una función a cada elemento de la lista
* Devuelve un nuevo array, por lo que la función siempre debería tener un return
*/
const numbersPor2 = numbers.map((valor) => {        //este .map va a recibir una funcion, esa funcion la va aplicar a cada uno de esos elementos de ese array y va a devolver un array con el resultado
            //recibe el valor y el inidice/Cuerpo de la función a aplicar
        return valor * 2;                         // Este es el resultado a aplicar a cada elemento del array
});

// numbersPor2 -> [2, 4, 6, 8]

console.log('original', numbers);              //esto nos devuelve el array
console.log('* 2', numbersPor2);              //esto nos devuelve la multiplicación x2 del array y devuelve la copia del resultado

console.groupEnd();


/********************************** */


//la funcion de arriba también se puede hacer de esta forma:
const numbersPorDos = numbers.map((valor) => valor * 2 );         //esto es lo mismo


/********************************** */


/********equivalente en código de lo que hemos visto********* */
const numbersMult = [];

for(let valor of numbers){
    numbersMult.push((valor * 2));          //esto es la equivalencia 
}


console.log('original', numbers);
console.log('* 2', numbersMult);


/********************************** */


//map se usa mucho para hacer copias
[...numbers]
const copy = numbers.map((value) => value);         //itera cada valor y de cada valor me da su valor, esto hace una copia 


/***************************FOREACH******************************************************** */


//FOREACH (NO QUEREMOS UNA COPIA QUEREMOS ITERAR POR ELLOS)

console.groupCollapsed('forEach');

/**
 * Sirve como el anterior, quiero aplicar una función a cada elemento del array
 * PERO no necesito tener un array nuevo con el resultado.
 */
numbers.forEach(/* Función a ejecutar */(valor /* Cada elemento del array */) => {    //.forEach recibe una funcion que recibe el valor y el indice
   /* Cuerpo de la función */
    console.log(valor); 

     // NOTA: No necesita un return.

}); 

console.groupEnd();


/******equivalente en código de lo que hemos visto********* */

for(let valor of numbers){
    console.log(valor);         //esto es la equivalencia 
}


/***************************REDUCE******************************************************** */


//REDUCE

/*
 * Se usa para reducir un listado de elementos a un sólo elemento.
 * Se usa en operaciones sencillas, porque si no el código es difícil de mantener
 * 
 * La función que tiene dentro debe tener siempre un return y realizar alguna operación
 * con la variable acumuladora.
 */

const numbers1 = [1, 2, 3, 4];                //ejemplo sumamos 1 con 2, 3, 4 y eso es reducir
                //prevalue = total

const result = numbers.reduce(/* Función a ejecutar */(total /* Variable acumuladora */, currentValue /* Valor de la lista */) => {   //.reduce aplica una funcion a cada elemento con una acumulacion, es un reductor. Es decir, tiene un listado de elementos y va a cabar con 1 resultado 

    console.log(total, currentValue);      // Resultado de la operación.
    return total + currentValue           //siempre tiene que devolver un valor, suma todos los elementos
}, /* Valor de inicio para la variable acumuladora */  0);   //el 0 es un valor inicial


/**
 * En el ejemplo anterior, línea por línea se ejecutaría así
 * Valor a procesar | variable acumuladora | resultado de la función
 *         1        |           0          |            1
 *         2        |           1          |            3
 *         3        |           3          |            6
 *         4        |           6          |            10
 */


/********equivalente en código de lo que hemos visto********* */


const sumaDelTotal = numbers1.reduce((sum, val) => sum + val, 0);


/********equivalente en código de lo que hemos visto********* */


// Equivalente a 
const sumaTotal = 0;

for (let valor of numbers) {
    sumaTotal += valor;
}

console.log(sumaTotal);


/***********REDUCE CON STRINGS************ */

const letters = ['Hola', 'Santa', 'Claus'];

const letters1 = [{number: 1}, 'Santa', 'Claus'];// tambien es muy util con los objetos

console.log(letters.reduce((text, characters) => `${text} ${characters}`));  //esto nos devuelve Hola Sata Claus por lo que se pueden concatenar caracteres

console.log(letters.reduce((text, characters) => `${text} , ${characters}`)); //se puede separar por , Hola, Santa, Claus

console.log(letters.reduce((text, characters) => `${text} - ${characters}`));  //se puede separar por -



/***************************FILTER******************************************************** */


//FILTER

//Recibe un predicado es una función que devuelve un booleano (true/false)
//Sirve para filtar el listado en base a una condición
 

const numbers2 = [1, 2, 3, 4];

const numbersQueCumplenLaCondicion = numbers2.filter(/* función filtradora */ (valor /* Valor del array */) => {      //va a devolver aquellos que si que cumplan esa condición
    return true; // Valor booleano SIEMPRE TIENE QUE DEVOLVER UN RETUN
});


/******************EJERCICIO PRACTICO****************** */

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];

const toysQueNoTienenGato = toys.filter((toy) => !toy.name.includes('gato'));       // ! esto significa que no tienen gato, con esto tenemos un nuuevo array que no tienen gato. LOS QUE NO INCLUYEN


/***************FILTRAR UNA LISTA DE BOOLEANOS*********** */


//Obtener los elementos que no sean falsy (que no sean falso)

const listaConFalsy = [
    '', 0, false, 1, 2, 3, true, []        //elimina el vacío '' , false, 0  //  array vacío no es false
];

const listaSinFalsy = listaConFalsy.filter((val) => val);     //esta función lo convierte en booleano (true / false)


/***************************FIND******************************************************** */


//FIND

//Un predicado es una función que devuelve un booleano , APLICA ESTA FUNCIÓN A CADA UNO DE LOS ELEMENTOS DEL ARRAY
//Sirve para buscar en un listado. VA EN ORDEN ASCENDENTE AL INDICE DEL 0 AL ...
//devuelve el primer elemento del array donde el predicado es TRUE
//te devuelve el objeto

const jugueteConGato = toys.find((valor) => valor.name.includes('gato')); // { id: 40, name: 'El gato con Guantes' },        //nos devolverá el primer gato que encuentre, se suele aplicar a objetos complejos. Buscamos en el array el primer elemento que contenga gato
 

/***************************** */


const number2 = numbers.find((valor /* Valor procesado */ ) => {       //find es el número
    return valor === 2;       // si cumple la condicion / valor booleano
});



/***************************FINDINDEX******************************************************** */


//FINDINDEX

//posicón del objeto
//Te devuelve el primer indice

const indiceNumber2 = numbers.findIndex((value) => value === 2);    

/***************************** */

const indiceJugueteGato = toys.findIndex((valor) => valor.name.includes('gato'));   //nos devuelte 3 que es la posición 3 del array


/***************************SOME******************************************************** */


//SOME

//Devuelve si hay algún valor que cumpla el predicado
//Comprueba si existe algun elemento, almenos uno que cumpla el predicado
//solo te dice si existe
//equivalente complejo al includes (arrays)  //contain para objetos 

const algunJugueteConGato = toys.some((value) => value.name.includes('gato'));      //te devuelve un booleano (true / false)


/***************************EVERY******************************************************** */


//EVERY

//Devuelve si TODOS los valores cumplen el predicado

const todosTienenGato = toys.every((value) => value.name.includes('gato'));      //te devuelve un booleano (true / false)
//                                  ^^^^^^^^^^^^^ Predicado ^^^^^^^^^^^^^^