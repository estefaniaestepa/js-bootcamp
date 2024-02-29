/**
 * Try/catch
 * ES UNA SENTENCIA QUE METEMOS TODO UN TEXTO DENTRO DE UN TRY
 * TRY ES PRUEBA A VER SI ESTO FUNCIONA
 * CATCH ES CUANDO REVIENTE CAPTURA ESE ERROR QUE SURJE : CUANDO PETA LA APLICACIÓN (MUESTRA EL MENSAJE DE ERROR O CANCELA LA ACCIÓN)
 * Se usa para controlar errores que surgan en el código
 */

/**
 * Lanzar errores
 * LANZAR ERROR ES HACER FALLAR A LA APLICACIÓN A PROPÓSITO, PARA QUE LA APLICACIÓN FALLE Y CONTROLEMOS ESE ERROR
 * NORMALMENTE EL TEXTO QUE INDICAMOS ES DEL CUAL NOS HA DADO EL ERROR, ES MEJOR INDICARLO EN INGLÉS
 * Para lanzar un error se lanza de la siguiente manera:
 */

throw new Error(/** Mensaje de error personalizado */ 'Este es un mensaje de error');

/**
 * Controlar errores
 * SI DENTRO DE UNA SENTENCIA TRY CATCH, EL ERROR ENTRA POR EL CATCH Y SE EJECUTA UN TROZO DE CÓDIGO EN ESTE CASO ES UN CONSOLE.LOG
 * Estos errores que lanzamos, si no se controlan, javascript los controla automáticamente y
 * muestra el error en la consola.
 */
try {
    throw new Error('ALERTA ROJA!');                                       //AQUI INDICAMOS DE LO QUE OPDRÍA FALLAR, ESTO ES UN A VARIABLE QUE NORMALEMENTE SE LLAMA ERROR
} catch (/** variable que tiene el mensaje de erorr */ error) {           // SI FALLA EL ERROR ENTRA EN EL CATCH ATRAPA ESE ERROR
    console.log(error);                                                  //MUESTRA EL ERROR
}

/**
 * Cuando se lanza el error, se para la ejecución del código hasta que no se maneje el error.
 * En el ejemplo siguiente, mostrará los siguientes mensajes:
 *    Antes del error
 *    <Error>
 */

try {
    console.log('Antes del error');
    throw new Error('Error');                         //AQUI SE LAZA EL ERROR Y MIRA HACIA ARRIBA, PRIMERO MIRARÁ SI ESTÁ DENTRO DE UN TRY CATCH
    console.log('Después del error');                // Este código no se va a ejecutar
} catch (error) {                                   //CUANDO EL ERROR COMPRUEBA QUE ESTA DENTRO DEL TRY CATCH SE LO VA A PASAR AL CATCH, SI NO HAY MENSAJE DE ERROR JS PARA LA FUNCIÓN. DEL ERROR HACIA ABAJO NO SE EJECUTA
    console.log('error', error);
}

/**
 * No hay que controlar absolutamente todos los errores porque se llenará el código de try..catch.
 * Hay que usarlos en casos muy específicos.
 */

function a(texto) {                                                  //FUNCION QUE RECIBE UN TEXTO
    console.log(texto);

    if (!texto) {                                                 //SI TEXTO ES VACÍO, UNDEFINDED, NULL...
        throw new Error('Texto es vacio');                       //LANZAMOS EL ERROR EN EL CASO QUE ESTE LO QUE HEMOS INDICADO EN EL IF
    }                                                           //EN ESTE CASO ES THROW ES COMO SI FUESE UN RETURN

    console.log('Todo bien');
}

function b(user, texto) {                
    console.log(user);

    try {
        a(texto);

        if (!user) {                                         //NO USUARIO
            throw new Error('Usuario vacío');
        }
    } catch (error) {
        console.error('Error en B', error);
    }

    console.log('Todo bien');
}

function process() {                                    //ESTO ES LA LLAMADA PADRE                                    
    let user = input('Cual es tu usuario'); // pablito
    let texto = input('Cual es el texto'); // ''

    try {                                             //CON ESTO PREVENIMOS LOS ERRORES QUE PUEDAN OCURRIR
        b(user, texto);
    } catch (error) {
        console.error('Error', error);
    }
}

try {                                                 //esto sería como un try catch global
    process();                                       //EJECUTAMOS LA FUNCION LA LLAMAMOS
} catch(error) {
    // error
}

console.log('Todo válido');
