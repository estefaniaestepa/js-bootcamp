//INTERVALS : QUEREMOS QUE ALGO SE EJECUTE CADA X MILISENGUNDOS
// ES UN INTERVALO, CADA X TIEMPO HAGO ALGO DE FORMA INFINITA
//Diferencia con timeout este se ejecuta una vez y interval de forma infinita


const intervalID = setInterval( /*Handler*/ () =>{       //Handler, es una función que ejecutará algo cuando se termine el tiempo indicado en el bucle. Es un parámetro para la función
  console.log('Intervalo');                             //cada cierto tiempo que le hemos indicado hará algo, en este caso el console.log
}, /*Tiempo (ms) */ 1000);                             //(milisegundos = segundos x 1000 (2*1000 = 2seg))

clearInterval(intervalID);                            //se necesita esta función clearInterval para parar la función. SIEMPRE SE NECESITAMOS ESTO PARA QUE PARE, SI NO, NUNCA PARARÍA


//La utilidad de esto es? : por ejemplos:
//sincronizar datos que cambian rápido, casi en tiempo real. Podemos poner un setInterval que cada x segundos refresque los datos, de tal forma que más o menos tenemos los datos actualizados. 
//chequear los datos, por ejemplo de una tabla o de un gráfico queremos que se actualice en tiempo real y que vaya. Y que el grafico vaya dibujando 
                      //como por ejemplo los gráficos de la bolsa. Por ejemplo refrescamos cada minuto y configuramos que cada ese tiempo haga una petición y que nos diga el valor en ese minuto
                     //entonces ir a mi JS y pintar cuanto vale esa acción en ese minuto, de tal forma que cada ese tiempo vamos viendo, si va subiendo o va bajando...
//para medir cuanto tiempo pasa un usuario en la página, haremos un id con ese usuario y hacemos que cada vez que entre en la página un setInterval, para que cada cierto tiempo el que le hemos indicado, 
                    //manda una petición al back diciendole que sume ese tiempo, va a la base datos y le va sumando el tiempo
                   //esto es muy práctico por ejemplo en una página cuanto tiempo pasa un usuario en una cesta, para saber si nuestro producto es atractivo o no.

                   
/****************************************EJEMPLO PRÁCTICO******************************************************************************************************************************************** */


//VEAMOS UN EJEMPLO:

//setInterval YA INTEGRA LA FUNCIONALIDAD DE REPETIRSE ASÍ MISMO, POR LO QUE ES MÁS SENCILLO CREAR LA FUNCIÓN DE REPETIR QUE timeout

let i = 0;
let intervalID1 = null;                           //esto es el ID intervalID1

intervalID1 = setInterval( () => {
if(i === 3) {                                   // cuando llega a la condición que queremos (i ===3),le indicamos que cada 3 segundos tiene que hacer una cosa, hasta que decidamos pararlo
  clearInterval(intervalID1);                   // hace un clearInterval, es decir que para el bucle y para la función
}else{
  console.log('Hola');
  i++;                                      
}

}, 3000)                                    //cada 3 segundos se repite la función 
    //el tiempo es su segundo parámetro, es opcional podmeos no ponerlo y se va a ejecutar como un bucle, todo el rato porque no hay tiempo de retraso no para. Es conveniente siempre ponerlo