
function calculate() {


  let number1 = parseFloat(document.getElementsByName('number1')[0].value);    //el imput te devuelve una cadena de valores un array y por eso le inficamos la posicion
  let number2 = parseFloat(document.getElementsByName('number2')[0].value);


  let resultado = document.querySelector("#result");
  if (isNaN(number1)) {
    alert("El primer número no es válido");
  } else if (isNaN(number2)) {
    alert("El segundo número no es válido");
  } else {
    let suma = number1 + number2;  // si ponemos la suma aqui, solo la realiza cuando ha comprobado las anteriores condiciones.
    resultado.innerHTML = suma;           //hemos indicado que dentro del html metamos el resultado de la suma

  }

}

//el parseFloat hace que el string sea un numero


/********************OTRA FORMA DE HACERLO JAIME************************************************** */


const result = document.querySelector('#result');  //le asignamos el span

function calculate() {
  let inputFieldOne = parseFloat(document.getElementsByName("number")[0].value); //input numero1 lo asignamos y lo pasamos a parseFloat para que lo covierta en numero. Esta funcion te da el elemento con el number1, sacamos el valor 0 porque .getElementsByName te da un array ponemos [0] para sacar el primer elemento. El value nos da el valor que nos da ese campo
  let inputFieldTwo = parseFloat(document.querySelector('input[name = "number2"]').value);  // lo mismo con el numero2, el .querySelector sólo nos da la primera ocurrencia, le ponemos .value para tener ese valor

  if (isNaN(inputFieldOne)) {                   //isNaN esta funcion te devuelve si el resultado del elemento inputFieldOne, si el resultado es un numero ejecuta el else if
    alert('First input is not a number');
  } else if (isNaN(inputFieldTwo)) {             // comprueba si este campo es un numero, si no lo es muestra el alert
    alert('Second input is not a number');
  } else {
    let total = inputFieldOne + inputFieldTwo;    //luego le hacemos la suma y lo mostramos
    result.innerHTML = total;                   // esto coge el nodo del resultado y le implementa el resultado
  }
}


/********************OTRA FORMA DE HACERLO ALE************************************************** */


let form1Input = document.querySelector("input"[name = 'number1']);
let form2Input = document.querySelector("input"[name = 'number2']);

const span = document.querySelector("span#sesult");

function calculate() {
  let form1 = parseFloat(form1Input.value);
  let form2 = parseFloat(form2Input.value);

  if (isNaN(form1) && isNaN(form2)) {
    alert("Introduce un número válido");
  } else if (isNaN(form1)) {
    alert("El segundo campo no contiene un número válido")
  } else {
    let resultado = form1 + form2;
    span.innerHTML = resultado;
  }
}


/********************OTRA FORMA DE HACERLO : PROFESOR************************************************** */

function calculate() {
  //1. Localizamos los campos que vamos a trabajar
  const number1Field = document.querySelector('input[name = "number1"]');      //el querySelector('input[name = "number1"]');  se busca de esta manera
  const number2Field = document.querySelector('input[name = "number2"]');      // los [] indican que vamos a filtrar por atributos, en este caso el atributo es el name = a el valor

  console.log({ number1Field, number2Field });    //hacemos esto para ver lo que nos devuelve

  //2.Obtenemos de los campos los datos que necesitamos
  const number1 = number1Field.value;  //validamos los datos
  cosnt number2 = number2Field.value;

  //3.Calculamos el resultado
  const resul = Number.parseInt(number1) + Number.parseInt(number2);  //se puede usar tambien parseFloat
  const resultMal = (number1 + number2); //cuidado porque son strings

  console.log({result, resultMal});

  //4.Iteramos el sitio donde tenemos que meter el resultado y lo pintamos
  const resultField = document.querySelector('#result');
  resultField.innerHTML = result;
}