//traer el valor de los input del html
let nombre = document.getElementById("nombre")
let cantidad = document.getElementById("cantidad")
let precio = document.getElementById("precio")
//localStorage.getItem - trae la informacion del local
//JSON.parse - hace la conversion a la hora de traer la informacion
//localStorage.setIten - guarda la informacion en el localStorage
//JSON.stringify - hace la conversion a la hora de guardar en el local storage

function guardar() {
   if (nombre.value != "" && cantidad.value != "" && precio.value != "") {

     let productos = JSON.parse(localStorage.getItem("canasta")) || [];

     //objeto o registro
     let producto = {
        nombre: nombre.value,
        cantidad: cantidad.value,
        precio: precio.value,
        id:Math.random()
     }
        //productos es nuestra lista, nuestro array que se va a almacenar en el local. 
        //con el .push metemos el nuevo dato a la lista o array
     productos.push(producto);

     //seteamos la nueva lista de productos en el local storage
        localStorage.setItem("canasta", JSON.stringify(productos));

        alert ('Producto Agregado');

    }else{
        alert ('campos incompletos');
    }

};


let producto = JSON.parse(localStorage.getItem("canasta")) || [];

let shopContent = document.getElementById('inventario');

for (let index = 0; index < producto.length; index++) {
    
    let div = document.createElement('div');

    let boton = document.createElement('button');

    boton.textContent = "ELIMINAR";

    boton.id = producto[index].id;//se le esta colocando el mismo id del producto al boton creado
    
    console.log(); //como se esta utilizando un for hay que referirse a cada id con index

    div.innerHTML = "<br>Producto: "+ producto[index].nombre + "<br> Precio: " + producto[index].precio + "<br> Cantidad: " + producto[index].cantidad;

    shopContent.appendChild(div);
    
    shopContent.appendChild(boton);

    boton.addEventListener('click', function () {
       
        let filtrado = producto.filter(e => e.id != boton.id);
         console.log(filtrado);
        localStorage.removeItem("canasta");
        
        localStorage.setItem("canasta", JSON.stringify(filtrado))

        window.location.reload()
    })
}
