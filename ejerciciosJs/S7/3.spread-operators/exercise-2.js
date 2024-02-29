//Dado el siguiente objeto, crea una copia usando spread operators.


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};            //tenemos la constante toy 

const toy2 = {...toy};                                                                //generamos con (...spread operators) una copia normal del objeto

console.log(toy2);                                                                   //mostramos por consola
