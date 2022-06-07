import consultarApi from "./consultaApi.js";

const resultado = document.querySelector('#resultado');
const pais = document.querySelector('#formulario');

window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {
  e.preventDefault();
  // console.log('Buscando Clima');
  const ciudad = document.querySelector("#formulario > input.input").value.trim();
  const pais = document.querySelector('#pais').value;
  const data = consultarApi(ciudad, pais);
}