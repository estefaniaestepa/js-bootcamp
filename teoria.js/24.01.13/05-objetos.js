/* OBJETOS EN LOS ARRAYS

LOS ARRAYS SON ELEMENTOS QUE ESTAN IDENTIFICADOS POR INDICES
LOS OBJETOS SON ELEMENTOS QUE ESTAN IDENTIFICADOS POR CLAVES */

/* SE DECLARAN CON {} Y DENTRO SE PONE UNA CLAVE: Y SU VALOR */

const a = {
  clave: "valor",
  clave2: "val2",
  clave3: 3,
};

/* como accedemos a estos valores?
Hay dos maneras:
-Con la notacion de . (.a), porque lo que le hemos puesto dentro de las llaves es un atributo 
- Con la notacion de [''] , lo mismo que con arrays solo que aqui 'clave' es un string*/

console.log(a);
console.log(a.clave); /*nos devuelve la consola valor */

const b = 'clave';
console.log(a['b']); /* entonces el console.log lo hariamos de esta manera, extrayendo ese valor, en este caso para string se pone entre comillas*/
/* console.log(a['clave']); *//* esta notacion es muy util porque podemos obtener la clave que queramos fuera*/

const c = 'clave3';
console.log(a[c]); /* sin comillas para numeros  */


/* ---------------------------------------------------------------------------------- */

/* LAS CLAVES PUEDEN SER NUMERICAS */

const e = {
  1: 'Hola',
}

console.log(a[1]); /*se accede solo de esta manera*/


/* ---------------------------------------------------------------------------------- */

/* OBJETOS NDIMENSIONES  */

const cliente = {                /*elemto*/
  direccion: {                   /*objeto hijo */
    calle: 'Antonio lopez',      /*elemento*/
    num: 50,
    cp: 12540
  },
  nombre: 'Antonio',
  contact: {
    tel: '964532388',
    email: 'estefania.estepa@bootcamp.com',
    email: undefined /*esto podria ser undefined o null cuando email no esta definido o incluso vacio */
  },

};

console.log(cliente.direccion.calle);

console.log(cliente.contact.email); /*en el caso que quiera enviar un email al cliente*/

console.log(!!cliente.contact.email); /* una manera de comprobar por ejemplo en este caso si el email existe es con !! la doble negacion y me devuelve o TRUE O FALSE
SI NO TIENE DATOS NOS DEVUELVE TRUE QUIERE DECIR QUE NO TIENE */