// Dado el string 'vaca', darle la vuelta
const vaca = 'vaca';

const reversed = vaca.split('').reverse().join('');

console.log(reversed);

// split lo que hace es parar caracteres en un array (pasa de un string a un array)
// el reverse le da la vuelta (da la vuelta al array)
// join una vez le da la vuelta lo junta (pasa del array al string)


/* ---------------------------------------------------------------------------------- */

/* OTRA FORMA DE HACERLO */

/* const vaca = 'vaca';
console.log(vaca[3],vaca[2],vaca[1],vaca[0]); */