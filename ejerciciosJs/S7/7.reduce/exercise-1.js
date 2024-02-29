//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().


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

//LA FUNCIÓN REDUCE RECIBE UN CALLBACK CON DOS PARAMETROS , 1 LA VARIABLE ACUMULADORA Y OTRA EL OBJETO QUE ESTAMOS TRABAJANDO EN ESTE MOMENTO

const total = exams.reduce((total, exam) => total + exam.score, 0);                      // Utiliza el método reduce() en el array exams. El primer argumento de reduce() es una función que se ejecutará en cada elemento del array. La función recibe dos parámetros: total (el acumulador) y exam (el elemento actual del array). La función suma el puntaje (exam.score) al acumulador (total). El segundo argumento de reduce() es el valor inicial del acumulador, en este caso, 0.
console.log(total);
