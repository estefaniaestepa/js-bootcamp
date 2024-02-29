//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

//El resultado sería 42.


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

console.log(exams.reduce((total, exam) => (exam.score > 4) ? total + exam.score : total, 0));              // Utiliza el método reduce() en el array exams. La función de reducción recibe dos parámetros: total (el acumulador) y exam (el elemento actual del array). 
                                                                                                          //La función utiliza un operador condicional ternario para verificar si el puntaje del examen (exam.score) es mayor que 4. Si es así, se suma al acumulador (total), de lo contrario,El segundo argumento de reduce() es el valor inicial del acumulador, en este caso, 0. será total más cero porque ese no lo contamos para la suma, es decir se mantiene sin cambios.
                                                                                                          