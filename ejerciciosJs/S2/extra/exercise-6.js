/* Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

1.crear una funcion llamada swap
2. swap tiene que recibir dos parametros que sean indices del array 
3.intercambiar la posicion de los valores de los indices que hayamos enviado como parametro
4.retortanr el array resultante
Sugerencia de array:
````js
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
```` */


const arrayJugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
const index1 =[3];
const index2 =[2];

function swap(arrayJugadores, index1, index2){
  if(index1 >= 0 && index1 < arrayJugadores.length && index2 >= 0 && index2 < arrayJugadores.length){
      let intercambioResult = arrayJugadores[index1];            // Aquí se crea una variable temporal llamada intercambioResult y se le asigna el valor del elemento en la posición index1 del array. Básicamente, intercambioResult guarda temporalmente el valor que queremos intercambiar.
      arrayJugadores[index1] = arrayJugadores[index2];          //Luego, se sobrescribe el valor en la posición inde1 del array con el valor del elemento en la posición index2. Ahora, la posición indice1 tiene el valor que originalmente estaba en index2.
      arrayJugadores[index2] = intercambioResult;              //Finalmente, se sobrescribe el valor en la posición index2 del array con el valor almacenado en la variable temporal intercambioResult. En este punto, la posición index2 tiene el valor original que estaba en index1, y el intercambio está completo.
                                                              //Estas tres líneas de código realizan el intercambio sin perder ningún valor gracias a la variable temporal intercambioResult. La técnica de usar una variable temporal es común cuando se quiere intercambiar dos valores, ya que ayuda a mantener temporalmente uno de los valores para que no se pierda durante el proceso de intercambio.
   
    console.log(`El nuevo array es ${arrayJugadores}`);
  }else {

    console.log(`El número introducido no es válido`);
  }
}

let resultado = swap(arrayJugadores, index1, index2);
