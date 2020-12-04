////CLASES///
const IVA = 1.19;

//clase venta
class Venta {
  constructor(nombre, correo, punitario, cantidad, total) {
    this.nombre = nombre;
    this.correo = correo;
    this.punitario = punitario;
    this.cantidad = cantidad;
    this.total = total;
  }
}

//clase UI
class UI {
  static mostrarVentas() {
    const ventasGuardadas = [
      {
        nombre: "Juan Perez",
        correo: "juanito@juan.com",
        punitario: 1000,
        cantidad: 10,
        total: 8900,
      },
      {
        nombre: "Maria Jose Perez",
        correo: "mj@jmail.com",
        punitario: 1000,
        cantidad: 10,
        total: 4800,
      },
    ];
    const ventas = ventasGuardadas;

    ventas.forEach((venta) => UI.agregarVenta(venta));
  } //metodo mostrar UI

  static agregarVenta(venta) {
    const listaVentas = document.querySelector("#lista-ventas");

    const fila = document.createElement("tr");

    fila.innerHTML = `
            <td>${venta.nombre}</td>
            <td>${venta.correo}</td>
            <td>$${venta.punitario}</td>
            <td>${venta.cantidad}</td>
            <td>$${venta.total}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
    listaVentas.appendChild(fila);
  }

  static borrarVenta(elemento){
    if (elemento.classList.contains('delete')) {
        elemento.parentElement.parentElement.remove();
    }
  }

  static mostrarAlertas(msg, className){
    
    const div = document.createElement('div'); //nuevo Nodo
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));

    const padre = document.querySelector('#form-venta').parentNode; //Padre
    const formulario = document.querySelector('#form-venta'); //Hijo
    //Inserta el div container despues del tag form
    console.log(padre);
    console.log(formulario);
    padre.insertBefore(div, formulario);
    //Hacer que desaparezca despues de 3 segundos
    setTimeout(()=> document.querySelector('.alert').remove(), 3000);
  }

  static limpiarInputs() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#correo").value = "";
    document.querySelector("#precioUnitario").value = "";
    document.querySelector("#cantidad").value = "";
  }
}

////EVENTOS/////
//Mostrar Ventas
document.addEventListener("DOMContentLoaded", UI.mostrarVentas);

//Agregar Venta
document.querySelector("#form-venta").addEventListener("submit", (e) => {
  //bloquear comportamiento predeterminado
  e.preventDefault();
  //obteniendo valores del formulario
  let totalNeto = 0;
  let total = 0;
  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#correo").value;
  const precio = document.querySelector("#precioUnitario").value;
  const cantidad = document.querySelector("#cantidad").value;

  if (nombre !== "" && correo !== "" && parseInt(cantidad) > 0 && parseInt(precio) > 0) {
    totalNeto = precio * cantidad;
    total = totalNeto * IVA;
    //nueva venta
    const venta = new Venta(nombre, correo, precio, cantidad, total);
    //agregar venta a la tabla
    UI.agregarVenta(venta);
    UI.limpiarInputs();
    UI.mostrarAlertas('Venta Exitosa', 'info');
  } else {
    UI.mostrarAlertas('Debe llenar todos los campos con datos válidos', 'danger');
  }
});

document.querySelector("#lista-ventas").addEventListener("click", (e) => {
    e.preventDefault();
    UI.borrarVenta(e.target);
    UI.mostrarAlertas('Venta Eliminada', 'sucess');
});


