console.log(document);                                      // document contiene todo el HTML que está asociado a nuestro archivo JS. Todo lo que hacemos en HTMl va a manilpular este documento
//DOCUMENT tiene una serie de propiedades y metodos


/****************************************FUNCIONES DE ACCEDER A UN ELEMENTO********************************************** */


//FUNCIONES ESENCIALES PARA LOCALIZAR LOS ELEMENTOS EN EL DOM

console.log(document.children[0]); // nos da un array de los hijos de HTML

//.getElementById - elemeto cuyo ID es 'divider'
console.log(document.getElementById("divider"));                                 /* este se utiliza mucho*/ // podemos buscar por id, con esta podriedad no hace falta # .El id es el de nuesto documento de html. El id tiene que ser unico para toda la pagina

//.getElementsByClassName - elementos que tienen esa clase
document.getElementsByClassName("divider"); //para buscar class, nos da un array porque podemos tener más de una clase. Nos devuelve todas las class que tenemos en HTML

//.querySelector (selecciona el primero) y .querySelectorAll (selecciona todos)
document.querySelector("#divider");                                             /*este se usa mucho */ // es como un buscador , los id se pone # y las class . (querySelector, nos devuelve el primer resultado)
document.querySelector("div.divider2");                                      // para que nos seleccione un div con una clase
const number1QueryByClass = document.querySelector('.inputText');           // Coge el primer elemento, podemos hacerlo por la class poniendo el .
document.querySelector('input[name="number1"]');                           // se puede acceder por los atributos, en este caso es input que tiene un atributo name cuyo valor es number 1
document.querySelectorAll(".divider");                                    // para obtener todos los resultados, a veces con los id tenemos que usar este elemento

const elementsByClass = document.getElementsByClassName('inputText');    // devuelve un array de elementos HTML de todos los elementos que tengan esa clase, porque varios elementos pueden tener la misma clase

document.getElementsByTagName("div");                                   // busca por etiquetas HTML, por ejemplo div, p, h1... (no se suele usar), nos daría todos los inputs que tenga nuestro HTML. Nos devuelve un array con los elementos HTML

document.createElement('div');                                         // nos crea un nuevo div(consola)


document.createTextNode('Text');                                    //nos añade un elemento de texto(consola)


/***************EJEMPLOS DE BUSCADORES CON POSIBLES CAUSAS******************** */


/* .getElementsByClassName NORMALMENTE CUANDO UTILIZAMOS ESTO ES PORQUE VAMOS A CAMBIAR LOS ELEMENTOS EN TODAS LAS CALSES QUE TENGAN EL MISMO NOMBRE
SI LO QUEREMOS HACER DE FORMA INDIVIDUAL UTILIZAREMOS UN FOR OF

for (let element of elementsByClas){
    elements (aqui modificaremos)
}
*/


/********************************************SELECTORES****************************************** */


//SELECTORES

// # => IDs
document.querySelector("#id"); //se utilizan normalmente en JS para el tema de manupilacion del DOM

//. => class
document.querySelector(".class"); // las class son para estilos


/*************************************************AÑADIR ELEMENTOS************************************* */


//AÑADIR ELEMENTOS

//nos vamos a la consola y haremos el siguiente ejemplo:

document.querySelector('#divider');   // buscamos el id que queremos

document.appendChild(document.createElement('div'))  //creamos un nodo


/*************************************************EVENTOS :CALLBACK************************************* */


// QUE ES UN EVENTO

/* <button id="button" onclick="calculate()" type="button">Calcular resultado</button> 
onclick="calculate() ESTO ES UN EVENTO es algo que ocurre a partir de una accion del usuario, onclick es un evento que se lanza cuando le damos click al boton */

//HAY VARIAS MANERAS DE EJECUTAR EVENTOS 

