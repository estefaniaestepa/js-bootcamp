
// CONTENIDO de una API (normalmente)

//assets -- guarda imagenes
// index.html
// style.css
// script.js

// $$ --> nos dice que está haciendo referencia al html linkeado.
const main$$ = document.querySelector(".main");

// Una función es asíncrona cuando necesita esperar para tomar la acción



// ------------ CREAMOS LA FUNCIÓN QUE ENVIA PETICIÓN A LA API -------------------
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ESTA FORMULA ES RARA DE USAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// En esta función los resultados almacenados en results SOLO EXISTEN DENTRO DE ESTE ÁMBITO -----------

const getCharacters = () => {
    fetch("https://starwars-server.vercel.app/characters") // hacemos la petición a la API y esperamos respuesta, fetch siempre necesita un rato para hacer la petición y recivir respuesta.
    .then((response /*lo que recive*/)=> response.json()) // cuando termines arriba coge la respuesta y la conviertes en .json para que sea leíble. El navegador normalmente entiende respuestas json. Todo esto necesita un tiempo de ejecución, por eso añadimos otro .then.  
    .then((results)=> console.log(results)) // cuando tengas los datos guardados en response, metelos en result y muestralos por consola. Aquí nos muestra un array con todos los personajes recividos de la API

    // .then le dice que quando termine la petición anterior haga lo siguiente, pero solo cuando haya terminado.
    // .then === await // esperan a que la última orden esté TERMINADA para empezar la siguiente
}  
getCharacters() // Llamamos a la función que llama a la API





// ------------ MEJOR FORMA DE GENERAR LA FUNCIÓN PARA LLAMAR A LA API -------------------
// Aquí guardamos los datos que nos da la API dentro de constantes para así poder usarlos mas tarde fuera del ámbito en el que se encuentran. 

const getCharacters2 = async () => {
    const response = await fetch("https://starwars-server.vercel.app/characters"); // espera a terminar la petición a la API y guarda los datos en response
    const results = await response.json(); // coge los datos de const response, espera a que terminen de convertirse en json y guardalos en results. 
    console.log(results); // muestra por consola los datos json guardados en results
}
getCharacters2() // Llamamos a la función que llama a la API





// ------- LO IDEAL EN TEMAS DE PETICIONES ES TENER UN TRY AND CATCH --------------

const getCharacters3 = async () => {
    try { // oye, intenta esto
      const response = await fetch(
        "https://starwars-server.vercel.app/characters"
      );
      const results = await response.json();
      //const {data} = await response.json(); //hacemos esto para desestructurar el objeto data y retornar data.characters en lugar de results.data.characters;

      return results.data.characters;  // si FUNCIONA, le pedimos que nos devuelva el array limpio
      // tenemos que meter un RETURN para que podamos usar estos datos invocando la función en otra parte, si no los retorna no salen de ella.  

    } catch (error) { // si NO FUNCIONA imprime el error por consola
      console.log(error);
    }
  };

// Nos interesa mandarle un ARRAY en lugar de un OBJETO porque el ARRAY es ITERABLE.





// ------------------------ FUNCIÓN DE MAPEO -----------------------------------
// recorre todos los elementos y seleciona los que les dices

const mapCharacters = (charactersSinMapear) => {
    console.log ("funcion map".charactersSinMapear); // comprovación de si hemos pasado los personajes aquí
    const charactersMapeados = charactersSinMapear.map((character) => ({ // charactersSinMapear es el basurero y le decimos que entre en character, haga un .map y lo meta dentro de un objeto. 
        nombre: character.name, // le decimos que nos interesa de character y le cambiamos la propiedad
        imagen: character.image, // le decimos que nos interesa de character y le cambiamos la propiedad
        rol: character.role, // le decimos que nos interesa de character y le cambiamos la propiedad

    }))
    return charactersMapeados 
    console.log(charactersMapeados);
};

// ............... Podemos evitar crear la variable de charactersMapeados ya que solo la vamos a usar para hacer el mapeo, no vamos a usar lo que contiene nunca mas, así que podemos hacer esto: .....................

