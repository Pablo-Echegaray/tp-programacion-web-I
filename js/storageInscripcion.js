const d = document;
const ls = localStorage;
const $descGral = d.getElementById("desc-gral");
const $descHorario = d.getElementById("desc-horario");
const $descPrecio = d.getElementById("desc-precio");

d.addEventListener("DOMContentLoaded", () => {
  generarDescripcion();
});

function obtenerDatos() {
  const establecimiento = JSON.parse(ls.getItem("instituto")).establecimiento;
  const localidad = JSON.parse(ls.getItem("instituto")).localidad;
  const provincia = JSON.parse(ls.getItem("instituto")).provincia;
  const horario = JSON.parse(ls.getItem("inscripcion")).horario;
  const precio = JSON.parse(ls.getItem("inscripcion")).precio;

  const datosObtenidos = {
    establecimiento,
    localidad,
    provincia,
    horario,
    precio,
  };
  return datosObtenidos;
}

function validarHorarioYModalidad(horario) {
  let horarioModalidad = "";
  horario === "1"
    ? (horarioModalidad = "9:00 HS, modalidad online")
    : horario === "2"
    ? (horarioModalidad = "12:00 HS, modalidad presencial")
    : horario === "3"
    ? (horarioModalidad = "16:00 HS, modalidad presencial")
    : horario === "4"
    ? (horarioModalidad = "19:00 HS, modalidad online")
    : (horarioModalidad = "");

  return horarioModalidad;
}

function generarDescripcion() {
  let descGral = `Usted va a cursar en <strong>${
      obtenerDatos().establecimiento
    }</strong> de la localidad de <strong>${
      obtenerDatos().localidad
    }</strong>, provincia de <strong>${obtenerDatos().provincia}</strong>.`,
    descHorario = `El horario elegido es <strong>${validarHorarioYModalidad(
      obtenerDatos().horario
    )}</strong>.`,
    descPrecio = `El costo del curso es de <strong>$ ${
      obtenerDatos().precio
    }</strong>.`;

  $descGral.innerHTML = descGral;
  $descHorario.innerHTML = descHorario;
  $descPrecio.innerHTML = descPrecio;
}
