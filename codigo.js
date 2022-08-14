
let carrito=[];

if(localStorage.getItem("carrito")){
  carrit0=JSON.parse(localStorage.getItem("carrito"))
}
let lista=document.getElementById("miLista");



renderizarProductos();

function renderizarProductos() {
  for (const producto of productos) {
      lista.innerHTML+=`<li class="col-sm-3 list-group-item">
      <h3> ID: ${producto.id} </h3>
      <img src= ${producto.imagen} width="250" height="250"
      <p> producto: ${producto.nombre}</p>
      <p><strong> $ ${producto.precio} </strong></p>
      <button class= 'btn btn-danger' id='btn${producto.id}'>Comprar</button>
      </li>;
      
  `
  }

  productos.forEach(producto => {
    
    document.getElementById(`btn${producto.id}`).addEventListener("click",function() 
    {agregrarAlCarrito(producto)
    });
  });
}

function agregrarAlCarrito(producto) {
  carrito.push(producto);
  console.log(carrito);
  alert("Producto: "+producto.nombre+ " agregado al carro");
  document.getElementById("tabBody").innerHTML+=`
  <tr>
  <td>${producto.id}</td>
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  </tr>
  `;

  localStorage.setItem("carrito",JSON.stringify(carrito));
}
