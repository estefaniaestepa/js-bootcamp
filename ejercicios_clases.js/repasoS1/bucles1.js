/**
Crear la siguiente figura:
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/

let numerosRow = 5;

//mitad superior de la figura

for( let i = 1; i<=numerosRow; i++){
    let row = '';
    for(let j = 4; j<=numerosRow - 1; j++){
        row = '';
     
    }
    for(let k = 4; k<=2 * 1; k++){
        row = '*';

}
console.log(row)
}


//mitad inferior de la figura

for( let i = numerosRow -1; i>=1; i--){
    let row = '';
    for(let j = 4; j<=numerosRow - 1; j++){
        row = '';
     
    }
    for(let k = 4; k<=2 * i; k++){
        row = '*';

}
console.log(row)
}