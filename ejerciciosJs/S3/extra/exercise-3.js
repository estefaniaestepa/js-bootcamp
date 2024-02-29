/* Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div data-function="printHere"></div>

</body>
</html>
```

```js
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
``` */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');                //nos encontramos el primer elemento que tenga esa propiedad en la etiqueta. Es una propiedad del objeto
const ul = document.createElement('ul');                                         //crear un elemento ul

div.appendChild(ul);                                                           //creamos el elemento añade el ul al elemento div

for (let car of cars){                                                            //creamos un bucle para que recorra el array de cars
  const li = document.createElement('li');                                   //creamos el elemento li
  ul.appendChild(li);                                                       // añadimos el li al ul
  li.innerText = car;                                                      // Una vez tenemos el elemento de la lista , le añado el texto del array al elementi li, antes de insertarlo en ul
}





