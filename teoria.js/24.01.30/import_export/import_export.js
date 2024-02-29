// IMPORT EXPORT

//IMPORT ES PARA IMPORTAR UNA FUNCIONALIDAD, PARA MODULARIZAR EL JS

import saludar from ".exportDefault";           //siempre tenemos que indicar que nos importamos y de donde 

saludar ('Calos');                             //aqui importamos, cogemos esa funcion que esta en el otro archivo exportDefault.js
                                              // y podmeos usarla como si estuviera en este archivo, es decir como si la funcion estuviese aqui


import getclient from, "./exportDefault";   //la funcion que hemos creado lo importará aqui
console.log(getclient());                  //tendrá el nombre del cliente Ivan Ceballos
                                          //desde este archivo no podemos acceder a las funciones del otro archivo, SOLO PODEMOS ACCEDER A LA FUNCION QUE NOS HAN EXPORTADO