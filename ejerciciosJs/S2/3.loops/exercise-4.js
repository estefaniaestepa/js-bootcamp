//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },

];


const toysFiltered = toys.filter((toy) => !toy.name.includes('gato'));   // ASÍ SERÍA COMO RESOLVERLO SIN EL CONSOLE LOG, generando una nueva constante que tenga esa iteración dentro.

console.log(toys.filter((toy) => !toy.name.includes('gato')));  
//si es true añade el valor a la lista que va a generar .filter, si es false no la añade
// .filter GENERA OTRO ARRAY DONDE GUARDA LOS DATOS QUE FILTRA

/*--------------------------------------------------------------------------------------------------*/


 //IVAN SOLUITION

const elementosAEliminar = [];                               

for (let toy of toys) {                             
  if (toy.name.includes("gato")) {                
    elementosAEliminar.push(toys.indexOf(toy));    // Si contiene gato push de toys a elementosAEliminar
  }
}
 
elementosAEliminar.reverse();                 //Revertimos el orden del array elementosAEliminar que contienen la palabra gato

for (let index of elementosAEliminar) {        //Recorremos elementosAEliminar
  toys.splice(index, 1);
}

console.log(toys);

/* ------------------------------------------------------------------------------------------------*/

const toys2 = [];

for (let i of toys) {
  if (!i.name.includes("gato")) {
    //if does not include gato = push to toys2 from i
    toys2.push(i);
  }
}

console.log(toys2);

/*--------------------------------------------------------------------------------------------------*/

for (let i of toys) {
  //ChatGPT helped a little bit
  if (i.name.includes("gato")) {
    let ohneGato = toys.indexOf(i);                         // toys.indexOF(i) encuentra la posición del primer elemento que contiene gato (3) y lo mete en ohneGato .
    toys.splice(ohneGato);                                // .splice borra de toys todo lo que contenga ohneGato (en este caso 3 que es la primera posición de gato en array toys)
  }                                                      // una vez borrada el primer elemento que contiene gato, vuelve a empezar el bucle y encuentra una segunda (4), hace el mismo
}                                                       // proceso hasta que elimina todos los elementos que contienen gato para pasar al console.log.

console.log(toys);

/*--------------------------------------------------------------------------------------------------*/

let temp = []; //Mathias solution

for (value of toys) {
  //WHEN FOR OF LOOP BETTER IF WE USE "VALUE" AS INDEX NAME SO WE CAN EASILY TELL IT IS A FOR OF LOOP.
  //CUANDO FOR OF LOOP MEJOR SI UTILIZAMOS "VALOR" COMO NOMBRE DEL ÍNDICE PARA QUE PODEMOS DECIR FÁCILMENTE QUE ES UN FOR OF LOOP.
  if (value.name.includes("gato")) {
  } else {
    temp.push(value);
  }
}

console.log(temp);

/*--------------------------------------------------------------------------------------------------*/

// SOLUCIÓN JUANMA

for (let i = toys.length = 1; i >= 0; i==) {    //iteramos la matriz en sentido inverso
if(toys[i].name.includes('gato')){              //utilizamos includes para buscar el elemento gato, iteramos en i y con eso busca todos los gatos
  toys.splice(i, 1);                           // y una vez buscados los elimina
}
}

/*--------------------------------------------------------------------------------------------------*/

//SOLUCIÓN JUANMA.2 (esta solución no es correcta del todo, porque no conserva la matriz)

const filteredToys = [];

for(const toy of toys){               
  if(!toy.name.includes('gato')){
    filteredToys.push(toy);
  }
}

toys.length = 0;
toys.push(...filteredToys);        //los ... sacan los elementos del array, los separa en variables virtuales.


/*--------------------------------------------------------------------------------------------------*/

//SOLUCIÓN ALE

console.log['"Array inicial:', toys];

let position = 0;
let elemenetsTodeLete = [];

for(let toy of toys){
  position++
  if(toy.name.includes('gato')){
    elemenetsTodeLete.push(position);
  }
}

console.log("Posiciones del array a eliminar:", elemenetsTodeLete);

for(let i = elemenetsTodeLete.length -1; i >=0; i==){         //aqui lo recorre a la inversa
  toys.splice(elemenetsTodeLete[i] - 1, 1);
}

console.log("Array actualizado:", toys);