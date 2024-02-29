//Dado el siguiente array, haz la media de las notas de todos los examenes .reduce().


const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const total = exams.reduce((total, exam) => total + exam.score, 0);      // Utiliza el método reduce() en el array exams para sumar los puntajes de todos los exámenes. La función de reducción recibe dos parámetros: total (el acumulador) y exam (el elemento actual del array). La función suma el puntaje del examen (exam.score) al acumulador (total). El segundo argumento de reduce() es el valor inicial del acumulador, en este caso, 0.
console.log('Media', total / exams.length);                             //Imprime en la consola el mensaje 'Media' seguido de la media de los puntajes, calculada dividiendo la suma total (total) entre la longitud del array exams.