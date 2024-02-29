/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

```js
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
``` */


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.body;                                //obtener el body del documento
const ul = document.createElement('ul');                  //crear un elemento ul

for (let country of countries){                              //creamos un bucle para que recorra el array de countries
  const li = document.createElement('li');              //creamos el elemento li
  li.innerText = country;                              // le añado el texto del array al elementi li, antes de insertarlo en ul
  ul.appendChild(li);                                 // añadimos el li al ul
}


body.appendChild(ul);                               //añade el ul al elemento body
