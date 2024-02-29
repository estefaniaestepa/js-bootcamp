/* BUCLES

WHILE ES UN BUCLE POR LO TANTO ITERA, EL CONTADOR LO PONEMOS NOSOTROS
LOS BUCLES SIRVEN PARA ITERAR PARA DAR VUELTAS , PARA EJECUTAR EL MISMO CODIGO UN NUMERO DETERMINADO DE VECES  */

let i = 0; /*ESTO ES EL CONTADOR*/

while (i > 3){ /*esto de aqui es la condicion en la que para podemos parar cuando lleguemos a 3 o podemos parar cuando sea distinto de 3*/
  console.log ('Hola');
  i++;
}

 /*aqui en este caso ejecutamos el codigo 3 veces Hola Hola Hola */

 /* ---------------------------------------------------------------------------------- */
 
 while (i !== 3){ /*si es distinto de 3*/
  console.log ('Hola');
  i++;
}/* ++i; si hicieramos esto ejecutariamos 3 veces tambien, porque cuando llega al 3 el 3 es distinto de*/

/* ---------------------------------------------------------------------------------- */

while (i <= 3){ /*menor o igual*/
console.log ('Hola');
i++;
} /*aqui se ejecuta 4 veces */

/* ---------------------------------------------------------------------------------- */

while (true){
console.log ('Hola');
break /* para que parase le tendriamos que añadir esta condicion de break, esta instruccion se suele usar */
} /*aqui en este caso la aplicacion no pararia nunca seria infinito, porque no tenemos ninguna condicion de parada */

/* ---------------------------------------------------------------------------------- */

while (true){
  console.log ('Hola');
  i++;

  if(i === 3){
    break /*para cuando llega a 3*/
  }

}


/* ---------------------------------------------------------------------------------- */

/* COMO ITERAMOS UN ARRAY CON EL WHILE*/

const a = [1,2,3,4];

/* let i = 0; */ /*generamos el contador = 0 porque es desde la posicion inicial que queremos contar*/


//0 .n (si el array esta vacio no se ejecuta)

while(i < a.length){ /*si i es menor al numero de elementos que tiene mi array*/
  console.log (a[i]); /*imprime la posicion*/
  i++; /*sumale 1*/
}


/* virtualmente haria esto:

a[0];
0 + 1= 1
1 < 4 ->si
a[1];
1 + 1= 2
2 < 4 ->si
a[2];
2 + 1= 3
1 < 4 ->si
a[3];
4 + 1= 4
4 < 4 ->no Paramos bucle */


/* ---------------------------------------------------------------------------------- */

/* COMO ITERAMOS UN ARRAY MULTISIMENSIONAL CON EL WHILE*/

const b = [
  [1,2,3,4],
  [5,6,7,8],
];

while(i < a.length){ 
  console.log (a[i]); /*aqui nos imprime directamente los dos arrays */
  i++; 
}

/* ---------------------------------------------------------------------------------- */
/*si queremos iterar dentro del bucle porque tiene dos niveles, normalmente sacaremos a 1 la referencia y se genera un nuevo contador , solo para este
VEAMOS UN EJEMPLO 

const a = [
  [1,2,3,4],
  [5,6,7,8],
];

while(i < a.length){
  let j= 0; //GENERAMOS UN CONTADOR SOLO PARA ESTE SIEMPRE SE DECLARA DENTRO

while(j < a[i].length){
  console.log (a[i][j]);
  j++;
}
  i++; 
}
  

(I) ES LA POSICION DE LOS ARRAYS Y (J) ES CADA UNO DE LOS ELEMENTOS QUE TIENE NUESTRO ARRAY
DE ESTA MANERA EN LA CONSOLA YA NO IMPIRME LOS ARRAYS SI NO LOS EMLEMENTOS, LOS NUMEROS QUE TIENE EL ARRAY
*/

/* ---------------------------------------------------------------------------------- */

/* EJEMPLO 2 (LISTADO DE CLIENTES) */

const clientes = [
  {
    name: 'Manuel',
  },
{
  name: 'Juan',
}
];

/* let i = 0; */

console.log ('Listado de clientes');

while(i < clientes.length){
  console.log(i, clientes[i].name);
  i++;
}