// script.js
function aprobarRamo(id) {
  const ramo = document.getElementById(`ramo-${id}`);
  ramo.classList.remove("bloqueado");
  const boton = ramo.querySelector("button");
  boton.disabled = true;
  boton.textContent = "Aprobado";

  const abre = ramo.getAttribute("data-abre");
  if (abre) {
    const idsQueAbre = abre.split(",").map(Number);
    idsQueAbre.forEach(ramoId => desbloquearRamo(ramoId));
  }
}

function desbloquearRamo(id) {
  const ramo = document.getElementById(`ramo-${id}`);
  if (ramo && ramo.classList.contains("bloqueado")) {
    ramo.classList.remove("bloqueado");
    const boton = ramo.querySelector("button");
    boton.disabled = false;
    boton.textContent = "Aprobar el ramo";
    boton.setAttribute("onclick", `aprobarRamo(${id})`);
  }
}

