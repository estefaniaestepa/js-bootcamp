//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];


for (let i in placesToTravel) {
  if (placesToTravel[i].id === 11 || placesToTravel[i] === 40) {          //no se puede indicar un && porque no puede buscar los dos a la vez
    placesToTravel.splice(placesToTravel[i], 1)                           //(placesToTravel[i], 1) .splice es de donde queremos eliminar y el segundo parametro es cuantos queremos eliminar
  }                                                                       //.splice buscas una id dentro del indice cuando la encuentre que la elimine
  console.log(placesToTravel);
}


/****************************************************************************** */
//OTRA FORMA DE HACERLO

let placesTr = [];

for (let i in placesToTravel) {
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
    placesTr.push(placesToTravel[i]);
  }
}

console.log(placesTr);

