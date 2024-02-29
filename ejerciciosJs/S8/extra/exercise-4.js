/* Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos `json-server --watch exercise-4.json`. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y,que si el usuario hace click en alguno de los planetas, 
 salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name.
  Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo `http://localhost:3000/characters?idPlanet=1` 
  y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
Además de esto, agrega un buscador para poder filtrar los personajes por nombre una vez que has seleccionado el planeta. 
Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

Como extra podríamos hacer que si haces click a un personaje salga la descripción debajo. 
Como extra del extra haz que la descripción se oculte si vuelves a hacer click en el mismo personaje. */

const planetsContainer = document.querySelector('[data-function="planets"]');
const charactersContainer = document.querySelector(
  '[data-function="characters"]'
);
const planetsSearch = document.querySelector('[data-function="search"]');

const getCharacters = async () => {
  try {
    const responseCharacters = await fetch("http://localhost:3000/characters");
    const resultCharacters = await responseCharacters.json();

    return resultCharacters;
  } catch (error) {
    console.log(error);
  }
};

const getPlanets = async () => {
  try {
    const responsePlanets = await fetch("http://localhost:3000/planets");
    const resultPlanets = await responsePlanets.json();

    return resultPlanets;
  } catch (error) {
    console.log(error);
  }
};

const drawCharacters = (characters) => {
  charactersContainer.innerHTML = "";
  for (let character of characters) {
    const characterDiv = document.createElement("div");
    characterDiv.className = "character";
    const characterImg = document.createElement("img");
    characterImg.src = character.avatar;
    const characterH2 = document.createElement("h2");
    characterH2.textContent = character.name;
    const characterP = document.createElement("p");
    characterP.textContent = character.name;

    charactersContainer.appendChild(characterDiv);
    characterDiv.appendChild(characterH2);
    characterDiv.appendChild(characterImg);
    characterDiv.appendChild(characterP);
    console.log(`personajes a dibujar ${characters}`);
  }
};

const searchCharacters = (charactersArray) => {
  planetsSearch.innerHTML = "";
  const searchDiv = document.createElement("div");
  const searchInput = document.createElement("input");
  planetsSearch.appendChild(searchDiv);
  searchDiv.appendChild(searchInput);
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Buscar personaje por nombre");
  searchInput.addEventListener("input", (event) => {
    /*    filterCharactersByName(event.target.value); */
    filterCharactersByName(searchInput.value, charactersArray);
  });
};

const filterCharactersByName = (name, resultCharacters) => {
  //valor(name), lista de personajes (resultCharacters = array)
  //la funcion recibe el parametro name, que es el nombre por el que queremos filtrar
  const filteredCharacters = resultCharacters.filter((character) =>
    character.name.toLowerCase().includes(name.toLowerCase())
  ); //esto hace que permita hacer búsquedas sin importar que trenga mayúsculas o minusculas
  drawCharacters(filteredCharacters); //se muestran los personajes a medida que escribimos
};

const drawPlanets = (planeta, charactersArray) => {
  //valor(planeta), lista de personajes (charactersArray = array)
  for (let planet of planeta) {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    const planetImg = document.createElement("img");
    planetImg.src = planet.image;
    const planetH2 = document.createElement("h2");
    planetH2.textContent = planet.name;

    planetsContainer.appendChild(planetDiv);
    planetDiv.appendChild(planetH2);
    planetDiv.appendChild(planetImg);

    planetDiv.addEventListener("click", () => {
      filterCharactersByPlanet(planet.id, charactersArray);
      console.log(`planetas seleccionado ${planeta} ${charactersArray}`);
    });
  }
};

function filterCharactersByPlanet(planetId, resultCharacters) {
  const charactersOnPlanet = resultCharacters.filter(
    (character) => character.idPlanet == planetId
  );
  drawCharacters(charactersOnPlanet);
}

const init = async () => {
  const characters = await getCharacters(); //funciones definidas que funcionan por si solas, sin necesidad de parámetros
  const planets = await getPlanets();
  drawCharacters(characters);
  drawPlanets(planets, characters); //planet + array personajes
  searchCharacters(characters);
};

init();
