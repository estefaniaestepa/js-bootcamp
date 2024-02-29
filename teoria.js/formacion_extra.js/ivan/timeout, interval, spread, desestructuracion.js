// Timeouts
/**
 * Sirve para hacer algo pasado un tiempo
 */

const timeoutID /** Identificador del temporizador */ = setTimeout( /** Handler */ () => {
    // Que haré pasado ese tiempo
    console.log('Hola mundo!');
}, /** Tiempo (ms) */ 3000);

// Matar el temporizador
clearTimeout(timeoutID);

// Intervals
/**
 * Realiza una acción CADA cierto tiempo
 */
let i = 0;
let intervalID = null;

intervalID /* Identificador del intervalo */ = setInterval(/** Handler */ () => {
    if (i === 3) {
        clearInterval(intervalID);
    } else {
        console.log('Hola');
        i++;
    }
}, /** Tiempo (ms) */ 3000);

// Mata el intervalo
clearInterval(intervalID);

// Spread operator
/**
 * Sirve para hacer copìas de arrays y de objetos
 */
/// Spread de arrays
const listado = [1, 2, 3, 4];
const listadoCopia = [...listado]; // Copia normal
const listadoMasElementosPrincipio = [1, 2, 3, ...listado]; // Añado 3 números al principio y copio listadp
const listadoMasElementosFinal = [...listado, 1, 2, 3]; // Copio listado y añado elementos al final

/// Spread de objetos
/*
const client = {
    name: 'Victor',
    surname: 'Castillos',
};
const clientCopy = {...client}; // Clona el objeto
const clientExtend = {...client, address: 'Calle del Ciervo 17'}; // Añadir una propiedad extra a la copia
const clientModified = {...client, name: 'Iván'}; // Copia y modifica un dato
const clientModified2 = {name: 'Iván', ...client}; // Copia el objeto y prevalece el el dato en client (generalmente se usa para valores por defecto)
*/

/// Listado/Objetos complejos
/*
const lista = [
    {
        name: 'Victor',
        surname: 'Castillos',
    },
    {
        name: 'Carlos',
        surname: 'Castillos',
    },
    {
        name: 'Francisco',
        surname: 'Castillos',
    },
];
*/

// Copia mal hecha
/*
const copiaLista1 = [...lista];
copiaLista1[0].name = 'Juan Carlos';

console.log('copia', copiaLista1);
console.log('original', lista);
console.log('Es la misma referencia?', copiaLista1[0] === lista[0]);
*/

// Copia bien hecha (copia profunda)
/*
const copiaLista1 = [];

for (let val of lista) {
    copiaLista1.push({...val});
}

copiaLista1[0].name = 'Juan Carlos';

console.log('copia', copiaLista1);
console.log('original', lista);
console.log('Es la misma referencia?', copiaLista1[0] === lista[0]);^
*/

/// Copia profunda (deep copy)

const objeto2 = {
    address: {
        street: 'Calle del Ciervo',
        num: 1,
        cp: '28523',
    },
    name: 'Carlos', 
    surname: 'Fernandez',
};

// Copia mal
/*
const objetoCopia2 = {...objeto2};
objetoCopia2.address.street = 'Calle Virgen del Milagro';

console.log('Copia', objetoCopia2);
console.log('Original', objeto2);
console.log('Es la misma referencia?',  objeto2.address === objetoCopia2.address);
*/

// Copia bien (deep copy)
/*
const objetoCopia2 = {...objeto2, address: {...objeto2.address}};
objetoCopia2.address.street = 'Calle Virgen del Milagro';

console.log('Copia', objetoCopia2);
console.log('Original', objeto2);
console.log('Es la misma referencia?',  objeto2.address === objetoCopia2.address);
*/

// Desestructuración
/// De listados
/*
const listado2 = [4, 5, 6, 7];
const [uno, dos, tres, cuatro] = listado2;
*/
//      4    5     6      7

/// Evitamos:
/*
const uno = listado2[0];
const dos = listado2[1];
const tres = listado2[2];
const cuatro = listado2[3];
const cinco = listado2[4]; // undefined
*/

/*
const [a, b] = listado2;
console.log({a, b});
const [c, d, e, f, j] = listado2;
console.log(listado2[5]);
console.log({c, d, e, f, j});
*/

// Ejemplo práctico
// -> Bad 
/*
const stateData = getState(); // array{valor, funcion que cambia el estado (setter)}
console.log(stateData[0]); // Valor
stateData[1](valorNuevo); // Setter

// -> Good
const [valor, setValue] = getState();
console.log(valor);
setValue(valorNuevo);
*/

// Ejemplo imagen destacada de Carrousel de Airbnb
/*
const imagenes = ['imagen1', 'imagen2', 'imagen2'];
const [imagenDestacada] = imagenes;
*/

/// De objetos
const client = {
    name: 'Victor',
    surname: 'Castillos',
};
// const {name, surname} = client;

/* Evitamos lo siguiente:
const name = client.name;
const surname = client.surname;
*/

console.log(`Hola, soy ${name} ${surname}`);

const listadoDeObjetos = [
    {
        name: 'Victor',
        surname: 'Castillos',
    },
];

const {name, surname} = listadoDeObjetos[0];

const listadoDeListados = [
    [1, 2, 3, 4],
];

const [a, b] = listadoDeListados[0];

// Import export
/*
import {getClient, setName} from "./clientDefault";

console.log(getClient());
console.log(setName);
*/
