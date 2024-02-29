/* Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 
*/


const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];



for(let country of countries) {                                  //creo un bucle que recorre el array de countries
  const div = document.createElement('div');                //creamos una constante de div
  const h4 = document.createElement('h4');                 //creamos una constante de h4
  const img = document.createElement('img');              //creamos una constante de img
  
  document.body.append(div);                             //añdimos al body el div
  div.appendChild(h4);                                  // dentro del div añadimos h4 (hijos de div)
  div.appendChild(img);                                // dentro del div añadimos img   (hijos de div)

  h4.innerHTML = country.title;                      //añadimos el texto dentro del h4 te borra el que había en el caso que hubiese, si no lo añade directamente           
  img.src = country.imgUrl;                         //insertamos las imagenes 
  
}


