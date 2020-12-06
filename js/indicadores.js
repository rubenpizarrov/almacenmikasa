function loadDolar() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://mindicador.cl/api/dolar', true);

    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        let nombre = 'Dolar Observado';
        console.log(data.serie[0].valor);
        agregarElemento(nombre, data.serie[0].valor);
    }

    xhr.send();

}

function loadUF() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://mindicador.cl/api/uf', true);

    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        let nombre = 'UF';
        console.log(data.serie[0].valor);
        agregarElemento(nombre, data.serie[0].valor);
    }

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

function loadUTM() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://mindicador.cl/api/utm', true);

    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        let nombre = 'UTM';
        console.log(data.serie[0].valor);
        agregarElemento(nombre, data.serie[0].valor);
    }

    xhr.send();

}

document.addEventListener("DOMContentLoaded", (e) => {
    loadDolar();
    loadUF();
    loadUTM();
});