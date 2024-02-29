
let array = [1, 2, 3, 4 ,5, 10 , 23];

array[0] // accede a la posición indicada entre claves del array y devuelve el valor

array.at(0) // accede a un elemento por su posición y devuelve el valor

array.lenght // nos indica la longidut del array

// ----------------------------------------------------------------------- MODIFICAN EL ARRAY ORIGINAL -----------------------------------------------------------------------------

array.push() // añade elementos al FINAL del array

array.pop() // extrae por defecto el ÚLTIMO elemento de la lista y lo devuelve, se puede especificar entre los paréntesis la posición a la que queremos acceder

array.reverse() // invierte el orden del array

array.shift() // extrae el PRIMER elemento y lo devuelve

array.unshift() // añade un elemento al PRINCIPIO del array

array.sort() // ordena los elementos del array según la lógica de JS. si son strings los ordena alfabéticamente, si són números pues ya la lia mas. 
// según el array que tenemos nos devuelve: [1, 10, 2, 23, 3, 4, 5], el solo lee el primer número así que del 10 solo ve el 1, por lo tanto lo pone después del 1.

array.splice() // manipula fragmentos del array. según los parámetros que se le den hace una cosa o otra.
array.splice(1, 2) // ELIMINA elementos. el primer parámetro es desde que posición queremos empezar a eliminar, y el segundo cuantos elementos. En este caso elimina el 2 y el 3 ya que le decimos que empiece en la posición 1 que en el array es el 2 y elimine 2 elementos.
array.splice(1, 2, 5) // SUBSTITUYE elementos. elimina el 2 y el 3 pero en este caso añade el 5 donde ha eliminado los otros.
array.splice(1, 0, 'Hola mundo') // AÑADE elementos. Le decimos oye, desde la posición 1, elimina 0 elementos y mete 'Hola mundo'
array.splice(0, array.length) // EXTRAE elementos del array. En este caso desde posición 0 nos extrae la longitud del array, es decir, todos los elementos. 

// ----------------------------------------------------------------------- NO MODIFICAN EL ARRAY ORIGINAL -----------------------------------------------------------------------------

array.concat() // concatena dos arrays. let array = [1, 2]    let array1 = [3, 4]     let arrayFinal = array.concat(array1) ------> arrayFinal = [1, 2, 3, 4];

array.join() // genera un string con todos los elementos, se le puede especificar un separador en los parámetros. Por ejemplo: array.join("|"), nos va a devolver 1|2|3|4|5|6|7

array.slice() // extrae una porción del array. array.slice(inicio, fin)
array.slice(1) // nos devuelve desde el segundo elemento (posición1) hasta el final del array ya que no especificamos el final
array.slice(1, 3) // nos devuelve desde el primer elemento hasta el tercero

array.toString() // transforma el contenido del array a strings. a diferencia del join NO admite separadores

// ------------------------------------------------------------------------- LOCALIZADORES ------------------------------------------------------------------------------------------

array.indexOf() // localiza el primer elemento especificado en los parámetros y nos devuelve su posición
array.indexOf(3) // nos devuelve la posición del 3 en el array
array.indexOf(100) // si el elemento NO SE ENCUENTRA EN EL ARRAY nos devuelve -1

array.lastIndexOf() // localiza el ÚLTIMO elemento especidficado y nos devuelve su posición

array.includes() // te devuelve en BOOLEANO si el elemento especificado en parámetros se encuentra o no en el array

// ----------------------------------------------------------------------- MODIFICADORES STRING -----------------------------------------------------------------------------

array.chartAt() // nos devuelve la letra en la posición especificada

array.substing() // saca un fragmento del string y lo copia.     array.substing(inicio, fin)

array.toUpperCase() // convierte todo a MAYUSCULAS

array.toLowerCase() // convierte todo a MINUSCULAS

array.trim() // recorta los espacios en blanco del principio y el final
array.trimStart() // recorta los espacios en blanco del principio
array.trimEnd() // recorta los espacios en blanco del final

array.split() // cuando el array es de texto y no le indicamos el separador SEPARA TODAS LAS LETRAS POR STRINGS array = ["hola"], array.split() ----> "h","o","l","a"
array.split()  // array = ["hola bon dia que tal"] --> "hola", "bon", "dia", "que", "tal"



