/* # Español
Dado el siguiente html usa querySelector para mostrar por consola todos los p

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
</body>
</html> */


const paragraphs = document.querySelectorAll('p');        // .querySelectorAll crea un array y muestra todas las p

for(p of paragraphs){                                //hacemos un bucle para que itere con las p que hemos buscado
  console.log(p);
}

