/* En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con
 la siguiente url 'https://opentdb.com/api.php?amount=10&type=multiple'.
 Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 

La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' 
le salgan las preguntas de la api para que pueda comenzar el juego. 
Una vez las responda todas, le mostraremos al usuario el resultado.

Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso.
 */

const button = document.querySelector("button");
const input = document.querySelector("input");
const divPrincipal = document.querySelector('[data-function="gameboard"]');
let contador = 0; //asigamos una variable contador para darle un número a cada conjunto de respuestas, para que sólo te permita elegir una única respuesta
let botonCheckGame = document.querySelector('[data-function="check-game"]');
let totalCorrectas = 0;
let totalIncorrectas = 0;
let respuestasCorrectas = []; //creamos un array para almacenar las respuestas correctas

const getCharacters = async () => {
  //se inicia cuando se carga la página
  try {
    /*     const responseTrivial = await fetch("https://opentdb.com/api.php?amount=10&type=multiple"); //con esto ya nos hacia una petición de 10 preguntas
    const resultTrivial = await responseTrivial.json(); */
    input.value = ""; //limpiar el contenido de la caja de texto, le asignamos un valor vacío.
    input.focus(); //cuando cargamos la página automáticamete el cursor aparece en el input.
    /*    console.log(resultTrivial); */
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", async () => {
  //se inicia cuando hacemos click
  try {
    const contenidoInput = input.value; // con el .value sacamos el contenido de la caja y se lo mandamos a la variable que que hemos creado de contenidoInput
    const url = `https://opentdb.com/api.php?amount=${contenidoInput}&type=multiple`; //el usuario integra una cantidad de preguntas y sustituimos la camtidad de preguntas. Porque al hacer la peticion a la API te devolverá la cantidad de preguntas que ingrese cada usuario
    const responseUrl = await fetch(url);
    const resultUrl = await responseUrl.json();
    const questions = resultUrl.results; //questions guarda la lista de preguntas
    const divHijosDelPrincipal = divPrincipal.querySelectorAll(".bloque-preguntas-respuestas");
    for (let hijo of divHijosDelPrincipal) {
      //saca los hijos del principal y los borra
      hijo.remove();
    }
    questionsAnswers(questions); //llamamos aqui la función dentro del click para que cuando el usuario lo ejecute aparezcan las preguntas.
    let respuestasCorrectas = ""; //guarda todas las respuestas correctas de las preguntas
    respuestasCorrectas = obtenerRespuestasCorrectas(questions); //llamamos a la funcion que nos da un valor y este valor lo guardamos en una variable y le damos la lista de preguntas.
    console.log(respuestasCorrectas);
    console.log(resultUrl);
  } catch (error) {
    console.log(error);
  }
});

