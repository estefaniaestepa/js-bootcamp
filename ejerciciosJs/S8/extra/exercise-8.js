/* <<<<<<< HEAD
Añade un evento click al botón `Call a cat` que haga una petición a `https://api.thecatapi.com/v1/images/search`. 
Pinta la imagen que recibas de la api y añade además un botón `Eliminar` que elimine la imagen del gato.

Puedes hacer click tantas veces como quieras en el botón `Call a cat`. De modo que si hago click 5 veces, pintaré 5 gatos
=======

 */


const boton = document.createElement('button');
boton.innerText = 'Call a cat';
let botonEliminar = "";
let numeroGato = 0; //cada vez que agregamos un nuevo gato sumamos a la variable

const getCharactersGato = async () => {
  let urlGato = "";
  let imgGato = "";
  let divGato = "";
  try {
    boton.addEventListener('click', async () => {
      const responseCharactersGato = await fetch("https://api.thecatapi.com/v1/images/search");
      const resultCharactersGato = await responseCharactersGato.json();
      divGato = document.createElement('div');
      numeroGato++; //sumamos uno a la variable
      divGato.id = "gato" + numeroGato; //le damos clic al boton y en div se incrementa la variable, así sucesivamente.
      urlGato = resultCharactersGato[0].url;
      imgGato = document.createElement('img');
      imgGato.src = urlGato;
      imgGato.setAttribute('style', `height: 350px ; width: 350px`);
      /*       imgGato.style.height = resultCharactersGato[0].height;
            imgGato.style.width = resultCharactersGato[0].width; */

      botonEliminar = document.createElement('button');
      botonEliminar.innerText = "Eliminar";

      botonEliminar.addEventListener('click', (event) => {
        event.target.parentElement.remove(); //event.target se refiere al botón eliminar que estamos creando - .parentElement (este es el padre) - .remove eliminamos el div(con la img)
      });
      divGato.appendChild(imgGato); //primero agregamos el hijo
      divGato.appendChild(botonEliminar);
      document.body.appendChild(divGato); // cuando ya tenemos los hijos lo agregamos al body


      console.log(urlGato);
      console.log(resultCharactersGato);

    });
    document.body.appendChild(boton);

  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  getCharactersGato();
}

window.onload = () => { //detecta cuando cargó bien la página y los controles del HTML están disponibles
  init();
}
