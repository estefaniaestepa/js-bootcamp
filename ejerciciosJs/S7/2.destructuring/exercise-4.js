//En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
//Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.



const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }                                                         // 1º desestructuramos los objetos de la constante  y 2º el array

const {name, itv} = car;                                                                                       //esto lo desestrucctura y te crea 2 variables que igualamos a la función                                                    

const [quince, once, veinte] = car.itv;                                                                       //hacemos lo mismo con el array para que cree 3 variables y le hacemos referencia a la constante.objeto que pertenece ese array

console.log(`Este coche ${car}, tiene la Itv de los años ${car.itv}, su próxima revisión es en el 2023.`);   //imprimimos por consola
