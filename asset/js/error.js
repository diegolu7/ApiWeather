export function mostrarError(mje) {

  const mensaje = document.querySelector("#resultado > p");
  mensaje.style.display = "inline-block";
  mensaje.style.color = "#e86f5f";
  mensaje.innerText = mje;

  setTimeout(() => {
    mensaje.style.display = "inline-block";
    mensaje.style.color = "#FFFF";
    mensaje.innerText = "Agrega tu ciudad y país, el resultado se mostrará aquí.";
  }, 2000);
}
