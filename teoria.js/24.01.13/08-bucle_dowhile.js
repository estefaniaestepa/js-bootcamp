/* LA VARIANTE HERMANA DEL WHILE ES EL DO WHILE 

DO WHILE ES UN BUCLE POR LO TANTO ITERA, EL CONTADOR LO PONEMOS NOSOTROS
La diferencia del while y do while es que yambién se va a ejecutar n veces , pero se va a ejecutar una vez mínimo
*/

let i = 0; /*ESTO ES EL CONTADOR*/

do{
console.log ('Hola');
i++;
}while ( i < 3);

/* ---------------------------------------------------------------------------------- */

/* VEREMOS UN EJEMPLO */

/* let i = 0; */

do{
console.log ('Hola');
i++;
}while ( false);

/*porque aqui la consola nos escribe una vez el Hola, si ya en la condicion le decimos que es false
con el while si indicamos false el codigo no se ejecutaria nunca, pero con el do while se iterará siemppre almenos una vez*/

/* ---------------------------------------------------------------------------------- */


/* COMO ITERAMOS UN ARRAY CON EL DO WHILE

Tenemos que tener en cuenta que minimo va haber 1 elemento
*/

const a = [1,2,3,4];

/*  let i = 0;  */ /*generamos el contador = 0 porque es desde la posicion inicial que queremos contar*/


//1 .n (se ejecuta 1 vez aunque el array este vacio)
do{
  console.log (a[i]);
  i++;
  }while (i < a.length);

  /*la diferencia con el while , es que no comprueba primero la lingitud del array .length si no que primero imprime y suma
  si por ejemplo tenemos el array vacio
  const a = []; nos va a imprimir el primer elemento a 0
  */

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

/* COMO ITERAMOS UN ARRAY MULTISIMENSIONAL CON EL DO WHILE*/

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

do{
  console.log(i, clientes[i].name);
  i++;
}while (i < clientes.length);
