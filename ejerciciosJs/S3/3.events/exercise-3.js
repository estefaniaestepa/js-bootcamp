/* Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
``` */



const input = document.querySelector('input[type = "text"]');

input.addEventListener("input", function(){                    //input se ejecuta cada vez que escribes dentro del campo
  console.log(input.value);
});