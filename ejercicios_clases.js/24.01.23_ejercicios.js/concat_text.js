const concatenar = "Esto es un string que se va a concatenar. " + "Soy el otro string concatenado";

document.write(concatenar);


/*******************CONCATENAR VARIABLES************************** */


const texto1 = "Esto es un string que se va a concatenar.";
const texto2 = "Soy el otro string concatenado";
const texto3 = "Tercer texto concatenado";

let concat = texto1 + texto2 + texto3 + "Soy un texto acoplado"; //podemos añadir strings

document.write(concat);


/********************* */

const nombre = "Estefania";
const apellido = "Estepa";
const pais = "España";

console.log(`Mi nombre es ${nombre}, mi apellido ${apellido} y soy de ${pais}`);


/*******************CONCATENAR STRINGS DE UN ARRAY************************** */


let palabras = ["Hola", "estoy", "concatenando", "texto", "con", "JS"];

let concatenando = palabras[0] + palabras[1] + palabras[2] + palabras[3] + palabras[4] + palabras[5]

document.write(concatenando);


/*******************CONCATENAR STRINGS DE VARIOS ARRAYS************************** */


let colores = ["rojo", "azul", "negro", "verde", "amarillo"];
let coches = ["Mercedes", "Opel", "Peugeot", "Renault"];

let frase = "tengo un" + coches[0] + " de color " + colores[2] + ".";

document.write(frase);


/*******************CONCATENAR NUMERO EN STRINGS************************** */

let numberString1 = "44";
let numberString2 = "56"; //56

let sumaNumberString = numberString1 + numberString2;

document.write(sumaNumberString); // resultado 4456 considera que estos numeros son parte de caracteres
// si ponemos uno de los dos en number igualmente lo concatena 
// el simbolo de multiplicacion no concatena, si que hace la multiplicacion, lo mismo con la resta




