const productos =  [
    {id: '1', name: "Ladrillos DOM", desc: "Punto extra", imgUrl: 'img/ladrillos.jpg'}, 
    {id: '2', name: "Carreteras Array", desc: "Dos puntos extra", imgUrl: 'img/carreteras.jpg'},
    {id: '3', name: "lacasitos For", desc: "Ejercicios Extra fuera", imgUrl: 'img/candy.jpg'},
    {id: '4', name: "caramelos strings", desc: "Descanso 15 min", imgUrl: 'img/caramelos.jpg'},
    {id: '5', name: "Fresas Bucle", desc: "Clase sin teoría", imgUrl: 'img/fresas.jpg'},
    {id: '6', name: "Ositos Callback", desc: "Tod@s tenemos un 10", imgUrl: 'img/ositos.jpg'}, 
    {id: '7', name: "Nubes Flecha", desc: "Que cuente un chiste Juanma", imgUrl: 'img/nubes.jpg'},
    {id: '8', name: "Palitos Operator", desc: "Resolver ejercicio Adrián", imgUrl: 'img/palos.jpg'},
    {id: '9', name: "Melones Intervals", desc: "Resolver ejercicio Mathías", imgUrl: 'img/melones.jpg'},
    {id: '10', name: "Chocolate Timeout", desc: "Resolver ejercicio Helena", imgUrl: 'img/chocolate.jpg'},
    {id: '11', name: "Pipas Map", desc: "Resolver ejercicio Ale", imgUrl: 'img/pipas.jpg'},
    {id: '12', name: "Gusanitos Promesas", desc: "Resolver ejercicio Jaime", imgUrl: 'img/gusanitos.jpg'},
    {id: '13', name: "Snak Reduce", desc: "Resolver ejercicio Lupe", imgUrl: 'img/gumblis.jpg'}
  ];

  const contenedor = document.getElementById('contenedor');
  const carrito = []; 
  const productosCarrito = document.getElementById('productos-carrito');
  const listaCarrito = document.getElementById('lista-carrito');
  const iconoCarrito = document.getElementById('carrito-icono');
  
  productos.forEach(producto => {        
    const div = document.createElement('div');   
    div.innerHTML = `
      <img src="${producto.imgUrl}" alt="${producto.name}" />
      <div class="informacion">
        <p>${producto.name}</p>
        <p class="precio">${producto.desc}<span></span></p>
        <button class="btn-agregar" onclick="agregarAlCarrito('${producto.id}')">Añadir</button>
      </div>
    `;
    contenedor.appendChild(div);                                                                 
  });
  
  function agregarAlCarrito(id) {       
    const productoSeleccionado = productos.find(producto => producto.id === id);  
    carrito.push(productoSeleccionado);  
    console.log("Producto añadido al carrito:", productoSeleccionado);
    console.log("Carrito actual:", carrito);
    mostrarProductosCarrito();
    marcarCarrito();
  }
  
  function mostrarProductosCarrito() {
    productosCarrito.innerHTML = ''; // Limpiamos el contenido anterior
    
    carrito.forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>${producto.name}</p>
        <img src="${producto.imgUrl}" alt="${producto.name}" />
        <button class="btn-eliminar" onclick="eliminarDelCarrito('${producto.id}')">Eliminar</button>
      `;
      productosCarrito.appendChild(div);
    });
  }
  
  function eliminarDelCarrito(id) {
    const index = carrito.findIndex(producto => producto.id === id);
    if (index !== -1) {
      carrito.splice(index, 1);
      mostrarProductosCarrito();
      marcarCarrito();
    }
  }
  
  function marcarCarrito() {
    if (carrito.length > 0) {
      iconoCarrito.classList.add('carrito-lleno');
    } else {
      iconoCarrito.classList.remove('carrito-lleno');
    }
  }
  
  const botonCarrito = document.querySelector('.carrito'); 
  
  botonCarrito.addEventListener("click", function(){ 
      if (listaCarrito.style.display === 'none') {
          listaCarrito.style.display = 'block';
      } else {
          listaCarrito.style.display = 'none';
      }
  });