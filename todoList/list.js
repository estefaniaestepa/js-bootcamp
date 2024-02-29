const input$$ = document.querySelector("input");  //SELECCION DE ELEMENTOS DEL DOM  para encontrar los elementos HTML que coincidan con los selectores especificados
const button$$ = document.querySelector("button");
const ul$$ = document.querySelector("ul");
const empty$$ = document.querySelector(".empty");

let taskList = []; // almacenar tareas pendientes en un array.

const createTask = () => {
  ul$$.innerHTML = ''; // Limpiar el contenido anterior de la lista
  
  if (taskList.length === 0) {  //verifica si el número de elementos en taskList es exactamente igual a cero, lo que significa que el array está vacío y no contiene ninguna tarea.
    empty$$.textContent = "No tienes tareas pendientes"; // Muestra un mensaje si no hay tareas pendientes
  } else {
    empty$$.textContent = ""; // Limpia el mensaje si hay tareas pendientes
    taskList.forEach(task => {   //Si hay tareas pendientes, crea un elemento <li> para cada tarea y lo agrega a la lista <ul>.
      const li = document.createElement("li");
      li.textContent = task; // Agrega el texto de la tarea al elemento <li>
      li.textContent = task; // Agrega el texto de la tarea al elemento <li>

      // Crear el botón de eliminar
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.className = "delete-btn";

      // Asociar un evento de clic para eliminar la tarea
      deleteButton.addEventListener("click", () => {
        ul$$.removeChild(li); // Elimina el elemento <li> de la lista cuando se hace clic en el botón 
        taskList = taskList.filter(item => item !== task); // Remueve la tarea correspondiente del array de tareas
        if (taskList.length === 0) {
          empty$$.textContent = "No tienes tareas pendientes"; // Actualiza el mensaje si no quedan tareas pendientes
        }
      });

      // Agregar el botón de eliminar al elemento <li>
      li.appendChild(deleteButton);

      // Agrega el elemento <li> a la lista <ul>
      ul$$.appendChild(li);
    });
  }
};

button$$.addEventListener("click", () => { // Evento de clic para agregar una nueva tarea cuando el usuaro hace click en el (addEventListener escuche eventos)
  const newTask = input$$.value.trim(); //se obtiene el valor del input y se guarda en newTask y eliminar espacios en blanco al inicio y al final

  if (newTask !== "") {  //newTask no está vacío, 
    taskList.push(newTask); // se añade a taskList , es decir Agrega la nueva tarea a la lista de tareas
    createTask(); //  se llama a la función createTask para actualizar la lista de tareas en el DOM
    input$$.value = ""; // Limpiar el input después de agregar la tarea
  } else {
    alert("Por favor, ingresa una tarea válida."); // Mensaje si el input está vacío
  }
});


createTask(); // Llamar a createTask para inicializar la lista de tareas al cargar la página


/*************************************************************************************************************************************************************************** */

/*Supongamos que tenemos un array taskList que contiene una lista de tareas:

javascript
Copy code
let taskList = ["Hacer la compra", "Limpiar la casa", "Estudiar para el examen", "Hacer ejercicio"];
Y queremos eliminar la tarea "Estudiar para el examen" de la lista.

La línea de código que mencionaste:

javascript
Copy code
taskList = taskList.filter(item => item !== "Estudiar para el examen");
Aquí está cómo se desglosa paso a paso:

filter(): Este es un método de los arrays en JavaScript que crea un nuevo array con todos los elementos que pasan una prueba determinada (proporcionada como una función).

Función de Retorno de Llamada: En este caso, la función de retorno de llamada es item => item !== "Estudiar para el examen". Esta función se ejecutará para cada elemento (item) en el array taskList.

Comparación de Elementos: La función compara cada elemento item del array taskList con la tarea específica que queremos eliminar, que en este caso es "Estudiar para el examen".

Condicional (item !== "Estudiar para el examen"): Si el elemento item no es igual a "Estudiar para el examen", la expresión item !== "Estudiar para el examen" devolverá true. En este caso, el elemento se mantendrá en el nuevo array filtrado. Si el elemento item es igual a "Estudiar para el examen", la expresión devolverá false, y el elemento se eliminará del nuevo array filtrado.

Nuevo Array Filtrado: Después de que filter() haya iterado sobre todos los elementos del array taskList, devolverá un nuevo array que contiene solo los elementos que no son iguales a "Estudiar para el examen".

Entonces, en nuestro ejemplo, después de ejecutar la línea de código taskList = taskList.filter(item => item !== "Estudiar para el examen");, taskList contendrá los siguientes elementos:

javascript
Copy code
["Hacer la compra", "Limpiar la casa", "Hacer ejercicio"]
Como puedes ver, la tarea "Estudiar para el examen" ha sido eliminada del array taskList.




*/ 