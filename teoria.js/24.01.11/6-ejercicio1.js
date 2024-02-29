/*Solicitará el nombre del usuario y lo guardará en una variable denominada 'nombre'
Solicitará el primer apellido al usuario y lo guardará en una variable denominada 'apellidos'
Almacenaremos n una nueva variable llamada 'fullName', el nombre y primer apellido registrado seprado por espacio
Solicitará la edad del usuario y lo guardará en una variable llamada 'edad'
Calcularemos y asignaremos a una variable 'year' el año de nacimiento del usuario (sin tener en cuenta el mes de nacimiento. Consideramos simplemente que estamos en el año 2024)
Mostrará en el cuadro de resultados del editor la siguiente informacion (una en cada linea):
- Nombre completo :(valor de la variable 'fullName')
- Año de nacimiento: (valor de la variable 'year')

PROMPT ES UNA FUNCION QUE ABRE UNA VENTANA QUE SOLICITA DATOS AL USUARIO
TODO LO QUE TE DEVUELVE PROMPT ES UN STRING, SI ESTAMOS TRABAJANDO CON NUMEROS TENDREMOS QUE HACER LA CONVERSION
*/


/* PARTE 1 */
/*Si el usuario es menor de 18 años, le saldrá, debajo de su nombre completo y año de nacimiento, el mensaje : " Eres menor de edad, no podemos darte de alta hasta el año XXXX"(XXXX será el año en que )
Si el usuario es mayor de 18 y menor de 25, le saldrá el mensaje: "Tienes un 10 % de descuento"
Si es mayor de 25 años, le saldrá el mensaje: "Premio, tienes un descuento del 20%"
Si introduce mal la edad (registra por ejemplo la edad en la palabras en vez de numeros): le saldrá un mensaje : "Hay un error, no hemos podido calcular tu edad" En el año de naciemiento saldrá: "no puede calcularse"*/


const name = prompt('Nombre');
const surname = prompt('Apellido1');

const fullName = name + " " + surname; /* OTRA FORMA DE HACERLO : const fullName = `${name} ${surname}`;    ESTA MANERA ES MAS LEGIBLE*/

let age = prompt('Edad');  /*AQUI HEMOS CAMBIADO EL CONST A LET PORQUE ESTAMOS CAMBIANDO EL STRING A NUMERO*/
const year = 2024 - age; /*CUADO LE PONGAMOS LA EDAD LA CONSOLA TE HABRÁ CALCULADO EN QUE AÑO HAS NACIDO*/
/*age= Number parseInt =(age);        ESTO ES LA SEGUNDA FORMA DE SOLUCIONARLO, LO QUE HACE ES PARSEAR ESE NUMERO A UN NUMERO ENTERO*/


console.log("Nombre completo:" , fullName);
console.log("Año de nacimiento:" , year);
console.log (typeof age); /*hemos puesto esto porque nos daba un erro para ver que tipo es y nos sale que es un string, porque prompt te devuelve string*/
 /*esto se puede solucionar de dos maneras quitar los === para que no sea completamente estricto o llamando a la variable y poniendole Number parseInt */

 /* ---------------------------------------------------------------------------------- */

/* PARTE 2 */


if ( age < 18){
  const year2 = 18 - year + 2024;     /* (18 - year nos dará los años que le quedan para cumplir 18, más el año actual) */
  console.log(`Eres menor de edad, no podemos darte de alta hasta el año ${year2}`);
}else if ( age > 18 && age < 25){  
  console.log("Tienes un 10 % de descuento");
}else if (age > 25){
  console.log("Premio, tienes un descuento (por viejo)");
}else if (age == 18 || age == 25){    /* (age === 18 || age === 25)lo hemos quitado porque daba error, */
  console.log("Premio, tienes un descuento del 20%");
}else{
  console.log("Hay un error, no hemos podido calcular tu edad");
}