const questionsAnswers = (questionsGeneral) => {
  let divPreguntas = ""; //le indicamos let y no const (porque le asignamos un valor en repetidas ocasiones
  let pRespuestas = ""; //es el parrafo el que guarda las respuestas
  let respuestaCorrecta = ""; //guarda la respuesta invidual correcta por cada pregunta
  let pRespuestasTotales = ""; //aqui guarda las 3 respuestas de cada pregunta
  let divRespuestaRadio = ""; //metemos todas las respuestas con los botones radio dentro de un div
  let botonRadioRespuesta = ""; //asigamos un boton de radio para las respuestas
  let incorrect_answers = ""; //creamos la variable de las 3 posibles respuestas

  for (let question of questionsGeneral) {
    theQuestion = question.question; //de cada cuestión accedemos a la clave question (modificamos la variable)
    divPreguntas = document.createElement("div"); //creamos un div por cada pregunta dentro del div principal
    divPreguntas.className = "bloque-preguntas-respuestas";
    divPrincipal.appendChild(divPreguntas); //.appendChild es un método y va entre parentesis
    pRespuestas = document.createElement("p");
    pRespuestas.innerText = theQuestion; //al parrafo le agregamos la pregunta
    divPreguntas.appendChild(pRespuestas); //creamos una p por cada div que esta dentro del div principal
    incorrect_answers = question.incorrect_answers; //llamamos a la variable que recorre todas las preguntas generales y de cada pregunta sacamos sus respuestas incorrectas
    respuestaCorrecta = question.correct_answer; //llamamos a la variable que recorre todas las preguntas generales y de cada pregunta sacamos sus respuestas correctas
    let posicionAleatorioaCorrecta = Math.floor(Math.random() * 3); //Math.random numeros aleatorios de 0 a 2.99 aleatorios con el Math.floor redondea hacia abajo por números enteros
    incorrect_answers[posicionAleatorioaCorrecta] = respuestaCorrecta; //en el array de incorrectas le agregamos una posición aleatoria al azar de respuestas correctas

    for (let respuesta of incorrect_answers) {
      divRespuestaRadio = document.createElement("div");
      divRespuestaRadio.className = "respuesta-radio";
      botonRadioRespuesta = document.createElement("input"); //el botón de radio es un imput
      botonRadioRespuesta.type = "radio"; //creamos el botón de radio
      botonRadioRespuesta.name = "respuesta" + contador; // esto hace que las respuestas se seccionen
      botonRadioRespuesta.className = "boton-radio";
      botonRadioRespuesta.value = respuesta; //validamos el boton y le asignamos la variable respuesta que es la que recorre cada una de las respuestas incorrectas
      pRespuestasTotales = document.createElement("p");
      pRespuestasTotales.innerText = respuesta; //con la propiedad le agregramos el texto de las respuestas a nuestra variable respuesta que itera sobre todas las respuestas.
      divRespuestaRadio.appendChild(pRespuestasTotales); //div de respuestas y boton de radio le hacemos un append dentro de las p respuestas totales
      divRespuestaRadio.appendChild(botonRadioRespuesta); //aqui le metemos los botones
      divPreguntas.appendChild(divRespuestaRadio);
    }
    contador++; //esto es lo mismo que poner contador = contador + 1; (por cada ciclo de respuestas que son 3 se incremente en 1) así sucesivamente
  }
};

const respuestasUsuario = () => {
  let respuestasDelUsuario = ""; //guarda las respuestas que eligió el usuario
  let respuestasTotales = []; //guardaremos las respuestas totales
  respuestasDelUsuario = document.querySelectorAll('[type = "radio"]'); //con esto obtenemos todos botones de radio
  for (let respuesta of respuestasDelUsuario) {
    if (respuesta.checked == true) {
      //.checked esta propiedad te dice si un botón de radio está activado(si le dieron un click), true valor buleano
      respuestasTotales.push(respuesta.value); //subimos la respuesta correcta en el array y la validamos
    }
  }
  return respuestasTotales;
};

const obtenerRespuestasCorrectas = (respuestasGeneral) => {
  for (let respuestas of respuestasGeneral) {
    respuestasCorrectas.push(respuestas.correct_answer); //le hacemos un push a nuestro array con las respuestas que recorre las respuestas correctas
  }
  return respuestasCorrectas;
};

botonCheckGame.addEventListener("click", () => {
  //le agregamos el evento click
  respuestasDelUsuario = respuestasUsuario(); //respuestas del usuario nos dice las respuestas del usuario que ha elegido
  console.log(respuestasDelUsuario);
  for (let i = 0; i < respuestasDelUsuario.length; i++) {
    //iteramos con las posiciones
    if (respuestasDelUsuario[i] == respuestasCorrectas[i]) {
      //calculamos posición por posición, suma al total de la variable llamada respuestas correctas , tanto si es incorrecta como correcta suma 1
      totalCorrectas++; //esto es lo que hace el sumatorio al total de respuestas(incorrectas o correctas)
    } else {
      totalIncorrectas++;
      document.querySelector(
        `[value = "${respuestasCorrectas[i]}"]`
      ).parentElement.firstChild.style.color = "green"; //con querySelector se obtiene el boton de radio de la respuesta correcta, despues se obtiene el padre del botón de radio .parentElement y una vez tenemos el padre obtenemos el primer hijo que es el p donde vienen el texto de la respuesta .firstChild , las respuestas correctas las marcamos en verde
    }
  }
  input.value = ""; //limpiar el contenido de la caja de texto, le asignamos un valor vacío.
  input.focus(); //cuando cargamos la página automáticamete el cursor aparece en el input.
  alert(`Correctas ${totalCorrectas} Incorrectas ${totalIncorrectas}`);
});

const init = async () => {
  getCharacters();
};

init();
