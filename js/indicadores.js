function loadDolar() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://mindicador.cl/api/dolar", true);
  
    xhr.onload = function () {
      let nombre = "Dolar Observado";
      if (xhr.status >= 200 && xhr.status < 400) {
        let data = JSON.parse(xhr.responseText);
        agregarElemento(nombre, data.serie[0].valor);
      } else {
          agregarElemento(nombre, 'Temporalmente no disponible');
      }
    }
  
    xhr.onerror = function(){console.log("Problemas en la red")};
  
    xhr.send();
}

function loadUF() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://mindicador.cl/api/uf", true);

  xhr.onload = function () {
    let nombre = "Valor UF";
    if (xhr.status >= 200 && xhr.status < 400) {
      let data = JSON.parse(xhr.responseText);
      agregarElemento(nombre, data.serie[0].valor);
    } else {
        agregarElemento(nombre, 'Temporalmente no disponible');
    }
  }

  xhr.onerror = function(){console.log("Problemas en la red")};

  xhr.send();
}

function loadUTM() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://mindicador.cl/api/utm", true);
  
    xhr.onload = function () {
      let nombre = "Valor UTM";
      if (xhr.status >= 200 && xhr.status < 400) {
        let data = JSON.parse(xhr.responseText);
        agregarElemento(nombre, data.serie[0].valor);
      } else {
          agregarElemento(nombre, 'Temporalmente no disponible');
      }
    }
  
    xhr.onerror = function(){console.log("Problemas en la red")};
  
    xhr.send();
}

function agregarElemento(nombre, valor) {
    const listaVentas = document.querySelector("#lista-indicadores");
  
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>$ ${valor} .- CLP </td>
      `;
    listaVentas.appendChild(fila);
  }

document.addEventListener("DOMContentLoaded", (e) => {
  loadDolar();
  loadUF();
  loadUTM();
});
