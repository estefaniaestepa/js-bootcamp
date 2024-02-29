/* Inserta dinamicamente en un html un div que contenga una p con javascript. */

const div = document.createElement("div");            //creas una constante que te añade un div en el documento 
document.body.append(div);                           // le indicamos que lo inserte en el body del documento (append = adjuntar)
const p = document.createElement("p");               //creas una constante que te añade un p en el documento 
div.appendChild(p);                                 // le indicamos que lo inserte en el div que previamente hemos creado

console.log(div);                                  // que te imprima la constante que hemos creado
