/* Inserta dinamicamente en un html un div vacio con javascript. */

const div = document.createElement('div');       //creas una constante que te añade un div en el documento 

document.body.append(div);                      // le indicamos que lo inserte en el body del documento (append = adjuntar)

console.log(div);                              // que te imprima la constante que hemos creado