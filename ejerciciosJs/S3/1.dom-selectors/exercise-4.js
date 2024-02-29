/* # Español
Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con la clase .pokemon

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
</body>
</html> */

const pokemon = document.querySelectorAll('.pokemon');            // .querySelectorAll crea un array y muestra todos los elementos con las clase .pokemon

for (element of pokemon){
  console.log(element);
}