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

for (let i = 0; i < foodSchedule.length; i++) {
  const foodScheduleElement = foodSchedule[i];

  if (!foodScheduleElement.isVegan){
    foodScheduleElement.name = fruits.pop();  //remplazo de la comida vegana con la no vegana
    foodScheduleElement.isVegan = true;
  }
}

console.log(foodSchedule);