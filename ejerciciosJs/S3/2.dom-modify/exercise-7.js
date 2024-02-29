/* Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
   <p>No me elimines!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
</body>
</html>``` */

const eliminar = document.querySelectorAll('.fn-remove-me');                   // creamos una constante con un array con todos los elementos que tengan la clase .fn-remove-me

for (let elimina of eliminar){                                                //creamos un bucle para que recorra los elementos
  elimina.remove();                                                           // eliminamos todos los nodos del HTML que encuentra al iterar el array
}
