const texto = document.querySelector("#result");

function calculate() {                                                          
  let number1 = parseInt(document.getElementsByName("number1")[0].value);       
  let number2 = parseInt(document.getElementsByName("number2")[0].value);

  if (isNaN(number1)) {
    alert("¡El valor introducido no es un número!");
  } else if (isNaN(number2)) {
    alert("El valor introducido no es un número");
  } else {
    let suma = number1 + number2;
    texto.innerHTML = suma;
  }
}

/* ------------------------- SOLUCIÓN PROFE ----------------------*/

function calculate() {
  // 1. Localizamos los campos que vamos a trabajar
  const number1Field = document.querySelector('input[name="number1"]');
  const number2Field = document.querySelector('input[name="number2"]');

  console.log({ number1Field, number2Field });

  // 2. Obtenemos de los campos los datos que necesitamos
  const number1 = number1Field.value;
  const number2 = number2Field.value;

  console.log({ number1, number2 });

  // 3. Calculamos el resultado
  const result = Number.parseInt(number1) + Number.parseInt(number2);
  const resultMal = number1 + number2; // Cuidado porque son strings

  console.log({ result, resultMal });

  // 4. Recuperamos el sitio dónde tenemos que meter el resultado y lo pintamos
  const resultField = document.querySelector("#result");
  resultField.innerHTML = result;
}
