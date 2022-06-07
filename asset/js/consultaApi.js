import { mostrarError } from "./error.js";
import { mostrarHTML } from "./mostrarHTML.js"

export default function consultarApi(ciudad, pais) {
  const key = '1a55c5d158bf96feeaef80b138501416';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;
  const p = document.querySelector("#resultado > p");
  const spiner = document.querySelector("#loading");
  const card = document.querySelector("body > main > div > div.card");


  spiner.style.display = "inline-block";
  p.style.display = 'none';
  card.innerHTML = "";
  setTimeout(function () {
    fetch(url)
      .then(res => res.json())//guarda la info de la consulta
      .then(data => {
        if (data.cod === '404') {
          // console.log('Ciudad no encontrada');
          mostrarError('​Ciudad no encontrada.');
        } else {
          mostrarHTML(data.name, data.weather[0].icon, data.sys.country, data.main.temp, data.main.temp_max, data.main.temp_min, data.main.humidity, data.main.pressure);
          console.log(data);
        }
        // console.log(data);
      })
      .finally(() => {
        spiner.style.display = "none";
      })
  }, 200);

}