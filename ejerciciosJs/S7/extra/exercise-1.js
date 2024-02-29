/*Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. 
*La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.*/


const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];


const games = videogames.filter((gender) => gender.genders.includes ('RPG'));                                                //el método filter() en el array videogames para crear un nuevo array llamado games. Este nuevo array contendrá solo los videojuegos cuya propiedad genders incluye la categoría 'RPG'. La función de filtrado comprueba si la propiedad genders de cada videojuego incluye la cadena 'RPG'.
const gamesMedia = games.reduce((total, val) => total + val.score, 0);   //siempre se indica el valor inicial (0)           //el método reduce() para calcular la suma total de las puntuaciones de los videojuegos en el array filtrado (games). La función de reducción recibe dos parámetros: total (el acumulador) y game (el videojuego actual en la iteración). Se suma el valor de game.score al acumulador total. El segundo argumento de reduce() es el valor inicial del acumulador, que se establece en 0.

console.log(gamesMedia / games.length);                                                                                    //Se imprime en la consola el resultado de dividir la suma total de las puntuaciones (gamesMedia) por la cantidad de videojuegos en el array filtrado (games.length). Esto proporciona la media de las puntuaciones de los videojuegos en la categoría 'RPG'.



/*************************SOLUCION PROFESOR************************************************** */


const genderToFilter = 'RPG';                                                                                           //creamos una constante del elemento que queremos buscar RPG
const videogamesFiltered = videogames.filter((videogame) => videogame.genders.includes(genderToFilter));               //el método filter() en el array videogames para crear un nuevo array llamado videogamesFiltered. Este nuevo array contendrá solo los videojuegos cuya propiedad genders incluye la categoría especificada en genderToFilter (en este caso, 'RPG')
const totalScores = videogamesFiltered.reduce((total, videogame) => total + videogame.score, 0);                      //el método reduce() para calcular la suma total de las puntuaciones de los videojuegos en el array filtrado. La función de reducción recibe dos parámetros: total (el acumulador) y videogame (el videojuego actual en la iteración). Se suma el valor de videogame.score al acumulador total. El segundo argumento de reduce() es el valor inicial del acumulador, que se establece en 0.
const mean = totalScores / videogamesFiltered.length;                                                                // calcula la media dividiendo la suma total (totalScores) por la cantidad de videojuegos en el array filtrado (videogamesFiltered.length).

console.log(`Media de juegos de la categoría ${genderToFilter} es ${mean}`);                                       //se imprime en la consola un mensaje que muestra la media de las puntuaciones de los videojuegos en la categoría especificada



                               

  
