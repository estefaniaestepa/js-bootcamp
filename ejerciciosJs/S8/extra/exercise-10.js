/* Ejecuta `json-server --watch exercise-10.json` para obtener un endpoint de personajes `http://localhost:3000/characters`.

Pinta una galeria con los campos .name .image de los cinco primeros personajes. Para ello utilizaremos el endpoint con un filtro de página 
y limite de personajes de 5 por página `http://localhost:3000/characters?_page=1&_limit=5`.

Una vez pintados, crea un botón que esté situado abajo con el texto `Cargar más`. Si hacemos click en este botón hará un nuevo fetch
 a la siguiente página de personajes por lo tanto la url debería de ser la página actual + 1 `http://localhost:3000/characters?_page=2&_limit=5`.
  De esta forma obtendremos 5 personajes más que tendremos que pintar debajo de los anteriores.

La base de datos solo tiene 20 personajes así que lo ideal sería ocular el botón cuando estemos en la página 4.
 */


let divPersonajes = document.querySelector('[data-fn="characters"]');
let pagPersonajes = -1; //cada vez que le demos click (para que cuando cuando salga 0 le sume 1)
let limitePersonajes = [{ "limite<": 0, "limite>": 4 }, { "limite<": 5, "limite>": 9 }, { "limite<": 10, "limite>": 14 }, { "limite<": 15, "limite>": 19 }];//por cada click que le damos al boton cogeremos un elemento de este arreglo de objetos

const getPersonajes = async () => {
  let limiteInferior = 0, limiteSuperior = 0; //creamos dos variables en una sóla línea
  let img = "";
  let nombre = "";
  let divBloquepersonajes = "";

  try {
    const responsePersonajes = await fetch(`http://localhost:3000/characters?_page=1&_limit=20`);
    const resultPersonajes = await responsePersonajes.json();

    let boton = document.createElement('button');
    boton.innerText = "Cargar más";
    let botonRecargar = document.createElement('button');
    botonRecargar.innerText = "Recargar";

    boton.addEventListener('click', async (Event) => {
      pagPersonajes++;

      divBloquepersonajes = document.createElement('div'); //ceamos un div para cada los 5 personajes que se crean cuando le damos al botón
      divBloquepersonajes.className = "bloque-personajes";
      divBloquepersonajes.innerText = "Página " + (parseInt(pagPersonajes) + 1); //lo convertimos a número

      limiteInferior = limitePersonajes[pagPersonajes]["limite<"]; //obtenemos de una posicion expecifica del array limite de personajes, la clave de limite<
      limiteSuperior = limitePersonajes[pagPersonajes]["limite>"];
      for (let i = limiteInferior; i <= limiteSuperior; i++) {
        console.log(resultPersonajes[i]);
        img = document.createElement('img');
        nombre = document.createElement('h2');
        nombre.innerText = resultPersonajes[i].name;
        img.src = resultPersonajes[i].image;
        img.setAttribute('style', `height: 250px ; width: 280px`);

        divBloquepersonajes.appendChild(img);
        divBloquepersonajes.appendChild(nombre);
        divPersonajes.appendChild(divBloquepersonajes);//primero hijos y luego el padre
      }
      console.log("---");
      console.log(resultPersonajes);

      if (pagPersonajes == 3) {//cuenta 0 1 2 3 total 4 pag
        Event.target.remove();
      }
    });

    botonRecargar.addEventListener('click', async () => {
      window.location.href = window.location.href; //nos da la url de la pagina y se la volvemos asignar
    });

    document.body.appendChild(boton);
    document.body.appendChild(botonRecargar);

  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  getPersonajes();
}

init();