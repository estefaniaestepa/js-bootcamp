const main$$ = document.querySelector(".main");                                         //$$ hace referencia a cualquier nodo , algun elemento al que hace referencia o vamos a crear de HTML. Es una variable que esta siendo atacada dentro de nuestro HTML
// console.log(main$$);                                                                //getCharacters es una petición asincrona , es una función que necesita esperar para tomar la accion
const getCharacters = async () => {
  //  fetch("https://starwars-server.vercel.app/characters")
  //  .then((response)=>response.json())
  //  .then((results)=> console.log(results))
  try {                                                                              //Lo ideal en tema de peticiones es tener un TRY and Catch, En el TRY le decimos oye intenta vamos a probar hacer una peticion a la epi  //la constante respuesta espera hacer la peticion a la API
    const response = await fetch(                                                   //const response: es la que gaurda la peticion a la API y el await le indica que se espere a terminar la petión. Contiene los datos de la API
      "https://starwars-server.vercel.app/characters"                              // llamamos a la api
    );
    const results = await response.json();                                       //const result: le decimos esperate a tener estos datos convertidos a JSON. 
    // const {data} = await response.json();
    //console.log(results);   //muestra todos los datos de JSON guardados en result
    // console.log(data);
    return results.data.characters;                                          //si funciona devuelve el retun, retorname lo que contiene resultados . Nos interesa mandarle un array porque es iterable y podemos trabajar con todos a la vez
  } catch (error) {                                                         //si no funciona impirme el error por consola, el error es el catch
    console.log(error);                                                    //imprime el error
  }
};
const mapCharacters = (charactersSinMapear) => {                        //funcion de mapeo con esto cogemos todas las propiedades del array para coger sólo las que queremos    //charactersSinMapear es la i          
  // console.log("funcion map",charactersSinMapear);
  // const charactersMapeados = charactersSinMapear.map((character)=> ({
  //    nombre: character.name,
  //    imagen: character.image,
  //    rol: character.role
  // }))
  // return charactersMapeados

  return charactersSinMapear.map((character) => ({                 //mapeamos y tenemos un array de objetos
    nombre: character.name,                                       //ponemos la propiedad que queremos y la buscamos dentro de la propiedad. Con el .map hacemos un array de cada uno de nuestros objetos
    imagen: character.image,
    rol: character.role,
  }));
};
const drawCharacters = (characters) => {
   main$$.innerHTML = "";                                         //EL .innerHTML SIRVE PARA METER UN TROZO DE CÓDIGO DENTRO DE NUESTRO HTML. CADA VEZ QUE SE EJECUTE EL main$$ HAGA UN .innerHTML DE VACIO = ""; ( ES DECIR VACIA EL DIV Y LO LLENA DEL CONTENIDO QUE QUEREMOS CUANDO HACEMOS EL FILTRADO EN EL INPUT)
  // console.log("funcion draw",characters);
  for (const character of characters) {                          //for of sólo recorre el array
    // console.log(character);
    // let characterDiv$$ = document.createElement("div") -------creamos div en HTML dentro del main
    // characterDiv$$.className="main__div"   -------------------esto es la clase que creamos del div, para luego enmaquetar. Esto es la clase que le hemos dado al div main__div
    // main$$.appendChild(characterDiv$$);  ---------------------lo metemos en el main y el hijo es el div

    // let h2$$ = document.createElement("h2")
    // h2$$.textContent = character.nombre---------------------recibe text content que es un string. Recibe el nombre de nuestro array
    // characterDiv$$.appendChild(h2$$)------------------------el hijo del div es este h2 que hemos creado

    // let img$$ = document.createElement("img")
    // img$$.setAttribute("src", character.imagen)------------le ponemos src que es la ruta de la imagen
    // img$$.setAttribute("alt", character.nombre)------------un alto de la img
    // characterDiv$$.appendChild(img$$)----------------------hijo del div

    // let p$$ = document.createElement("p")
    // p$$.textContent= character.rol------------------------recibe text content que es un string
    // characterDiv$$.appendChild(p$$)-----------------------hijo del div

    let characterDiv$$ = document.createElement("div");            //CREAMOS UN DIV QUE ES LA CAJA QUE LE VAMOS A METER AL MAIN
    characterDiv$$.className = "main__div";
    characterDiv$$.innerHTML = `                                  //LE APLICAMOS DIRECTAMENTE UN .innerHTML
    <h3>${character.nombre}</h3>                                 //CREAMOS LA ESTRUCCTURA PARA NO EQUIVOCARNOS EN NUESTRO HTML CORTAMOS Y PEGAMOS AQUI
    <img src="${character.imagen}" alt="${character.nombre}">   //LE PONEMOS EL $ A LAS VARIABLES PARA LLAMARLAS
    <p>${character.rol}</p>
    `;
    main$$.appendChild(characterDiv$$);                      //LE METEMEOS AL MAIN EL LOS NODOS QUE HEMOS CREADO
  }
};
const drawInput = (characters) => {                        //CREAMOS UN BUSCADOR EN HTML A MANO EN EL BODY. EN JS CREAMOS UNA CONSTANTE DEL INPUT RECIBE LOS PERSONAJES
  // console.log("funcion draw",characters);
  const input$$ = document.querySelector("input");       //.querySelector PARA SELECCIONAR EN NUESTRO HTML
  input$$.addEventListener("input", () => {             //.addEventListener EL QUE ESCUCHA EL EVENTO Y LE CREAMOS UNA FUNCION . "input" ESTO ES DINAMICO ACTUA CADA VEZ QUE VAMOS ESCRIBIENDO
    searchCharacters(input$$.value, characters);       //searchCharacters ESTA FUNCION SOLO SE EJECUTA CADA VEZ QUE USAMOS EL INPUT. NECESITA EL PARAMETRO DE VALOR Y EL PARAMETRO DEL ARRAY LOS PERSONAJES CON EL NOMBRE
  });
};
const searchCharacters = (filtro, arraySinFiltrar) => {             //CREANOS UNA FUNCION PARA QUE FILTRE LO QUE ESCRIBAMOS EN EL INPUT, RECIBE UN FILTRO Y UN ARRAY SIN FILTRAR
    // console.log("search",filtro,searchCharacters);
  let filteredCharacters = arraySinFiltrar.filter((character) =>   //CREAMOS UNA VARIABLE DE FILTERED Y QUEREMOS QUE RECORRE arraySinFiltrar Y LE PONEMOS LA FUNCION .filter(que filtre sobre el array de los personajes CHACARTERS)
    character.nombre.toLowerCase().includes(filtro.toLowerCase())  //QUEREMOS QUE LA FUNCION ES DECIRLE AL ARRAY.NOMBRE .toLowerCase() PARA QUE NO NOS DE ERROR AL ESCRIBIR CONVIERTE EN MAYUSCULA Y SI INCLUYE TAMBIEN EL FILTRO EN MAYUSCULAS 
  );
  drawCharacters(filteredCharacters)                              //LLAMOS A LA FUNCION Y BORRA TODOS LOS QUE NO CUMPLAN LAS REGLAS DEL FILTRADO, OSEA QUE PINTE SOLO LOS QUE ESTÉN FILTRADOS
  
};

const init = async () => {                        //--------------- en la función init tenemos el array
  // primero le digo que espero a mi peticion que es digamos la linea importante
  const characters = await getCharacters();     //-----------await esperate y necesitamos que la convierta en asincrona ---CHARACTER SON LOS PERSONAJES DE NUESTRO ARRAY
  //   console.log("funcion init",characters);  -----------
  //  segundo mapeo mis personajes pasandole a la funcion nuestros characters de la linea 24
  const charactersMapeados = mapCharacters(characters);
  //   console.log("funcion init despues del map", charactersMapeados);
  // tercer lugar vamos a llamar a mi funcion pintar y le pasaremos por parametro lo que queremos que pinte
  drawCharacters(charactersMapeados);
  //   vamos a llamar la funcion draw input que me coge mi input, y va a coger a mis character mapeados que es lo que utilizara luego para filtrar
  drawInput(charactersMapeados);
};
init();