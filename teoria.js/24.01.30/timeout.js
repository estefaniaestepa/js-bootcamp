//TIMEOUT : RETRASA UNA EJECUCIÓN LOS MILISEGUNDOS QUE LE INDICAMOS
//Es una función que ejecuta algo dentro de x milisegundos. Es una función que recibe dos parametros, en un bucle


//setTimeout : devuelve un id un identificador (una constante que le hemos creado), un número interno que identifica al temporizador que le hemos indicado del tiempo.

const timeoutID = setTimeout(/*Handler*/ () => {    //Handler, es una función que ejecutará algo cuando se termine el tiempo indicado en el bucle. Es un parámetro para la función
    //(tiempo)Que haré pasado ese tiempo
}, /*Tiempo (ms)*/ 1000);                          //(milisegundos = segundos x 1000 (2*1000 = 2seg))

clearTimeout(timeoutID);                          //con la función clearTimeout cortamos el setTimeout ( esto recibe el nombre de la constante que le hemos indicado)


//La utilidad de esto es? : por ejemplos:
//quieres regresar la ejecucion de algo pasado un tiempo
//un contador en una página de 3 segundos para cerrar, hasta que cierra sesión y el usuario tiene ese tiempo para cancelar y darle al setTimeout, para cancelar esa función.


/****************************************EJEMPLO PRÁCTICO******************************************************************************************************************************************** */

//VEAMOS UN EJEMPLO:

const timeoutID1 = setTimeout(() => {           // el setTimeout + el bucle de flecha se queda como encolado, se ejecuta y se queda guardado como que se tiene que ejecutar en este caso pasados 3 seg y entonces seguirá ejecutando el resto del código. Cuando le vuelva a tocar se volverá a ejecutar
 
  console.log('Hola Mundo');                   //pasado el tiempo de 3 seg que le incdicamos, se ejecuta el Hola Mundo
},  3000);                         

console.log('Hola');                          //en este caso Hola se ejecutará y a los 3 seg aparece Hola Mundo
console.log('Hola');
console.log('Hola');
/* clearTimeout(timeoutID1);   */                   //Con esto se corta la función y ya no se ejecutaría el console.log


/***************EJEMPLO DE QUE NUNCA PARARÍA DE EJECUTAR LA FUNCIÓN*************************/


// SI NO QUEREMOS CORTAR LA FUNCIÓN, SE HARÍA QUITANDO EL ID. (sin el Id no podríamos cortarlo porque necesitamos ese identificador):
//no se puede saber el identificador, porque es único que genera JS por dentro y que lo identifica
//si en algún momento queremos limpiarlo o detenerlo, tendriamos que tener el id ( en este caso timeoutID), guardado en una variable, puede ser let o puede ser const

setTimeout(() => {    
 
  console.log('Hola Mundo');                   
},  3000);                         


/****************EJEMPLO DE QUE SE EJECUTE Y AL CIERTO TIEMPO PARE************************/


let timeoutID2 = null;
let success = false;
let i = 0;

function caller(){                                    // caller esto se llama recursividad (cuando una función se llama así misma)
  console.log('Hola Mundo!');                        // se ejecuta el Hola Mundo!
  timeoutID2 = setTimeout(caller, 3000);            // pasados 3 segundos se vuelve a ejecutar
  i++

  if( i >= 3){                                    // cuando el i sea mayor o igual a 3 para, es decir, escribirá 3 Hola mundo!
    clearInterval(timeoutID2);
  }
}

timeoutID2 = setTimeout(caller, 3000);              //con esto llamamos a la función
