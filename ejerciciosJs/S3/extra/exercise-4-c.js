/* Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html. */

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, //posicion 0 elemento 1
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},                   //posicion 1 elemento 2
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},                  //posicion 2 elemento 3
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},                 //posicion 3 elemento 4
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];               //posicion 4 elemento 5



for(let country of countries) {                                       //creo un bucle que recorre el array de countries
  const div = document.createElement('div');                         //creamos una constante de div
  const h4 = document.createElement('h4');                          //creamos una constante de h4
  const img = document.createElement('img');                       //creamos una constante de img
  
  document.body.append(div);                                      //añdimos al body el div
  div.appendChild(h4);                                           // dentro del div añadimos h4 (hijos de div)
  div.appendChild(img);                                         // dentro del div añadimos img   (hijos de div)

  h4.innerHTML = country.title;                                //añadimos el texto dentro del h4 te borra el que había en el caso que hubiese, si no lo añade directamente           
  img.src = country.imgUrl;                                   //insertamos las imagenes 
  
  const buttonElements = document.createElement('button');   //creamos un botón en el html
  div.appendChild(buttonElements);                          //dentro del div añadimos un botón para cada elemento 
  buttonElements.innerText = "Delete";                     //le añadimos un texto al botón de eliminar
  buttonElements.addEventListener('click', function(){     //referenciamos el boton y le añadimos un evento click y creamos una función
    buttonElements.parentNode.remove();                    //hago referencia al botón, seleccionamos al padre del elemento referenciado(botón), con la función .parentNode y por último borramos ese elemento
  });
}

const button = document.querySelector('button');          //seleccionamos el button del html

button.addEventListener('click', function(){             //referenciamos el boton y le añadimos un evento click y creamos una función
  const elimina = document.querySelectorAll('div');     //seleccionamos todos los div del html
  const elementDiv = elimina[elimina.length - 1];      //creamos una constante, y le igualamos la longitud del array y le restamos 1 para igualar a la posicion correcta (en js siempre se cuenta desde 0)
  //elimina.length = 5 elementos (5 -1 para igualar a la posición 4)
  //cada vez que llamamos a la función los números se actualizan automáticamente 

  elementDiv.remove();                              //eliminamos el último elemento en el html
  console.log(elimina.length)
});


