/* Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="fn-insert-here"></div>
   <div></div>
   <div class="fn-insert-here"></div>
   <div>Aqui no va un p</div>
</body>
</html>``` */



const divs = document.querySelectorAll("div.fn-insert-here");    //le indico que me haga un array con todos los div que contenga esa clase

for(let div of divs){                                               //creamos un bucle para que recorra los divs

  const p = document.createElement("p");                        // indicamos que cada vez itere los bucles le añada una p, en el documento 
  p.textContent = "Voy dentro!";                                // indicamos que incluya el texto dentro de la p

  div.appendChild(p);                                          //crea un hijo dentro del elemento que le decimos, en este caso es div.
}


