/* # Descripción

En este ejercicio vamos a simular una batalla de rol, con dados y estadísticas por doquier!

De nuevo, tendremos una api local que deberemos ejecutar con json-server `json-server --watch exercise-6.json` . La url en cuestión de los personajes sería
`http://localhost:3000/characters`. 
Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta 
o llevarte la carpeta /public (carpeta con imágenes) donde tengas tus propios ejercicios.

En este caso vamos a realizar una batalla entre dos razas a elegir por el usuario. Por lo tanto, lo primero que
deberíamos hacer es una petición a personajes para imprimir sus datos en la página web. Tanto nombre, como imágenes y
estadísticas.

Cuando el usuario elija dos personajes, aparecerá un botón que diga "Luchar!". Una vez que el usuario haga click en el
botón luchar se realizarán una serie de tiradas de dados que decidirán que raza es la ganadora (puedes simular estas
tiradas haciendo un time out para que no salgan todos los resultados directamente).

# Condiciones de victoria

Para que una raza gane el combate tiene que dejar al contrincante con 0 puntos de vida (vitality). Para ello, Los
personajes lanzarán los dados que tengan sus características (damage) de forma ordenada (primero una raza, luego la
otra) y teniendo en cuenta las siguientes condiciones.

Si la raza tiene tiene por ejemplo este daño:

`"damage": ["2d6","1d10","2d20"]`

Significa que tendrá que lanzar 2 dados de 6 caras, 1 de 10 caras y 2 de 20 caras por turno. Para simular una tirada
aleatoria de dados podéis utilizar el siguiente código ``Math.floor(Math.random() * 10) + 1;``. Donde 10 es el numero
máximo del dado.

Por cada dado, tendremos que comprobar si el resultado coincide con el valor de la propiedad .critic del personaje. En
caso afirmativo, el daño de ESE dado se multiplicará x2.

````
Ejemplo de resultado de una tirada de humano:

4
2
8
10 x2 = 20
20
10 x2 = 20

Daño total = 74
````

Una vez que tengamos el daño completo, le restaremos el valor de la propiedad .defense del adversario.

`Ejemplo de la anterior tirada contra un enano que tiene 15 de defensa: 74 - 15 = 59`

Ese resultado, será el daño que el ha hecho el personaje al adversario, por lo cual, el resultado habría que restárselo
a la vitalidad del adversario (vitality).

`Ejemplo de vida restante del enano después del primer golpe del humano: 325 - 59 = 266`

Una vez concluido el golpe de un personaje pasaríamos al otro que haría el mismo proceso.

Este proceso se debería hacer constantemente hasta que uno de los personajes tenga 0 o menos puntos de vida. En cuyo
caso, el adversario sería el ganador.

Lo ideal es que una vez concluya una batalla, mostremos un botón para poder resetear el juego.

Para terminar y por hacer más justa la batalla, que raza ataca primero se decidirá de manera aleatoria.

**Mucha suerte a todos los contrincantes!**


 */

const personajesCharacters = document.querySelector('[data-function="characters"]');
const batallaCharacters = document.querySelector('[data-function="arena"]');
let nombrePersonajesBatalla = [];
let totalPersonajesElegidos = 0;
let divDeLucha = "";
let primerLuchador = "";
let segundoLuchador = "";

const batallasRazas = async () => {
  try {
    const responseBatalla = await fetch("http://localhost:3000/characters");
    const resultBatalla = await responseBatalla.json();
    personajesLuchadores(resultBatalla); //llamamos a los personajes
    console.log(resultBatalla);
  } catch (error) {
    console.log(error);
  }
};

