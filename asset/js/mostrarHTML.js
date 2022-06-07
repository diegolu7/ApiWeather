
export function mostrarHTML(nombre, icono, estado, temp, temp_max, temp_min, humedad, presion) {
  const card = document.querySelector("body > main > div > div.card");
  temp = temp - 273.15;
  temp_max = temp_max - 273.15;
  temp_min = temp_min - 273.15;
  card.innerHTML = `
  <h2 class="card__title">${nombre} / ${estado}</h2>
  <img class="card__img" src="/asset/img/${icono}.png" alt="clima">
  <h3 class="card__temp">${temp === Math.trunc(temp) ? Math.trunc(temp) : temp.toFixed(1)} °C</h3 >
  <p class="card__max-min"><strong>Max: </strong>${temp_max === Math.round(temp_max) ? Math.round(temp_max) : temp_max.toFixed(1)} °C / <strong>Min:</strong> ${temp_min === Math.round(temp_min) ? Math.round(temp_min) : temp_min.toFixed(1)} °C</p>
  <p class="card__max-min"><strong>Hum:</strong> ${humedad} %&nbsp;&nbsp;<strong>P:</strong> ${presion} Hpa </p>
  `;
}
{/* <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icono}.svg" alt="clima">
<img class="card__img" src="/asset/img/${icono}.png" alt="clima"> */ }



