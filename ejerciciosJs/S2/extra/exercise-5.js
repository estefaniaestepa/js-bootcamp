/* Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá silumar el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! 
busca información sobre la función de javascript ``Math.random()`` */


const numberRoll = 6;

function rollDice(numberRoll){
  const resultado = Math.ceil(Math.random()*numberRoll);        //la multiplicacion la indicamos porque es la manera que tiene JS de indicarle que es el número maximo 
  return resultado;                                             //esto nos devuelve el resultado de la funcion                          
}

console.log('El número aleatorio es : ' + rollDice(numberRoll));       //no es necesario crear una variable para llamar a la funcion
//nos devuelve los numeros alatorios redondeados 




// Math.random genera numeros decimales entre 0 y 1( lo multiplicamos por 6 que son los numeros del dado y esto nos hace la multiplicacion de 0 a 6 con decimales)
//Math.ceil (se lo indicamos a Math.random para que nos haga el redondeo de ese numeros decimal que genera Math.random)
//Math.ceil redondea hacria arriba y Math.random() genera numeros aleatorios pero con decimales, entonces con Math.ceil redondea hacia arriba, es decir si sale 0.33 redondea a 1
// con Math.floor redondea hacia abajo por lo que si sale el numero aleatorio 0.99 saldría un 0 y un dado empieza de 1



/**************************RESULTADO MATHIAS: 1ª****************************** */

function rollDice(sidesNumber){
  const randomNumber = Math.ceil(Math.random()*sidesNumber);
  return randomNumber;
}

console.log(`El resultado de la tirada es:` + rollDice(6));



//SEGUNDA MATHIAS

function rollDice(sidesNumber){
  const randomNumber = Math.floor(Math.random()*sidesNumber) + 1;   //es lo mismo pero como lo redondea hacia abajo y para que no coja el cero le sumamos el 1
  return randomNumber;
}

console.log(`El resultado de la tirada es:` + rollDice(6));
