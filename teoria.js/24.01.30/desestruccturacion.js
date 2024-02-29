//DESESTRUCCTURACION

//DE LISTADOS

const lista = [5, 6, 7, 8];                //el listado tiene 4 números y queremos sacar estos 4 numeros a 4 valiables

const[uno, dos, tres, cuatro] =listados;   //se hace de esta manera

console.log(lista);                       //[5, 6, 7, 8] se ve asi
console.log(uno, dos, tres, cuatro);     // 5 6 7 8  se ve así, estos 4 numeros son 4 constantes cada uno tendrá un valor posicional
                                        //uno(tiene el contenido del 0 =5), así sucesivamente, posicionalmente vamos asignar a cada variable un dato del array


/**********EJEMPLOS************* */


//veremos uejemplo
 //que pasa si tenemos menos elementos que la longitud de la lista
 const [a,b] = lista;
 console.log({a,b});                 //aqui coge el 5 y se lo asigna al a , coge el 6 y se lo asigna al b {a: 4 , b: 5}

 //que pasa si tenemos mas elementos que la longitud de la lista
 const[c, d, e, f, j] = lista
 console.log({c, d, e, f, j});      // nos saldria en la consola undefined. Es lo mismo que si intentamos acceder a una posicion que no existe


 /*********EJEMPLO RIAD*********************** */

//forma mal hecha
const stateData1 = getState()                      
stateData1[0];                     //valor
stateData1[1](valorNuevo);        //setter


//forma de hacerlo bien (desestruccturacion de listados)
 const stateData = getState()                       //getState te devuelve el estado de un componente. SIEMPRE DEVUELVE UN ARRAY, este array siempre tiene dos elementos, el valor del estado y un seter(una funcion que setea / cambia el estado) setea el valor a un estado
                                                   // array [valor, funcion que cambia el estado setter]
 const [valor, setvalue] = getState ();           //para acceder el valor tendriamos que indicar esto
 console.log(valor);         //valor
 setvalue(valorNuevo);      //setter


 /******************************************************* */


//DE OBJETOS

const client = {                            //esto es un objeto 
    name: 'Victor',                        //este cliente tiene dos propiedades (name y surname) QUEREMOS SACAR ESTO EN UNA VARIABLE
    surname: 'Castillos',
};

const {name, surname} = client;           //la desustruccturación es {} el nombre de la llave tiene que tener el mismo nombre que el objeto

console.log(`Hola, soy ${name} ${surname}`);   //de esta manera sacamos name y surname a dos variables

