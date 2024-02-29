const passwordInput = document.querySelector('#password');
const passworRequeriments = document.querySelector('#passworRequeriments');

passwordInput.addEventListener('focus', () => {
    passworRequeriments.classList.remove('hidden');                //cogemos passwordRequeriments y accedemos a su .classList, es decir al listado de clases que tiene, en este caso tiene una clase que se llama hidden, esta clase nos da un array. Dentro de esta clase tenemos el remove que lo que hace es eliminar una clase del listado de clases
});                                                             // si nos vamos a la consola y consultamos vemos que ese div ya no tiene esa clase. Porque queremos que cuando carguemos la pagina no se muestre nada, pero cuando empezemos a escribir nos va a mostrar los requisitos de esa contraseña.
// este div tiene la clase hidden que está asociado a nuestro css y le hemos indicado display: none

passwordInput.addEventListener('focusout', () => {             //ahora queremos que cuando hagamos focus desaparezca
    /* debugger; */                                                //si queremos debuguear, que el ordador se pare cuando se ejecute lo ponemos de esta forma, si tenemos el inspector de elementos parará y podremos debuguear en ese momento y podemos ver que contiene nuestro codigo
    passworRequeriments.classList.add('hidden')               // que hace add dentro de classList lo que añadir todos los elementos, todas las clases que tengo entre parentesis al elemento input, en este caso nuestro div. Es decir añade todas las clases a nuestro div
});

//AHORA HAREMOS LA PARTE DOS DEL EJERCICIO QUE LO TENDREMOS EN OTRO DOCUMENTO HTML Y CSS ESTÁ EN LA MISMA CARPETA