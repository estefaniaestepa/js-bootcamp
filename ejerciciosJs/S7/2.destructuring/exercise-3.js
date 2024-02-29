//En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.



const animalFunction = () => {                                                                                               //la función tiene 2 objetos que queremos destruccturar, para crear 2 variables
    return {name: 'Bengal Tiger', race: 'Tiger'}
};


const {name, race} = animalFunction;                                                                                      //esto lo desestrucctura y te crea 2 variables que igualamos a la función                                                    

console.log(`Los ${name}, están en la India y Nepal y el Tibet. Sabéis de que raza son? Correcto es un ${race}`);
