/* Si tienes windows. Lo primero que tienes que hacer es abrir powerShell como ADMINISTRADOR y ejecutar el comando `Set-ExecutionPolicy Unrestricted`.
 Elige la opciòn SI y dale a intro. Si tu ordenador está en español La opción SI será escribiendo una `S` y si está en ingles una `Y`.

Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando  `npm i -g json-server` 
y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json.
Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.

Si tienes windows tendrás que ejecutar `set-executionpolicy unrestricted –force` en una terminal abierta como administrador.


/--------------------------------------------------------------------------------------------------------------------------------------/
/*LOS PASOS ANTERIORES SIRVEN PARA CREAR UN SERVIDOR LOCAL QUE SIMULA EL FUNCIONAMIENTO DE UN SERVIDOR ONLINE. 
EN ESTE CASO, CON LA RUTA json-server --watch exercise-2.json LE DECIMOS QUE SIMULE EL SERVIDOR CON EL CONTENIDO DE EXERCISE-2.JSON
AL ACCEDER A localhost:3000 TENEMOS LA INDFORMACIÓN DEL JSON, PARA LLAMARLA CON UN FETCH TAL Y COMO HARÍAMOS CON UNA API.
/--------------------------------------------------------------------------------------------------------------------------------------/


Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. 
Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date.
Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
  
Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho... */

const showDiary = async () => {
  try {
    const response = await fetch("http://localhost:3000/diary"); //creamos una constante que es la respuesta del fetch y el await porque el fetch es una promesa a la que hay que esperar.
    const result = await response.json(); //resultado de la respuesta en formato json, igual que esperamos al fetch debemos esperar a la respuesta del json. Nos devuelve un array
    result.sort((a, b) => new Date(a.date) - new Date(b.date)); //.sort ordena (a, b) compara el a con el b -- new Date compara las fechas y las ordena de menor a mayor
    for (let entry of result) {
      //recorremos el array y cada uno de los resultados le llamamos entry
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.innerText = entry.title;
      const h5 = document.createElement("h5");
      h5.innerText = entry.date;
      const p = document.createElement("p");
      p.innerText = entry.description;
      //si metemos un contenido (array) es mejor usar innerText
      document.body.appendChild(div);
      div.appendChild(h3);
      div.appendChild(h5);
      div.appendChild(p);

      const buttonDelete = document.createElement("button"); //creamos un botón en el html
      div.appendChild(buttonDelete); //dentro del div añadimos un botón para cada elemento
      buttonDelete.innerText = "Delete"; //le añadimos un texto al botón de eliminar
      buttonDelete.addEventListener("click", function () {
        //referenciamos el boton y le añadimos un evento click y creamos una función
        div.remove(); //hago referencia al botón, seleccionamos al padre del elemento referenciado(botón), con la función .parentNode y por último borramos ese elemento
      });
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

showDiary();
