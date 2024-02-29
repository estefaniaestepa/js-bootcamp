//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.


const cities = [{isVisited:true, name: 'Tokyo'},                              //tenemos un array de objetos   
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'},
 {isVisited:false, name: 'Seul'}];


 const citiesVisit = cities.map(visit => {                                 //creamos una nueva constante .map recibe una funcion, esa funcion recibe como parametro un elemento del array

  if (visit.isVisited === true) {                                         //si  visit(i).objeto es igual a true
    return{...visit, name: `${visit.name} ha sido visitado`};            // retornamos la copia de visit cons los visit.isVisited  y le indicamos qe¡ue name(array) es visit.name / return (visit.name = visit.name + "(Visitado)");
  }else{
    return { ...visit};                                                 
  }             

});


console.log(citiesVisit);



/************************MATHIAS SOLUCIÓN******************************************* */


const citiesName = cities.map((city) => { 
  if (city.isVisited === true) { 
    return(city.name = city.name + "Visitado");                 //concatenas a las ciudades de true Visitado

    }
    return city.name;
  });

  console.log(citiesName);