//      1. UNA DE ELLAS ES DETERMINAR NUESTRO ELEMENTO EN NUESTRO DOCUMENTO HTML. 
//LOS EVENTOS ESTAN DETERMINADOS POR ON + Y EL EVENTO QUE QUIERES QUE SE EJECUTE (onchange, onclick, onover...)
//DE TAL MANERA QUE LE PONEMOS EN EL HTML LA FUNCION QUE QUEREMOS QUE EJECUTE CUANDO SE CUMPLA NUESTRO JS LE DAMOS AL CLICK
//<button id="button" onclick="calculate()" type="button">Calcular resultado</button>  ----------   //onclick="calculate()

//      2. FUNCION CALLBACK (las funciones son un conjunto de codigo que tenemos para utilizar o encampsular codigo)
//QUE ES UN CALLBACK, ES UNA FUNCION QUE LE PASAMOS CON UNOS DATOS DETERMINADOS INTERMNAMENTE O BIEN EN UN EJEMPLO ESPECIFICO

/*funciones normales*/function a (numero, texto, funcion/*Parametros*/ , /*callback*/){ //los parametros pueden ser de distintos tipos(pueden tener un número, texto, funcion )
    //hace cosas
} 
/*el caso de la funcion se denomina CALLBACK */


//EJEMPLO CALLBACK, ESTA FUNCION DELEGA EN LA PERSONA QUE LO LLAMA UNA CIERTA FUNCIONALIDAD (le decimos que tiene que ejecutar cuando se cumpla una consicion especifica):

function a (callback){    // esta funcion recibe dos parametros 
    const a = 1;
    const b = 2;

    return callback(a, b);   //ejecutamos esta funcion
}

function suma(a, b){
    return a + b;
}

const suma = (a, b) => a + b;  //la funcion de flecha (recibe dos parametros y los suma)es lo mismo que esto :
/* let sum = function (a,b){
    return a + b;
} */

const mostrar = function (a, b){ // en callback delegamos la funcionalidad a un elemento externo como este 
    console.log(a, b);
}

a(mostrar);


//DEFINICION DE FUNCIONES:
/*Las funciones son un conjunto de codigo que tenemos para utilizar o encampsular codigo.
Las funciones reciben unos parametros, esos parametros pueden ser de distintos tipos: numeros, texto, array objeto
Uno de esos tipos son funciones, cuando una funcion es un parametro de otra funcion se le llama CALLBACK, 
Un callback es una funcion que va a llamarse dentro de otra funcion con un resultado por parametros, de esa funcion callback
La idea de los callback es delegar en una funcion parte de la funcionalidad de las funciones, es decir:
Tenemos una funcion que hace parcialemente una cosa(la parte contratante de la primera parte), esa funcion le dejamos al usuario que hacer con esos resultados.
*/


/*************EJEMPLO DE CALLBACK.2***************** */


const datos = [1, 2, 3, 11, 22]; 

function comparator(a, b){   // esta es la funcion comparadora que recibe los numeros. Esta es la parte que deja el callback al usuario para que la utilice como quiera.
if(a < b);                  // si a es menor que b
return -1;                  // AL USAR RETURN POR ESO PONEMOS TODOS IF
}
if(a === b);{              // si a es igual que b
return 0;
}
if(a > b);{               // si a es mayor que b
    return 1;
}               //aqui te lo ordena de menor a mayor, si lo queremos al reves sería el primero return 1 y el tercero -1

datos.sort(comparator);   /*ESTO ES UN CALLBACK*/    // esta funcion .sor tiene un callback y le podemos pasar una funcion comparadora 
// lo que hacemos es pasarle esa funcion (comparator) para personalizar, o que la funcion delegue en ese comparador cual es el orden que tiene que seguir
//la funcion .sort (ordenar), ordena pero parte de su funcionalidad que es la de determinar cual es el orden, nos la deja a nosotros. Delega en nosotros esa responsabildad
//utilizaremos esa funcion comparadora que esa es la que va a usar y va a determinar que numeros son los que van antes o despues



/***************EJEMPLO JS (CON ESTO NO SE INDICA EN HTML, el onclick)************************************** */

//EVENTOS reciben callback que es el .addEventListener

