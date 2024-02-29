/**
 * PETICIONES
 * 
 * LAS PETICIONES SON PARA COMUNICARNOS CON EL BACK, nos comunicamos a través de peticiones HTTP
 * Las peticiones son comunicaciones que realizamos con recursos o servidores externos (APIs).
 * Resultan fundamentales en las webs modernas dónde hay una separación entre backend (soporte de datos)
 * y frontend (mostrar los datos).
 * 
 * Las peticiones antes se realizaban con jquery y ajax. Después se sacaron librerías como axios
 * que facilitaban estas comunicaciones, pero todo esto eran librerías externas que complementaban
 * a Javascript.
 * Javascript sacó su propia librería de comunicación, Fetch API, que es interna y llevan todas las
 * aplicaciones Javascript.
 */

/**
 * Para hacer una petición al back la haremos de la siguiente manera:
 * FETCH(ES UNA PROMESA ASINCRONA)ESTÁ COMPUESTOS DE DOS PARÁMETROS:1 LA URL Y 2 OPCIONES DE CONFIGURACIÓN QUE SON OPCIONALES
 */
fetch(                                                              //UTILIZAMOS LA LIBERIA FETCH PARA HACER LAS COMUNICACIONES CON HTTP
    /** URL */ 'https://pokeapi.co/api/v2/pokemon/ditto',
    /** Opciones de configuración (opcional) */ {
        cache: 'no-cache',
        method: 'POST',
        headers: {}                                               //CUERPO DE LA PETICÓN SON DATOS
    }
);

/**
 * Esta función fetch devuelve una promesa Response,
 * que tendremos que controlar como vimos en el apartado de las promesas
 */

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {                                       
        console.log(response);
    });

/**
 *LAS PETICIONES DE HTTP SE PUEDEN PASAR POR MÉTODOS, UN MÉTODO IMPLICA QUE ES LO QUE VA A REALIZAR ESA PETICION
 * Las peticiones HTTP se pueden pasar con unos métodos HTTP, estos son
 * las operaciones que se realizan sobre una URL:
 * - GET -> la más común, recuperar datos de un servidor. Por defecto en fetch.             //DAME INFORMACION, LANZA RESPUESTAS AL BACK
 * - POST -> Enviar datos a un servidor, generalmente, crear datos en la base de datos.    //CREAR UN NUEVO REGRISTRO O UNA NUEVA IDENTIDAD EN UNA BASE DE DATOS, LOS TIPICOS BOTONES DEL FORMULARIO. ENVÍA RESPUESTAS AL BACK
 * - PUT -> Modifica un recurso (dato de la base de datos) por completo                   //
 * - PATCH -> Modifica parcialmente un recurso de la base de datos                       //PONER UN PARCHE
 * - DELETE -> Borrar un recurso de la base de datos                                    //BORRA
 * 
 * La aceptación o no de estos métodos cae en manos del desarrollador de back.
 * Una URL podría tener sólo GET porque fuera un recurso de sólo lectura, por ejemplo.
 */

/**
 * LAS RESPUESTAS DE LAS PETICIONES SON CON CÓDIGO
 * Las peticiones HTTP tienen unos códigos de respuesta, estos indican el estado
 * de los mismos.
 * 
 * 1xx -> Respuestas informativas (casi no se usan)
 * 2xx -> Respuestas satisfactorias (OK)
 *      200 -> Todo OK
 *      201 -> Recurso creado
 *      204 -> No tiene contenido pero OK
 * 3xx -> Redirecciones (La página se ha cerrado, se ha mudado de dominio, etc)
 * 4xx -> Errores del cliente (Se ha equivocado el front)
 *      400 -> Bad request (Los datos están mal)
 *      401 -> No está logueado y no tiene permiso
 *      403 -> No se puede acceder 
 *      404 -> No se ha encontrado
 *      405 -> El método usado no es correcto
 *      409 -> Conflicto. Has mandado crear algo que ya está creado
 * 5xx -> Errores del servidor (el back se cayó)
 *      500 -> Error interno del servidor (el del back la cagó)
 */

/**
 * Este response entra en el then cuando la respuesta de la petición es un HTTP !== 5xx
 * 
 * Para distinguir entre 1xx, 2xx, 3xx y 4xx tenemos la propiedad 'ok' del response que
 * nos indica si todo ha ido bien.
 */

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            /** Códigos HTTP 1xx, 2xx */
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    });

/**
 * En caso de que sea un error 5xx, pasará por el catch
 */
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            /** Códigos HTTP 1xx, 2xx */
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    })
    .catch((error) => {
        /** Ha habido un error 5xx */
    });

/**
 * Para recuperar los datos, se usa el método 'json()' del response.
 * Este método nos devuelve una nueva promesa que devolverá un string
 */
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            response.json()                                      //ESTO ES UNA FUNCION QUE DEVUELVE UNA PROMESA (es una promesa de una promesa)
                .then((json) => {
                    console.log('JSON con los datos', json);
                })
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    })
    .catch((error) => {
        /** Ha habido un error 5xx */
    });

/**
 * Esta manera está fea, porque hay varios anidamientos, así que lo que se hace es lo siguiente:
 */

//ESTA ES MEJOR FORMA PARA OBTENER LA INFORMACION DEL FETCH
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {                        //   .then((response) => response.json() {     
        if (response.ok) {                      //  .then((json) = {     
            return response.json();            //console.log(json);
            /** Salta a (1) */                // });
        } else {                             // .catch((error) => {
            /** Códigos HTTP 3xx, 4xx */    //console.log(error);
        }                                  // });
    })
    .then((json) => {
        /** (1) */
        console.log('JSON con los datos', json);
    })
    .catch((error) => {
        /** Ha habido un error 5xx */
    });

/**
 * ASYNC / AWAIT
 * También se puede hacer dentro de una función asíncrona con async-await como vimos
 */
async function getDitto() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

        if (!response.ok) {
            throw new Error('No tenemos info');
            /** Esto iría al catch que tenemos abajo */
        }

        const dittoInfo = await response.json();

        return dittoInfo;                      //devuelve una promesa
    } catch (error /** Error 5xx */) {
        console.error(error);
    }
}

 getDitto()                                  //llama a la funcion
 .then((dittoInfo) => {
    console.log(dittoInfo);
 });