const personajesLuchadores = (personajes) => {
  let divPersonajes = ""; //asigamos vacio para llenarlo de los personajes
  let imgPersonaje = "";
  let personaje = "";
  let datosPersonaje = "";
  let batallas = "";
  let botonLuchar = "";

  for (let personaje of personajes) {
    datosPersonaje = document.createElement("p");
    datosPersonaje.innerHTML =
      "<br>Nombre: " +
      personaje.name +
      "<br>Vitalidad: " +
      personaje.vitality +
      "<br>Crtico: " +
      personaje.critic +
      "<br>Defensa: " +
      personaje.defense +
      "<br>Daño: " +
      personaje.damage;
    imgPersonaje = document.createElement("img");
    imgPersonaje.setAttribute("nombre", personaje.name); //para que el img tenga un atributo que diga el imga del personaje
    imgPersonaje.src = personaje.avatar;
    imgPersonaje.addEventListener("click", (Event) => {
      totalPersonajesElegidos++; //sumamos uno a los personajes de la batalla
      Event.target.setAttribute("estado", "elegido");
      nombrePersonajesBatalla.push(Event.target.getAttribute("nombre")); //agregar al array de personajes que van a combatir los que hayamos elegido.

      if (totalPersonajesElegidos == 1) primerLuchador = personaje; //guarda el primer luchador

      if (totalPersonajesElegidos == 2) {
        segundoLuchador = personaje; //guarda el segundo luchador
        alert(`El combate será con ${nombrePersonajesBatalla}`);
        botonLuchar = document.createElement("button");
        botonLuchar.innerText = "Luchar";
        botonLuchar.addEventListener("click", iniciarBatalla);
        divDeLucha = document.createElement("div");
        divDeLucha.id = "divLucha";
        personajesCharacters.appendChild(botonLuchar);
        personajesCharacters.appendChild(divDeLucha);
        let arrayImg = document.querySelectorAll("img");

        for (let img of arrayImg) {
          if (img.getAttribute("estado") != "elegido") {
            img.parentElement.querySelector("p").remove();
            img.remove();
          }
        }
      }
    });
    divPersonajes = document.createElement("div");
    divPersonajes.appendChild(imgPersonaje);
    divPersonajes.appendChild(datosPersonaje);
    personajesCharacters.appendChild(divPersonajes); //div principal
  }
};
const dadosBatalla = (dado) => {
  console.log(dado);
  if (dado == undefined) {
    dado = "0d0";
  }
  let cantidadDeDados = dado.split("d")[0]; //.split es un caracter delimitador que genera un array, es base a un caracter
  let carasDado = dado.split("d")[1];
  carasDado = parseInt(carasDado);
  cantidadDeDados = parseInt(cantidadDeDados);
  let tiradas = [];
  for (let i = 1; i <= cantidadDeDados; i++) {
    tiradas.push(Math.floor(Math.random() * carasDado) + 1);
  }
  return tiradas;
};

let damagePrimerLuchador = "";
let damageSegundoLuchador = "";
let tiradasDadosPrimerLuchador = [];
let tiradasDadosSegundoLuchador = [];

const iniciarBatalla = () => {
  while (primerLuchador.vitality > 0 && segundoLuchador.vitality > 0) {
    //es un ciclo que se ejecuta mientras ocurra cierta condición(mientras las vidas del primero y del segundo luchador sean diferentes de 0 significa que aun están vivos)
    damagePrimerLuchador = primerLuchador.damage;
    damageSegundoLuchador = segundoLuchador.damage;
    tiradasDadosPrimerLuchador = [];
    tiradasDadosSegundoLuchador = [];
    for (let i = 0; i <= 2; i++) {
      tiradasDadosPrimerLuchador.push(dadosBatalla(damagePrimerLuchador[i]));
      tiradasDadosSegundoLuchador.push(dadosBatalla(damageSegundoLuchador[i]));
    }
    let initInferior = "";
    tiradasDadosPrimerLuchador = tiradasDadosPrimerLuchador.flat();
    tiradasDadosSegundoLuchador = tiradasDadosSegundoLuchador.flat();
    if (
      tiradasDadosPrimerLuchador.length <= tiradasDadosSegundoLuchador.length
    ) {
      initInferior = tiradasDadosPrimerLuchador.length;
    } else if (
      tiradasDadosPrimerLuchador.length > tiradasDadosSegundoLuchador.length
    ) {
      initInferior = tiradasDadosSegundoLuchador.length;
    }

    for (let j = 0; j < initInferior; j++) {
      divDeLucha.innerHTML += `Vitalidad Luchador 1 ${primerLuchador.vitality
        } Tirada Luchador 2 ${tiradasDadosSegundoLuchador[j]} resta ${primerLuchador.vitality - tiradasDadosSegundoLuchador[j]
        } <br>`;
      divDeLucha.innerHTML += `Vitalidad Luchador 2 ${segundoLuchador.vitality
        } Tirada Luchador 1 ${tiradasDadosPrimerLuchador[j]} resta ${segundoLuchador.vitality - tiradasDadosPrimerLuchador[j]
        } <br>`;
      primerLuchador.vitality =
        primerLuchador.vitality - tiradasDadosSegundoLuchador[j];
      segundoLuchador.vitality =
        segundoLuchador.vitality - tiradasDadosPrimerLuchador[j];
      if (primerLuchador.vitality <= 0 || segundoLuchador.vitality <= 0) {
        break;
      }
    }
  }
};

const init = async () => {
  batallasRazas();
};

init();
