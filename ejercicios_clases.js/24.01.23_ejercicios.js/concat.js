function calculate() {
  const textDocument1 = document.querySelector('input[name = "text1"]').value;
  const textDocument2 = document.querySelector('input[name = "text2"]').value;
  const textDocument3 = parseInt(
    document.querySelector('input[name = "text3"]').value
  );

  if (isNaN(textDocument3)) {
    alert("Por favor ingrese un número");
  } else if (textDocument3 <= 17) {
    alert("Lo siento la edad mínima es 18 años");
  } else {
    alert("Usuario registrado");

    const totalName = `Hola mi nombre es ${textDocument1} ${textDocument2} y tengo ${textDocument3} años.`;
    const resultadoTotal = document.querySelector("#result");
    resultadoTotal.innerHTML = totalName;
  }
}
