/* Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div>1</div>
   <div>2</div>
</body>
</html>``` */


/******************************************************************************** */


// segundo div: version 1

const p = document.createElement('p');                                                       //creas una constante que te añade una p en el documento 
p.textContent = "Voy en medio!"                                                             //.textContent cambia el texto si lo hubiese y en caso que no lo crea.

const divs = document.querySelectorAll('div');                                            //creas una constante que te añade una div en el documento 
const div = divs[1];                                                                     // creamos una nueva constante y le decimos que es igual a la posicion 1 del array creado divs

document.body.insertBefore(p, div);                                                     // le queremos insertar el p antes que el segundo div


/******************************************************************************** */


// segundo div: version 2

const p = document.createElement('p');                                                 //creas una constante que te añade una p en el documento 
p.textContent = "Voy en medio!"                                                       //.textContent cambia el texto si lo hubiese y en caso que no lo crea.

const div2 = document.querySelector('div:nth-child(2)');                            //nth child = como es un selecctor de ccss empieza a contar desde 1 . Selecciona en este caso el segundo


document.body.insertBefore(p, div);                                               // le queremos insertar el p antes que el segundo div



/******************************************************************************* */


// segundo div: version 3
const p = document.createElement('p');                                        //creas una constante que te añade una p en el documento 
p.textContent = "Voy en medio!"                                              //.textContent cambia el texto si lo hubiese y en caso que no lo crea.

const div4 = document.querySelector('div:nth-child(1)');                    //nth child = como es un selecctor de ccss empieza a contar desde 1 .  Selecciona en este caso el primero
div4.after(p);                                                             //indicamos que inserte la p después del primer div



/******************************************************************************* */


//primer div 

const p = document.createElement('p');                               //creas una constante que te añade una p en el documento 
p.textContent = "Voy en medio!"                                     //.textContent cambia el texto si lo hubiese y en caso que no lo crea.

const div3 = document.querySelector('div');                        //creas una constante que te añade una div en el documento

div3.after(p);                                                    //indicamos que inserte la p después del primer div
