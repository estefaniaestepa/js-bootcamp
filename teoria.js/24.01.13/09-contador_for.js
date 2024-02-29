/* BUCLE FOR

DIFERENCIA ENTRE WHILE Y FOR (WHILE CUANDO NO NECESITAMOS UN CONTADOR)

FOR TIENE LA CARACTERISTICA QUE PUEDES METER LOS ELEMENTOS DE CONTADOR Y CONDICION DENTRO
(FOR GENERALMENTE ES UN CONTADOR)

ESTA COMPUESTO DE 3 PARTES SIEMPRE VAN SEPARADAS POR ;  :
-LA DECLARACION DE LAS VARIABLES INICIALES CONTADORAS, EL CONTADOR . POR ESTANDAR SE USA i, j , k
- LA CONDICION DE PARADA 
-LA SUMA , EL CONTADOR

TODO APARECE EN UNA LINEA , EL FOR SE USA PARA ITERAR DE FORMA NUMERICA DE UN SITIO A OTRO (de un numero a otro)
*/

for(let i= 0; i < 3; i++){
  console.log('Hola');
}


/* ---------------------------------------------------------------------------------- */

/* COMO ITERAMOS UN ARRAY CON EL FOR*/

const a = [1,2,3,4];

for(let i= 0; i < a.length; i++){ /*contador, condiciom, contador*/
  console.log(a[i]);
}

/* ---------------------------------------------------------------------------------- */

/* COMO ITERAMOS UN ARRAY MULTISIMENSIONAL CON EL FOR*/

const clientes = [
  {
    name: 'Manuel',
  },
{
  name: 'Juan',
}
];

/* let i = 0; */

for(let i= 0; i < clientes.length; i++){
  console.log(i, clientes[i].name);
}

/* ---------------------------------------------------------------------------------- */

/* SUPONGAMOS QUE ESTAMOS EN EL CASO QUE QUEREMOS HACER UN MAXIMO DE 3 LLAMADADAS AL CLIENTE QUEDARIA DE LA SIGUIENTE MANERA

for(let i= 0; i < 3; i++){
  console.log(i, clientes[i].name);

  if (llamadaOk){
    break;  DE ESTA MANERA ROMPE EL BUCLE Y NO SIGUE
  }
}

/* ---------------------------------------------------------------------------------- */

/* HAY OTRA INSTACIA QUE SIRVA PARA SALTARSE UNA ITERACION
POR EJEMPLO NO QUEREMOS QUE NOS IMPRIMA X CLIENTE

for(let i= 0; i < clientes.length; i++){

  if (clientes[i].name === 'Juan'){
   continue;  //ESTO ES UNA INSTANCIA QUE INDICA CONTINUA CON EL SIGUIENTE ELEMENTO, NO EJECUTES ESTO Y SALTA EL SIGUIENTE ELEMENTO. NORMALEMENTE ESTO SE HACE CON ELEMENTOS NUMERICOS
  }
}

*/ 

