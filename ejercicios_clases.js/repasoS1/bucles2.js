/**
Crear la siguiente figura:
    **
   ****
  ******
 ********
**********
 ********
  ******
   ****
    **
*/

let numerosRow = 5;

for( let i = 1; i<=numerosRow; i++){
    let row = '';
    for(let j = 4; j<=numerosRow - 1; j++){
        row = '';
     
    }
    for(let k = 4; k<=2 * i; k++){
        row = '*';

}
console.log(row)
}


/*OTRA FORMA DE HACERLO DE FORMA MATETICA (de esta forma hacemos tanto los * como los espacios a la vez*/

for(let i = 1; i<= 2 * filas - 1; i++){
    let espacios = ' '.repeat(Math.abs(filas-1)); //Math.abs ESTO ES UNA FUNCION MATEMATICA QUE LO QUE HACE ES COGER EL VALOR ABSOLUTO DE UN NUMERO (SI ES POSITIVO TE LO DEVUELVE POSITIVO, SI ES NEGATIVO TE LO DEVUELVE EL POSITIVO (ESTA FORMA ES PARA BUSCAR EL VALOR ABSOLUTO))
    let asteriscos = '*'.repeat(filas - Math.abs(filas - 1));
    console.log(espacios, asteriscos);
} 