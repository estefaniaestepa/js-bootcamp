//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i in alumns) { //aqui guarda las posiciones
  let trimestres = 0;
  if (alumns[i].T1 === true) {
    trimestres++;
  }
  if (alumns[i].T2 === true) {
    trimestres++;
  }
  if (alumns[i].T3 === true) {
    trimestres++;
  }
  //reconoce las posiciones de alumnos con los trimestres ( coge los trismestres con los alumnos)
  alumns[i].numeroTrimestresAprovados = trimestres; //nueva propiedad del objeto a la que le asignas el valor de trimestres, una vez has hecho la comprobación de los trimestres "ALE"

  if (trimestres >= 2) {
    alumns[i].isApproved = true; //compara los alumnos 
  } else {
    alumns[i].isApproved = false;
  }
}

console.log(alumns);
