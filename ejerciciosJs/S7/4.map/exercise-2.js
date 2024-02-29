//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


const users = [{id: 1, name: 'Abel'},                     //tenemos un array de objetos    
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'}, 
{id:4, name: 'Amanda'}];


const newName = users.map(user => {                    //creamos una nueva constante .map recibe una funcion, esa funcion recibe como parametro un elemento del array

  if (user.name.charAt(0) === 'A') {                 //.charAt(0) retorna el caracter en la posición que le especificamos( posición de la letra). ES DECIR ACCEDER AL INDICE 0, SI QUEREMOS ACCEDER AL ÚLTIMO CARACTER CON CHARAT TENEMOS QUE PONER -1
    return ' Anacleto';                             //pone la copia y modifica el nombre
  }

  return user.name;                               //retornamos el valor de user (es como la i) de los name de la constante users
  
});


console.log(newName);                          //mostramos por consola
