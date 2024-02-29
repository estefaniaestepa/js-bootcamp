// SPREAD OPERATOR : SE USA PARA HACER COPIAS / CLONES
//el operador de spread es ...client (los 3 puntos) se llaman spread operator. 

//SPREAD DE ARRAYS

const listado = [5, 6, 7, 8];
const listadoCopia = [...listado];                                       //copia normal                                  //esto es el equivalente a [...listado]
const listadoMasElementosPrincipio = [9, 10, 11, ...listado];           //tambien sirve para añadir elementos, es decir podemos añadir elementos al principio 
const listadoMasElementosFinal = [...listado, 1, 2, 3];                //de esta forma añadimos elementos al final

listadoCopia.push(...listado);                     

//desestruccturación de listados
const[uno, dos, tres, cuatro] = listado;


//SPREAD DE OBJETOS
// los objetos de este cliente son (name, surname) y los objetos tienen claves y esas claves son únicas

const client = {
    name: 'Victor',
    surname: 'Castillos',
};

const clientCopy = {...client};                                       //clon del objeto
const clienteExtend = {...client, address: 'Calle del Ciervo 17'};    //de esta forma añadimos un objeto al cliente, añade una propiedad extra a la copia
const clienteModified = {...client, name: 'Ivan'};                  //Copia y modifica el dato. Podemos modificar los datos del objeto, en este caso cambiamos el nombre del cliente. Este caso añade todas las propiedades del cliente y el último es el que modifica si ya está el objeto
const clienteModified2 = {name: 'Ivan', ...client};                //copia el objeto y prevalece el dato en client (generalmente se usa para valores por defecto)
                                                                  //Esto también sirve para modificar, en este caso creo el nombre y le añado todas las propiedades que tiene el cliente. Es decir quiero que le pongamos el nombre Ivan SI NO TIENE OTRO NOMBRE, COMO EN ESTE CASO SI QUE TIENE NOMBRE SE QUEDA EL NOMBRE DE VICTOR

//desestructuracion de objetos
const {name, surname} = client;

/*************MODIFICAR UN SÓLO DATO DEL OBJETO O COPIAR UNA LISTA MULTIDIMENSIONAL********************** */

//Listado/Objeto
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


//copia mal hecha
const copiaLista = [...lista]                                           //copiamos lista
copiaLista[0].name = 'Juan Carlos';                                    //cambiamos el valor a name en lista y copia lista
//para cambiar sólo la copia haremos una copia profunda
console.log('Eres la misma referencia?', copiaLista[0] === lista[0]) //aqui nos devuelve una consola si hacemos la comparacion porque no hemos hecho el bucle ni la copia profunda


//copia bien hecha
const copiaLista = [];

for(let val of lista){
    copiaLista.push(...val);                                      //queremos que meta la copia del elemento
}
copiaLista[0].name = 'Juan Carlos';                             //le cambiamos el nombre, sólo a la copia y no a la lista original
console.log('Eres la misma referencia?', copiaLista[0] === lista[0]) //aqui nos dirá false porque ya no tienen el mismo nombre las dos listas


/********COPIA PROFUNDA (depp copy)************************************* */
//es decir copias el objeto iterando
//entrar en esa propiedad y cambiarle el valor a una copia de esa propiedad


const clon = {...lista[1], address: 'Calle del Ciervo 17'};       // Será una copia del obhjeto, queremos clonar el segundo indicamos el spread operator y el núnmero de la posición del array.Si queremos clonar un elemento lo indicamos al final (adress)
const listaCopia = [];

//para copiar el array haremos un bucle
for(let obj of lista){                                          //de esta forma es como se haria la copia
    listaCopia.push({...obj});
}                   //si fuese la copia en lugar de lista de objetos un array usariamos formato de [] / listaCopia.push([]...obj]);

listaCopia[0].name = 'Pedro';                                  //esto nos cambiaria el valor en las dos listas, en la copia y en la original. Por que esta clonando o copiando las referencias de ese objeto.
                                                              //SI LE HACEMOS EL BUCLE SI QUE NOS MODIFICA A PEDRO SÓLO EN LA COPIA
console.log(lista, listaCopia)

const objeto2 = {
    address:{
        street: 'Calle del ciervo',
        num: 1,
        cp: '28523',
    }
    name: 'Carlos',
    surname: 'Fernandez',
};


//copia mal hecha
const objetoCopia = {...objeto2}
objetoCopia.address.street = 'Calle Virgen del Milagro';     //con esto se cambia en las dos listas en la original y en la copia

console.log('Es la misma referencia?', objeto2.address === objetoCopia.address)  // nos devolverá un true porque son la misma referencia


//copia bien hecha
const objetoCopia2 = {...objeto2, address : {...objeto2.adress}};    //con esta COPIA PROFUNDA la calle sólo se cambiará en la copia y no en el array original.
objetoCopia2.address.street = 'Calle Virgen del Milagro';            //cambiamos el valor a la calle

console.log('Es la misma referencia?', objeto2.address === objetoCopia.address)   //nos dirá que no son la misma referencia porque sólo hemos lo cambiado en la copia

