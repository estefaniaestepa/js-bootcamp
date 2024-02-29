const main$$ = document.querySelector(".main"); //PADRE SUPREMO

const getCharacters = async () => {
  try {
    const responseApi = await fetch(
      "https://hp-api.onrender.com/api/characters"
    );
    const resultApi = await responseApi.json();

    return resultApi;
  } catch (fail) {
  console.log(fail); 
  }
};
const mapCharacters = (personSinMapear) => {

  return personSinMapear.map((characterPerson) => ({
    nombre: characterPerson.name,
    raza: characterPerson.species,
    casa: characterPerson.house,
    nacimiento: characterPerson.yearOfBirth,
    imagen: characterPerson.image,

  }));
};
const drawCharacters = (characters) => {
  main$$.innerHTML = "";

  for (const character of characters) {
    let charactersDiv$$ = document.createElement("div");
    charactersDiv$$.className = "main_div";
    charactersDiv$$.innerHTML = `
      <h2>${character.nombre}</h2> 
      <p>${character.raza}</p> 
      <p>${character.casa}</p>
      <p>${character.nacimiento}</p>
      <img src="${character.imagen}" alt="${character.nombre}"> 
    `;
    main$$.appendChild(charactersDiv$$);
  }
};
const drawInput = (characters) => {                        
  const input$$ = document.querySelector("input");       
  input$$.addEventListener("input", () => {            
    searchCharacters(input$$.value, characters);      
  });
};
const searchCharacters = (filtro, arraySinFiltrar) => {           
  let filteredCharacters = arraySinFiltrar.filter((character) =>   
    character.nombre.toLowerCase().includes(filtro.toLowerCase())  
  );
  drawCharacters(filteredCharacters)                             
  
};

const init = async () => {

const charactersPotter = await getCharacters ();    //espere cuando se inicie la funcion
const personMapeados = mapCharacters(charactersPotter);
drawCharacters(personMapeados);
drawInput(personMapeados);
};
init ();