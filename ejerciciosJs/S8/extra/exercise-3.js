/* De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y
 obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` 
que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio)
 y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. 
Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. 
De esta forma podremos obtener ya toda la información y pintarla en el html.
 */

const arrayOrdersProducts = [];

const showResult = async () => {
  try {
    const responseOrders = await fetch("http://localhost:3000/orders"); //creamos una constante que es la respuesta del fetch y el await porque el fetch es una promesa a la que hay que esperar.
    const resultOrders = await responseOrders.json(); //resultado de la respuesta en formato json, igual que esperamos al fetch debemos esperar a la respuesta del json. Nos devuelve un array
    const sorteredOrders = resultOrders.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    ); //.sort ordena (a, b) compara el a con el b -- new Date compara las fechas y las ordena de menor a mayor

    const responseProducts = await fetch("http://localhost:3000/products"); //creamos una constante que es la respuesta del fetch y el await porque el fetch es una promesa a la que hay que esperar.
    const resultProducts = await responseProducts.json(); //resultado de la respuesta en formato json, igual que esperamos al fetch debemos esperar a la respuesta del json. Nos devuelve un array

    console.log(sorteredOrders, resultProducts);
    arrayOrdersProducts.push(resultProducts);
    console.log(productForID(54, resultProducts)); //dando un nº nos dice que producto es del array

    for (let order of sorteredOrders) {
      //objetos ordenados por fechas
      let days = order.date; //creamos una constante para que nos seleccione las fechas, individual por cada orden
      console.log(days);
      let products = order.products; //de cada orden sacareremos toda la lista de productos, por cada uno de los pedidos
      for (let product of products) {
        //product obtiene cada objeto interno y cada product queremos obetener el productId
        console.log(productForID(product.productId, resultProducts)); //sacamos de cada producto el id, con la variable de los productos
        console.log("cantidad:" + product.quantity); //obtenemos las cantidades
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const productForID = (id, arrayProduct) => {
  //esta función sólo la llamamos cuando necesitamos usarla
  let resultId = {}; //cuando tengamos un id no existente nunca entrará en el div, cuando itera no entrará en el if. Se quedará como un objeto vacío
  for (let product of arrayProduct) {
    if (id == product.id) {
      resultId = product; //nos dará el objeto del producto, del id especifico
      break;
    }
  }
  return resultId; //nos devuelve el resultado
};

const init = async () => {
  showResult();
};

init();
