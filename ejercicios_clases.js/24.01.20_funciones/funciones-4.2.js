/**
 * Parte 1.Crear un objeto literal persona con nombre y edad y un método (función propia de un objeto) que indique si la persona es mayor de edad
 */


/*******************************************************SOLUCION PROFESOR****************************************************************************************** */


// Inicio parte 1

const mayoriaEdad = 18;                     //crea una constante para saber que la mayoria de edad es 18
const persona = {                          //crea el objeto y le asigna propiedades (nombre, edad) con sus respectivos valores
nombre: "Ana",
edad: 17,
esMayorDeEdad: function() {               //la funcion esMayorDeEdad: es una propiedad de la const perosona 
  return this.edad >= mayoriaEdad;        // me devuelve la edad de ese objeto y lo compara con la constante mayoriaEdad
}
}

// Fin parte 1

/**
 * Parte 2. Crear una función que, dado un nombre y una edad, genere el objeto anterior (nombre, edad y función) con esos datos.
 * Por ejemplo:
 *
 * generarPersona('Iván', 18) devolvería:
 * {
 *  nombre: 'Iván',
 *  edad: 18,
 *  esMayorDeEdad()
 * }
 */

// Inicio parte 2

function generaPersona(nombre, edad){          //cremos una nueva funcion, que nos permite utilizar las propiedades creadas en el objeto
  return{                                     //hacemos un return
    nombre,                                   //si las claves se llaman igual que los parametros, genera la propiedad del objeto con el valor que le hayamos dado a los parametros
    edad,
    esMayorDeEdad: function(){               //la funcion esMayorDeEdad: es una propiedad de la const perosona 
      return this.edad >= mayoriaEdad;      //me devuelve la edad de ese objeto y lo compara con la constante mayoriaEdad
    }
  };
}

// Fin parte 2

/**
 * Parte 3. Crea un array con varias personas
 */

// Inicio parte 3

const personas = [
  generaPersona('Ana', 18),            //genera un array de objetos con las perosnas, llamando a la funcion
  generaPersona('Manuel', 3),                                                                                                                                                                                                                                                            
  generaPersona('Paco', 0),
  generaPersona('Maria', 59),
];

// Fin parte 3

/**
 * Parte 4. Crear una función que, dado el listado de la parte 3, devuelva la edad promedio de todas las personas.
 */

// Inicio parte 4

function personMean(people) {        // people es el array personas, que contiene objetos con las propiedades nombre y edad y la función mayoría de edad 
  if(people.length === 0){           // si la longud de la lista es exactamente igual a 0, o sea si no tiene elementos este resultado es 0
    return 0;
  }
  let sum = 0;

  for(let person of people){     //crea un bucle que recorra el array que posteriormente lo vamos a llamar cuando creemos la funcion
    sum += person.edad;         // suma los valores de la propiedad edad de los objetos del array
  }
  return sum / people.length;
}

console.log(personMean(personas));

// Fin parte 4