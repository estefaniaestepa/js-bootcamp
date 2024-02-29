// Programación funcional
const numbers = [1, 2, 3, 4];

/// map
console.groupCollapsed('Map');

/**
 * Sirve para aplicar una función a cada elemento de la lista
 * Devuelve un nuevo array, por lo que la función siempre debería tener un return
 */
const numbersPor2 = numbers.map(/** función a aplicar */(value /* Cada elemento del array */) => {
    /** Cuerpo de la función a aplicar */

    return value * 2; // Este es el resultado a aplicar a cada elemento del array
});

// numbersPor2 -> [2, 4, 6, 8]

console.log('original', numbers);
console.log('* 2', numbersPor2);

/**
 * También se puede hacer así:
 * const numbersPor2 = numbers.map((valor) => valor * 2);
 */

/** Equivalente en código que hemos visto
const numbersPor2 = [];

for (let valor of numbers) {
    numbersPor2.push((valor * 2));
}

console.log('original', numbers);
console.log('* 2', numbersPor2);
*/

console.groupEnd();

/// forEach
console.groupCollapsed('forEach');

/**
 * Sirve como el anterior, quiero aplicar una función a cada elemento del array
 * PERO no necesito tener un array nuevo con el resultado.
 */
numbers.forEach(/* Función a ejecutar */(valor /* Cada elemento del array */) => {
    /* Cuerpo de la función */
    console.log(valor);

    // NOTA: No necesita un return.
});

/** Equivalente en código que hemos visto
for(let valor of numbers) {
    console.log(valor);
}
*/

/// reduce
/**
 * Se usa para reducir un listado de elementos a un sólo elemento.
 * Se usa en operaciones sencillas, porque si no el código es difícil de mantener
 * 
 * La función que tiene dentro debe tener siempre un return y realizar alguna operación
 * con la variable acumuladora.
 */

// const numbers = [1, 2, 3, 4];
const result = numbers.reduce(/* Función a ejecutar */(total /* Variable acumuladora */, currentValue /* Valor de la lista */) => {
    /* Cuerpo de la función */
    console.log({ total, currentValue });

    return total + currentValue; // Resultado de la operación.
}, /* Valor de inicio para la variable acumuladora */ 0);
console.log(result); // 1 + 2 + 3 + 4 = 10

/**
 * En el ejemplo anterior, línea por línea se ejecutaría así
 * Valor a procesar | variable acumuladora | resultado de la función
 *         1        |           0          |            1
 *         2        |           1          |            3
 *         3        |           3          |            6
 *         4        |           6          |            10
 */

// Equivalente a 
const sumaTotal = 0;

for (let valor of numbers) {
    sumaTotal += valor;
}

console.log(sumaTotal);

/// filter
/**
 * Sirve para filtar el listado en base a una condición
 */
// const numbers = [1, 2, 3, 4];
const numbersQueCumplenLaCondicion = numbers.filter(/* función filtradora */ (valor /* Valor del array */) => {
    return true; // Valor booleano
});

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];

const toysQueNoTienenGato = toys.filter((toy) => !toy.name.includes('gato'));

const listaConFalsy = [
    '', 0, false, 1, 2, 3, true, []
];

const listaSinFalsy = listaConFalsy.filter((val) => val);

/// find
/**
 * Un predicado es una función que devuelve un booleano
 */
/**
 * Sirve para buscar en un listado
 */

const jugueteConGato = toys.find((valor) => valor.name.includes('gato')); // { id: 40, name: 'El gato con Guantes' },

const number2 = numbers.find((valor /* Valor procesado */ ) => {
    return valor === 2;
});

/// findIndex
const indiceNumber2 = numbers.findIndex((value) => value === 2);
const indiceJugueteGato = toys.findIndex((valor) => valor.name.includes('gato')); // 3

/// some
/**
 * Devuelve si hay algún valor que cumpla el predicado
 */
const algunJugueteConGato = toys.some((value) => value.name.includes('gato'));

/// every
/**
 * Devuelve si TODOS los valores cumplen el predicado
 */
const todosTienenGato = toys.every((value) => value.name.includes('gato'));
//                                  ^^^^^^^^^^^^^ Predicado ^^^^^^^^^^^^^^