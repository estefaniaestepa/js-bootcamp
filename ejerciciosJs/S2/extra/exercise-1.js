/* Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`. */

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {title: "Solo en Whatsapp",duration: 223,categories: ["comedia", "thriller"],},
  {title: "El gato con guantes",duration: 111,categories: ["comedia", "aventura", "animación"]},
];


const categoriasUnicas = [];                     // Array para almacenar categorías únicas


for (let i of movies) {                         // Utilizando un bucle for...of para recorrer el array de películas                  

  for (let j of i.categories) {                // Utilizando un bucle for...of para recorrer las categorías de cada película
 
    if (!categoriasUnicas.includes(j)) {      // Verificando si la categoría ya está en el array categoriasUnicas  //invierte el resultado a false y si no está lo sube con un push
      categoriasUnicas.push(j);              // incluye las que no están 
    }
  }
}


console.log(categoriasUnicas);