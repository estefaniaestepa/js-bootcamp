/* Convierte la siguiente promesa para esperar a ejecutar el console usando async-await. */


const runTimeOut = async() => { 
  await new Promise((resolve) => { 
        setTimeout(function () { 
            resolve(); 
        }, 2000);
    })

    console.log('Time out!')
};

runTimeOut();

/* Se define una función llamada runTimeOut utilizando la sintaxis de función flecha (=>). Esta función es declarada con la palabra clave async, lo que indica que contendrá operaciones asincrónicas que se manejarán usando await.

Dentro de la función runTimeOut, se crea una nueva promesa utilizando new Promise((resolve) => { ... }). Esta promesa se utiliza para encapsular una operación asincrónica.

Dentro del constructor de la promesa, se define una función de retrollamada (callback function) que se ejecutará una vez que la promesa sea resuelta. Esta función toma un argumento llamado resolve, que es una función que se utiliza para completar la promesa.

Dentro de la función de retrollamada, se llama a setTimeout, que es una función integrada de JavaScript que ejecuta una función después de un cierto período de tiempo. En este caso, setTimeout se configura para esperar 2000 milisegundos (o 2 segundos) antes de ejecutar su función de retrollamada.

La función de retrollamada de setTimeout simplemente llama a resolve(), lo que significa que la promesa se resuelve después de que haya pasado el tiempo especificado por setTimeout.

Después de definir la promesa, se utiliza la palabra clave await para esperar a que esta promesa se resuelva antes de continuar con la ejecución del código en la función runTimeOut.

Una vez que la promesa se resuelve (es decir, después de 2 segundos), se ejecuta la siguiente línea de código, que imprime el mensaje 'Time out!' en la consola.

Finalmente, fuera de la función runTimeOut, se llama a la función runTimeOut() para iniciar la ejecución del código.

En resumen, este código crea una función asincrónica que espera 2 segundos antes de imprimir un mensaje en la consola. Utiliza async-await para manejar operaciones asincrónicas de una manera más legible y concisa. */