/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. 
Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for( let i = 0; i<foodSchedule.length ; i++){   //Se inicia un bucle for que recorre el array foodSchedule usando el índice i.
  const foodScheduleElement = foodSchedule[i];  //Dentro del bucle, se accede al elemento actual del array foodSchedule en cada iteración mediante foodSchedule[i].

  if (!foodScheduleElement.isVegan) {  //Se verifica si isVegan del elemento actual es false. Si es así, se ejecuta el bloque de código dentro del if.
    foodScheduleElement.name = fruits.pop();//Dentro del bloque if, se utiliza fruits.pop() para eliminar y obtener el último elemento del array fruits, y se asigna este valor al nombre de la comida (name) del elemento actual en foodSchedule.
    foodScheduleElement.isVegan = true;//se establece isVegan en true para indicar que ahora es vegana.
}
}

console.log(foodSchedule);

