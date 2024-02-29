/* Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h2 class="fn-insert-here"></h2> 
</body>
</html> */


const insertText = document.querySelector('h2.fn-insert-here');                             //creas una constante que selecciona un elemento h2 con la clase .fn-insert-here'

insertText.textContent = "Wubba Lubba dub dub";                                            //añadimos el texto al elemento seleccionado


/************************************************ */


/* document.querySelector('h2.fn-insert-here').textContent = "Wubba Lubba dub dub";           //es lo mismo en una sóla línea de código */