/*
Dibujar un triángulo de la siguiente manera:
*
**
***
****
*****
****
***
**
*
El número de asteriscos en el punto máximo es 5
*/

const pixel = '*';

for (let i =1; i < 5; i++){
console.log (pixel.repeat(i)) /*con esto construimos la primera mitad*/
}
for (let i =4; i> 1; i--){
  console.log (pixel.repeat(i)) /*con esto la segunda*/
  }

/* ---------------------------------------------------------------------------------- */

/*sin la funcion del repeat se puede hacer de la siguiente manera:

for (let i =1; i <= 5; i++){
  let linea= '';
  for (let j =1; j <= 5; j++){
  linea += '*';
}
console.log(linea);
}

for (let i =4; i >= 1; i++){
  let linea= '';
  for (let j =1; j <= i; j++){
  linea += '*';
}
console.log(linea);
}
*/

/* ---------------------------------------------------------------------------------- */

/*asi sería otra forma con un solo bucle:

for(let i=1; i<10; i++){
  console.log('*'.repeat(i <= 5 ? i : 5 -(i % 5))); 
}

aqui lo que hace de 1 a 10 repite si i es <= 5 dibuja la primera parte
si es mayor que 5 lo que hace es la resta 5 -(i % 5)
la ? es para construir la primera parte (es un operador ternario, es como meter un if)
*/