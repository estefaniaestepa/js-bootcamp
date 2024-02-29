/* Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */



const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");                                   //creamos una constamte que nos crea un elemento ul (ul = listas sin número = unordered list) // (ol = lista ordenada = ordered list)


for (let app of apps) {                                                       //creamos un bucle que recorra el array con las apps
  const li = document.createElement("li");                                // cada vez que recorre el bucle crea un nuevo li (li = los elementos de una lista tanto ordenada como desordenada)
  li.textContent = app;                                                   // añade dentro del li el elemento app que ha encontrado en la iteración 
  ul.append(li);                                                          // añade al ul el li
}

document.body.append(ul);                                                 //inserta el ul en el body del documento, después de haber recorrido el array