const mapCharacters1 = (charactersSinMapear) => {
    return charactersSinMapear.map((character) => ({ // saltarnos la creación de la variable y pedirle que directamente nos retorne lo que le pedimos sin necesidad de almacenarlo en ningún lado ya que no lo vamos a usar para otras cosas.
      nombre: character.name,
      imagen: character.image,
      rol: character.role,
    }));
  };



// ---------------------- FUNCIÓN DRAW -------------------------------------------

const drawCharacters = (characters) => {
    main$$.innerHTML = ""; // aquí le decimos que cada vez que se ejecute la función drawCharacters vacíe el main$$ para que no se bugguee todo con la basura de los basureros y el filtro. Ver = searchCharacters. Creamos un filtro que filtre por el valor del input del html los nombres que contienen las letras que nos da el usuario, si no vacíamos el main inicial nos añade encima de lo que ya tiene lo que el filtro filtra. Entendemos? Pues no mucho. Básicamente es que el camión de la basura tiene que vacíar el container para que el basurero pueda seguir reciclando, sino se le mezcla todo.
    for (const character of characters) { // creamos un bucle para que recorra el array (characters (plaza mayor))
        let characterDiv$$ = document.createElement("div"); // por cada uno de ellos vamos a crear una cajita en html que va ir dentro del mail
        characterDiv$$.className = "main__div";
        main$$.appendChild(characterDiv$$); // le decimos a main que le vamos a hacer un hijo precioso y se va a llamar characterDiv$$ y contendrá lo que tenga
        
        let h2$$ = document.createElement("h2"); // vamos a crear un h2 para cada elemento
        h2$$.textContent = character.nombre; // le vamos a meter el nombre del character como texto
        characterDiv$$.appendChild(h2$$); // le decimos al hijo del main en este caso characterDiv$$ que le vamos a hacer un hijo precioso que se va a llamar h2$$ y contendrá lo que tenga

        let img$$ = document.createElement("img"); // creamos un contenedor de imagen
        img$$.setAttribute("src", character.imagen); // le ponemos sus atributos
        img$$.setAttribute("alt", character.nombre);
        characterDiv$$.appendChild(img$$); // hacemos el hijo al characterDiv$$ que se va a llamar img$$ y contenga la imagen de character.imagen

        let p$$ = document.createElement("p");
        p$$.textContent= character.rol;
        characterDiv$$.appendChild(p$$);
    }
}

// ............... OTRA FORMA DE HACERLO ....................................

const drawCharacters1 = (characters) => {
    main$$.innerHTML = ""; // aquí le decimos que cada vez que se ejecute la función drawCharacters vacíe el main$$ para que no se bugguee todo con la basura de los basureros y el filtro. Ver = searchCharacters. Creamos un filtro que filtre por el valor del input del html los nombres que contienen las letras que nos da el usuario, si no vacíamos el main inicial nos añade encima de lo que ya tiene lo que el filtro filtra. Entendemos? Pues no mucho. Básicamente es que el camión de la basura tiene que vacíar el container para que el basurero pueda seguir reciclando, sino se le mezcla todo.
    // LO RECOMENDABLE ES CREAR LA ESTRUCTURA QUE QUEREMOS METER CON EL .INNERHTML DIRECTAMENTE EN HTML, UNA VEZ LA TENGAMOS LO METEMOS DENTRO DE JS
    for (const character of characters) {
        let characterDiv$$ = document.createElement("div");
        characterDiv$$.className = "main__div";
        characterDiv$$.innerHTML = ` // AQUÍ METEMOS A PIÑÓN LO QUE HAY ABAJO DENTRO DEL DIV CON .INNERHTML
        <h3>${character.nombre}</h3>
        <img src="${character.imagen}" alt="${character.nombre}">
        <p>${character.rol}</p>
        `;
        main$$.appendChild(characterDiv$$);
    }
};





// --------------------------- BUSCADOR INPUT ----------------------------
// vamos a crear el input manualmente en html para que se cargue al principio de la aplicación, si lo metemos con JS se va a cargar después del html.


