/*FUNCIONES*/


const cliente = {
  id: 32,
  name: 'Ivan',
  secondName: 'Ceballos',
  age: 12,
  address: 'Calle Virgen del Carmen',
  getFullname: function() {                                       // Creamos la función dentro del objeto para que solo itere sobre él. Esto es una función anónima normal, porque su nombre depende de una variable
      return this.name + ' ' + this.secondName;                  // Usamos "this" para que reconozca que los datos que le pedimos están dentro del mismo objeto.
      //return `${this.name} ${this.secondName}`;
  }                                                             // En este caso la usamos para abstraer datos, no reeutilizarlos. 
};


function generarCliente(id, name, sec, age, address) {        // Generar cliente temporal con parámetros de id, nombre y apellido
  let tempClient = {};                                       // Creamos una nueva variable que va a contener los datos introducidos por el cliente, esto es un objeto nuevo un objeto vacío donde se va hacer la copia de cliente
                                       
  Object.assign(tempClient, cliente);                       // Copiamos dentro de tempClient los valores de cliente // con esto llamamos a la funcion .assign esto copia los datos de tempClient

  tempClient.name = name;                                  // Le decimos que valor tiene cada parámetro dentro del objeto. Con esto modificamos todas las variables de tempclient
  tempClient.id = id;                                     //aqui asignamos a Tempcliente todos los valores que vamos cambiando
  tempClient.secondName = sec;
  tempClient.age = age;
  tempClient.address = address;
  
 /*  console.log(tempClient); */                      //aqui si que podemos ver, pero para eso tenemos que llamar a la función
  return tempClient;

}

const cliente2 = createClient('Carlos', 'Marti', 28, 'Calle Hierro, 23');  //Para imprimir los datos necesitamos declarar otra variable donde guardarlos, aqui llamamos a la función para que invoque la función
/* const cliente2 = createClient(2, 'Helena', 'Marti', 28, 'Visca Jafre');
console.log(nuevoCliente) 
 */



/**********************FUNCIONALIDAD DE FUNCIONES********************************************* */


const client = {
  id: 32,
  name: 'Ivan',
  secondName: 'Ceballos',
  age: 12,
  address: 'Calle Virgen del Carmen',
  getFullname: function() {                                              //las funciones anónimas normales, tienen reservado un espacio de memoria que se llama this que hace referencia al mismo objeto, cuando se ejecuta la función tiene el espacio reservado, pero cuando hace las funciones de flecha no tiene reservado ese espacio.
    return `${this.name} ${this.secondName}`;                           //con funciones anonimas normales si funciona
  },
  getFullnameFecha: () => `${this.name} ${this.secondName}`,           // la función de flecha no funciona , en el caso concreto que estemos dentro del objeto y tengamos que usar propiedades de ese objeto, en el caso que tengamos que usar this, con funciones de flecha no funciona                                                       
};                                    

console.log(client.getFullname);                                      //si llamamos a la funcion nos devuelve un nombre 

function generarCliente(id, name, sec, age, address) {        
  let tempClient = {};                                       
                                       
  Object.assign(tempClient, cliente);                      

  tempClient.name = name;                                 
  tempClient.id = id;                                    
  tempClient.secondName = sec;
  tempClient.age = age;
  tempClient.address = address;
  
 /*  console.log(tempClient); */                      //aqui si que podemos ver, pero para eso tenemos que llamar a la función
  return tempClient;

}

const client2 = createClient('Carlos', 'Marti', 28, 'Calle Hierro, 23'); 