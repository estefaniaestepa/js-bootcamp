/* Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

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

const focus = document.querySelector('input[type = "text"]');

focus.addEventListener("focus", function(){                    //focus sólo te escribe cuando estás dentro del campo
  console.log(focus.value);
});