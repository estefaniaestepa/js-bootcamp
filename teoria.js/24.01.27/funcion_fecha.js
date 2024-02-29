// funciones nombradas . 
//Son como los var no aplica a los ámbitos
{
    function nombre() {                              //una funcion nombrada se declara así
      console.log('Soy una funcion nombrada');
    }
}
nombre();                                          // si la tenemos dentro de un ámbito podemos ejecutarla 

//funciones anonimas
//funciones anonimas normales

const anonimaNormal = function(){
  console.log('Soy una funcion anonima normal');
}

anonimaNormal();


/*************** */


{
  const anonimaNormal1 = function(){                 //si declaramos una funcion anonima dentro de un ambito funciona como como una variable normal, que se pueden invocar y se le aplica las mismas normas de ambito que se le aplica a cualquier otra variable
    console.log('Soy una funcion anonima normal');
}
    anonimaNormal1 = 7;                             //deja de ser una funcion para pasar a ser un número
}                                                  //no se puede invocar fuera del ámbito


//funciones de flecha, se utilizan mucho estas funciones en los callbacks
//se aplica lo mismo en las funciones de flecha
{
  const funcionFlecha = () => {                   //esto determina que es una funcion anonima(no tiene nombre la función)
    console.log('Soy una función de flecha');
  }
  const devuelveValor = () => 4;                  //esta duncion siempre devolvería un 4
/* esto es equivalente a esto:
  const devuelveValor = () => {
    return 4;
}*/
}
funcionFlecha();      //invocar o ejecutar una funcion


/*******FUNCION FLECHA DE SUMA******* */

{
  const funcionFlecha2 = () =>{
    console.log('Soy una función de flecha');
  }
  const sumaFlecha = (a, b) => a + b;   //se puede hacer de esta forma o de la siguiente:
  
  const sumaFlecha2 = (a, b) => {
    return a + b;
  }
}

funcionFlecha2();