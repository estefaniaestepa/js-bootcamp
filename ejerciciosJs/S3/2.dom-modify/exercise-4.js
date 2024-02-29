/* Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

const parrafo = document.createElement('p');                //creas una constante que te añade una p en el documento 
document.body.append(parrafo);                             // le indicamos que lo inserte en el body del documento

parrafo.textContent = "Soy dinámico!";                    //.textContent cambia el texto si lo hubiese y en caso que no lo crea.

console.log(parrafo);