/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
 los usuarios. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {    // es un objeto que tiene 3 claves ( waves, rain, firecamp)
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


/*************SOLUCIÓN CON REDUCE************** */

let totalVolume1 = 0;
let numberOfSounds1 = 0;


for (let user of users){                                                      //recorremos el array y sacamos los nombres (name) . LO HACEMOS CON OF ES ITERAR CON CADA UNO DE LOS VALORES DEL ARRAY
    const userFavoritesSounds = user.favoritesSounds;                        // creamos una constante y le decimos que es igual a user.favoritesSounds. CON FOR IN LO QUE COGEMOS ES CADA UNA DE LAS CLAVES DE ESTE OBJETO
    
    for(let key in userFavoritesSounds){                                    //for in - sirve para recorrer calves (waves, shower, train, firecamp)
    const favouriteSound =  userFavoritesSounds[key];                      // con esto tenemos format, volume

    totalVolume1 += favouriteSound.volume;                                 // aqui hemos calculado el total del volumen / es lo mismo - totalVolume = totalVolume + favouriteSound.volume
        numberOfSounds1++;                                                // vamos a calcular el numero de sonidos - cada vez que sumemos un sonido al volumen total sumamos 1 sonido al numero de sonidos , asi contamos el numero de sonidos que tenemos

     /*    console.log(key, userFavoritesSounds[key]); */ //para acceder con variables hay que poner los []
     
    }
    
}

    console.log('La media de volumen es:', totalVolume1 / numberOfSounds1);

    numberOfSounds1 =0;
    totalVolume1 = users.reduce((total, user) => {
        return total + user.favoritesSounds.reduce((totalUserSound, userSound) =>{   //en userSound tenemos cada una de las prodipedades
            numberOfSounds1++
            return totalUserSound + userSound.vulume;
        }, 0);
    }, 0);
  
    console.log('La media de volumen es:', totalVolume1 / numberOfSounds1);

//PARTE 1 (MEDIA GLOBAL)

let totalVolume = 0;
let numberOfSounds = 0;


for (let user of users){                                                      //recorremos el array y sacamos los nombres (name) . LO HACEMOS CON OF ES ITERAR CON CADA UNO DE LOS VALORES DEL ARRAY
    const userFavoritesSounds = user.favoritesSounds;                        // creamos una constante y le decimos que es igual a user.favoritesSounds. CON FOR IN LO QUE COGEMOS ES CADA UNA DE LAS CLAVES DE ESTE OBJETO
    
    for(let key in userFavoritesSounds){                                    //for in - sirve para recorrer calves (waves, shower, train, firecamp)
    const favouriteSound =  userFavoritesSounds[key];                      // con esto tenemos format, volume

    totalVolume += favouriteSound.volume;                                 // aqui hemos calculado el total del volumen / es lo mismo - totalVolume = totalVolume + favouriteSound.volume
        numberOfSounds++;                                                // vamos a calcular el numero de sonidos - cada vez que sumemos un sonido al volumen total sumamos 1 sonido al numero de sonidos , asi contamos el numero de sonidos que tenemos

     /*    console.log(key, userFavoritesSounds[key]); */ //para acceder con variables hay que poner los []
     
    }
    
}

console.log('La media de volumen es: ', totalVolume / numberOfSounds); // con esto sacamos la media de los sonidos
/* 
console.log(favouriteSound.volume);   */  // (ESTO ES RECORRER ARRAY Y ACCEDER A UN ELEMENTO)



/********************************************************************************************* */


//PARTE 2 (MEDIAS PARCIALES)

let totalMeans = 0;

for (let user of users){     
    const userFavoritesSounds = user.favoritesSounds; 
    let userTotalVolume = 0;  
    let userSoundsCount= 0;

    for(let key in userFavoritesSounds){  // aqui sumamos los numeros de cada usuario de forma individual
    const favouriteSound =  userFavoritesSounds[key]; 

        userTotalVolume += favouriteSound.volume;  
        userSoundsCount++     // es el conteo que tiene cada uno de los usuarios  
    }
    const userMean = (userTotalVolume, userFavoritesSounds.length) // userFavoritesSounds  son los totales de elementos que divide el total de la suma de sonidos por usuario

    console.log(`la media del usuario ${user.name} es ${userMan}`);
    
    totalMeans += userMean;
}

console.log(`La media es ${totalmeans / users.length}`); // con esto sacamos la media total en conjunto