/* En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado. */

const baseUrl = "https://api.nationalize.io?name="; //Se define la constante baseUrl, que contiene la URL base de la API de Nationalize.io.
const boton = document.querySelector("button"); //Selecciona el elemento de botón en el documento HTML.
const input = document.querySelector("input"); //Se seleccionan los elementos del DOM correspondientes al botón y al campo de entrada de texto utilizando document.querySelector()
const div = document.querySelector("div"); //Se define la constante div, que selecciona el elemento div del DOM

boton.addEventListener("click", () => {
  //evento click del botón que se activa cuando se hace clic en él - Cuando se hace clic en el botón, se ejecuta una función de flecha (arrow function).
  const name = input.value.trim(); //Obtiene el valor del campo de entrada de texto (input) y lo almacena en la variable name, eliminando los espacios en blanco al principio y al final con .trim().
  const url = baseUrl + name; //Construye la URL de la solicitud concatenando baseUrl con el nombre introducido por el usuario
  if (!name) {
    //Verifica si el campo de entrada está vacío. Si lo está, muestra un mensaje en la consola y termina la ejecución de la función.
    console.log("Por favor, introduce un nombre."); //se muestra un mensaje en la consola
    return;
  }

  fetch(url) //Realiza una solicitud GET a la URL construida utilizando fetch().
    .then((response) => response.json()) //Cuando recibe una respuesta, convierte la respuesta a formato JSON utilizando .json().
    .then((data) => {
      //Después de convertir la respuesta a JSON, accede a la información de los países dentro de los datos devueltos
      const { country } = data; //La expresión const { country } = data; es un ejemplo de destructuración en JavaScript. En este caso, data es un objeto que contiene una propiedad llamada country. Lo que hace la destructuración es extraer esa propiedad del objeto data y asignarla a una variable llamada country
      for (const contador in country) {
        //Itera sobre cada país utilizando un bucle for...in para obtener el índice del país y su información asociada
        console.log(contador);
        console.log(country[contador]);
        const objeto = {
          //Dentro del bucle for...in, crea un objeto que contiene el nombre introducido por el usuario, el nombre del país y la probabilidad de que el nombre introducido sea de ese país.
          name: name, //La línea name: name dentro del bucle for...in del evento de clic del botón, dentro del método .then() de la promesa fetch, está creando una propiedad llamada name en un objeto y asignándole el valor de la variable name.
          ciudad: country[contador].country_id, //country es un array con 5 objetos dentro y yo le cojo de la 1 el country.id
          probabilidad: country[contador].probability * 100,
        };
        array.push(objeto); //Agrega el objeto creado al array array.
      }

      print(array); //Llama a la función print() pasando el array como argumento para imprimir los resultados en el DOM.
    })
    .catch((error) => {
      //Si ocurre algún error durante la solicitud, se captura y se muestra en la consola utilizando .catch(). Esto proporciona una forma de manejar errores de red u otros problemas que puedan surgir durante la solicitud
      console.error("Ha ocurrido un error:", error);
    });
});

let array = [];
console.log(array);

function print(valorIntroducido) {
  //Se define una función llamada print que recibe un parámetro valorIntroducido. Esta función se encarga de crear párrafos <p> y botones asociados para cada objeto en el array valorIntroducido, que contiene la información de los países.
 div.innerHTML='';
  for (const objArray of valorIntroducido) {
    //Se utiliza un bucle for...of para iterar sobre cada objeto en el array valorIntroducido. Este bucle recorre cada elemento del array y ejecuta el bloque de código dentro de él una vez para cada elemento.
    const p = document.createElement("p"); //Dentro del bucle for...of, se crea un nuevo elemento <p> usando document.createElement("p"). Este elemento <p> contendrá el texto que describe la información del país correspondiente.
    p.textContent = `El nombre ${objArray.name} tiene un ${objArray.probabilidad}% de ser de ${objArray.ciudad}.`; //Se asigna el texto al párrafo recién creado utilizando la propiedad textContent. El texto se construye utilizando la información del objeto actual en la iteración del bucle.
    /*  div.appendChild(p); */ //Se añade el párrafo al contenedor <div> en el documento HTML utilizando div.appendChild(p). Esto inserta el párrafo recién creado en el DOM, haciendo que sea visible en la página web.

    const button = document.createElement("button"); //Se crea un nuevo elemento <button> para cada párrafo, que servirá como el botón "X" para eliminar el párrafo asociado.
    button.textContent = "X"; //Se establece el texto dentro del botón en "X" utilizando button.textContent = "X";.
    button.addEventListener("click", () => {
      //Se añade un evento de clic al botón utilizando button.addEventListener("click", () => { ... }). Esto significa que cuando el usuario haga clic en el botón, se ejecutará la función de flecha (arrow function) que contiene el código para eliminar el párrafo asociado.
      div.removeChild(p); //Dentro de la función de flecha que maneja el evento de clic del botón, se utiliza div.removeChild(p) para eliminar el párrafo asociado al botón clicado. p hace referencia al párrafo actual que se está creando en la iteración actual del bucle for...of.
    });
    p.appendChild(button); //el botón se añade al párrafo utilizando p.appendChild(button), y el párrafo con el botón se añade al contenedor <div> utilizando
    div.appendChild(p);
  }
}