const drawInput = (characters) => { // recive characters
    const input$$ = document.querySelector("input");
    input$$.addEventListener("input", () => { // le metemos un eventlistener para que escuche la interación con el usuario y active el siguiente código cuando lo escuche. Le decimos que cuando escuche un input ejecute lo siguiente
        searchCharacters(input$$.value, characters); // le damos el campo por el que va a buscar, osea el valor introducido en el imput del html y con lo que tiene que compararlo que es characters. !! el valor de este imput solo existe aquí!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    });
};

const searchCharacters = (filtro, arraySinFiltrar) => { // esto es el filtro que va a usar drawInput para el input, así que necesitamos meterle como parámetro. El barrendero en prácticas arraySinFiltar es ascendido a ser filtrador de residuos, la basura está toda mezclada dentro de character y el la va a seleccionar con las instrucciones que le demos. 
    let filteredCharacters = arraySinFiltrar.filter((character) => 
    character.nombre.toLowerCase().include(filtro.toLowerCase()) // el jefe aquí es searchCharacters que recive el valor del input de html, entonces coge al barrendero en practicas arraySinFiltrar y lo manda a selecionar basura, luego coge a filtro y le dice oye mamón, dile al novato en prácticas como queremos reciclar. Osea que el jefe grande searchCaracters recive ordenes de Dios por input$$, pasa las ordenes al filtro y este las pasa a arraySinFiltrar que es la última mierda de la empresa. 
    // Hay que ponerle el lowerCase porque sino se estresan los señoritos y si la basura no está triturada pues se bugean con los trozos grandes y no progresan adequadamente, que son delicados los niños.
    );
    drawCharacters(filteredCharacters); // nuestros sucios basureros han guardado la basura seleccionada en filteredCharacters y para que nuestro artista drawCharacters la dibuje a medida que la van selecionando. 
}

() => {} // es una función recursiva. se ejecuta solamente cuando el usuario interacciona con el botón, sino pasa de largo. o cuando la propiedad de la función padre pues se cumpla, es como un if pero en funciones







// --------------------------- HOJA DE RUTA --------------------------------------
// Hoja de ruta == lo que queremos que haga la aplicación según empieza, crear una función init con todo lo que queremos que haga de primeras cuando la invocamos.  Podemos meterle dentro la llamada a otras funciones etc. Nos ayuda a mantener el código limpio y ordenado. 

const init = async () => {
    // 1. Primero le digo que espero a mi petición que es digamos la linea importante
    const characters = await getCharacters(); // le pedimos los datos que RETORNA getCharacters() pero poniendo un AWAIT porque getCharacters() necesita su tiempo. 

    // 2. Segundo mapeo mis personajes pasandole a la función como parámetro lo que tiene que mapear, en este caso characters que es el resultado de la función getCharacters ()
    const charactersMapeados = mapCharacters(characters); // ya tenemos el array y queremos pintar, imaginamos que const characters es un objeto gigante y no queremos todas sus propiedades, solo las qu enos interesan. Nos interesa recorrer todas las propiedades del array para coger solo las que queremos y eso lo hacemos con el map. Porque mapea todo lo que contiene.

    // 3. Tercer lugar vamos a llamar a la función pintar y le pasaremos por parámetro lo que queremos que pinte(lo que queremos que muestre, que use, que imprima) en este caso charactersMapeados. 
    drawCharacters(charactersMapeados);

    // 4. Cuarto, vamos a llamar la función draw input que me coge mi input y los characters mapeados que es lo que utilizará luego para filtrar. PARA LOS MEROS MORTALES COMO YO, ESTO ES UN BUSCADOR (metemos un imput en html a mano)
    drawInput()
};
init(); //Llamamos a la función init




// Como nos quedamos con el resultado de una función???? CON EL RETURN

// Porque nos interesa el map y no el filter? Porque necesitamos mapear los personajes, recorrer todos ellos y darles la estructura que nos da la gana. Seleccionar aquello que queremos usar y no todo lo que contiene.







