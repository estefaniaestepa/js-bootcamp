/* Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

const div = document.createElement("div");                        //creas una constante que te añade un div en el documento 

for (let i = 0; i < 6 ; i++) {                                  //creamos un bucle que recorra hasta 6, para que haga lo que está dentro del bucle cada vez que lo recorre
  const parrafo = document.createElement("p");                 //creamos la p para que cada vez que haga el ciclo cree una p y suma 1 a i hasta llegar a 5
  div.append(parrafo);                                        // le decimos meter la p dentro del div que previamente hemos creado

}

document.body.append(div);                                  //incamos que me meta en el body el div con las 6 p                          