const button = document.getElementById('button');      //es decir recibe una funcion que se ejecuta cuando esto ocurra
button.addEventListener('click', function(){          //con esto tenemos qye
console.log('He hecho un click');                    // esta funcion se ha ejecutado cuando el usuario o nosotros le hemos dado al botón 
})

//TAMBIEN SE PUEDE HACER DE LA SIGUIENTE MANERA: (ES MEJOR USAR LA FUNCION DE ARRIBA)

const button1 = document.getElementById('button');
function handleClick(){
    console.log('He hecho un click');
}
button.addEventListener('click', handleClick);


// POR LO TANTO HAY DOS MANERAS DE AÑADIR EVENTOS, CON HTML <button id="button" onclick="calculate()" type="button">Calcular resultado</button> 
// O EN JS

document.getElementById('button').addEventListener('click', function(){ // ESTA ES UNA FORMA DE HACERLO O CON LA FUNCION FLECHA
})

/*-----------*/
document.getElementById('number1').addEventListener('change', (event)=>{ // .addEventListener recibe dos parametros('click' ) que es el evento que se ha ejecutado, .addEventListener - LISTENER añande un escuchador al evento ('click', (event)=>
    console.log('Ha cambiado el formulario');
})   

document.getElementById('button').addEventListener('click', (event)=>{ // .addEventListener recibe dos parametros('click' ) que es el evento que se ha ejecutado, .addEventListener - LISTENER añande un escuchador al evento ('click', (event)=>
console.log(event);
 })
    // el primer parametro hace (click, hover, button, blur, cancel) con Control + espacio nos aparece el listado


/*----------------*/


//LISTADO DE LOS EVENTOS MÁS USADOS

//submit : para formularios (se delega al HTML funcionalidad ), estos botones submitea ese formulario a la misma dirección.
//click : cuando clickamos en un boton, se ejecuta ese evento
//change : esto se ejecuta cuando se cambia un valor, cuando salimos del campo y ya no esta el foco en el input es cuando se ejecuta
//input : es como el change pero más intenso, se ejecuta cada vez que escribamos algo (esto es muy hutil cuando utilizamos un .length+ , para que nos limite los caracteres al escribir)
//hover : cuando nos posicionamos encima de un campo, cambia de color
//mouseover : cuando pasamos el cursor por encima cambia la forma
//focus : cuando focuseamos es cuando muestra el mensaje, normalmente se utiliza para el tema de validadores (focusear es pinchar en el campo para escribir)
        // por ejemplo el tipico campo de una constraseña(que debe tener una minuscula, mayuscula y un caracter), cuando entramos esa pestaña que sale es el focus
        //para validar que esa contraseña se va cumpliendo es el INPUT ( el input se ejecuta cada vez que se escribia)
//focusOut : ocultamos la contraseña cuando la escribimos, ocultamos el tootip con los requisitos de cotraseña
//scroll : se mueve el scroll
//keydown : tambien se usa es como el input para validar las palabras que se han metido en un formulario
//load : que se ha terminado de cargar la pagina
//blur : es cuando un input pierde el foco es lo mismo que el focusOut, determina cuando un elemento ya no esta en focus, no esta seleccionado.


/***************COMO INDICAR VARIOS LISTADOS SOBRE EL MISMO EVENTO************************************** */


//SE TIENE QUE DUPLICAR, PORQUE GENERALMENTE NO APLICAMOS LA MISMA FUNCIONALIDAD A AMBOS EVENTOS
document.getElementById('number1').addEventListener('input', ()=>{ 
    console.log('Valido contraseña');
}) 
document.getElementById('number1').addEventListener('focus', ()=>{ //cuando salimos del focus ocultamos el tootip con los requisitos de cotraseña
    console.log('Muestro el tooltip con requisitos de contraseña');
}) 
document.getElementById('number1').addEventListener('focusOut', ()=>{ //cuando salimos del focus ocultamos el tootip con los requisitos de cotraseña
    console.log('Oculto el tooltip con requisitos de contraseña');
}) 
