const opcionValores = ["Bs_As", "Sta_Fe", "Cordoba"];
const precios = [
  '<option value="2000" > $2000 </option>',
  '<option value="3500" > $3500 </option>',
];

const d = document;
const $btInscripcion = d.getElementById("bt_inscribite");
const $form = d.getElementById("form-inscripcion");
const $selectProvincia = d.getElementById("provincia");
const $selectEstablecimiento = d.querySelector("#establecimiento");
const $selectHorario = d.querySelector("#horarios");
const LS = localStorage;
let $nombreEst = document.getElementById("nombre__establecimiento");
let $direccion = document.getElementById("direccion__establecimiento");
let $localidad = document.getElementById("localidad__establecimiento");
let $provEst = document.getElementById("provincia__establecimiento");
let $email = document.getElementById("mail__establecimiento");
let $precio = document.getElementById("precio");
//-----------------------------------------------------------------------------
//GUARDAR EN LOCAL STORAGE Y SETEAR LOS SELECT EN FUNCION DE ELLO
/* LS.removeItem();
LS.removeItem();
LS.removeItem(); */
$form.addEventListener("submit", (e) => {
  //e.preventDefault();
  e.stopPropagation();
  console.log($selectProvincia.value);
  console.log($selectEstablecimiento.value);
  console.log($selectHorario.value);
  console.log($precio.value);
  let selects = {
    provincia: $selectProvincia.value,
    lugar: $selectEstablecimiento.value,
    horario: $selectHorario.value,
    precio: $precio.value,
  };
  let instituto = {
    establecimiento: $nombreEst.innerText,
    direccion: $direccion.innerText,
    localidad: $localidad.innerText,
    provincia: $provEst.innerText,
    email: $email.innerText,
  };
  guardarLocalStorage("inscripcion", selects);
  guardarLocalStorage("instituto", instituto);
});

function guardarLocalStorage(variable, obj) {
  LS.setItem(variable, JSON.stringify(obj));
}

d.addEventListener("DOMContentLoaded", () => {
  if (LS.getItem("inscripcion") != null) {
    $selectProvincia.value = JSON.parse(LS.getItem("inscripcion")).provincia;
    validarProvincia();
    $selectEstablecimiento.value = JSON.parse(LS.getItem("inscripcion")).lugar;
    $selectHorario.value = JSON.parse(LS.getItem("inscripcion")).horario;
    validarPrecio($selectHorario.value);
    $precio.value = JSON.parse(LS.getItem("inscripcion")).precio;
  }
  if (LS.getItem("instituto") != null) {
    $nombreEst.innerText = JSON.parse(LS.getItem("instituto")).establecimiento;
    $direccion.innerText = JSON.parse(LS.getItem("instituto")).direccion;
    $localidad.innerText = JSON.parse(LS.getItem("instituto")).localidad;
    $provEst.innerText = JSON.parse(LS.getItem("instituto")).provincia;
    $email.innerText = JSON.parse(LS.getItem("instituto")).email;
  }
});

//--------------------------------------------------------------------------
// SETEAR SELECT ESTABLECIMIENTO EN FUNCION DE LA PROVINCIA
const ciudades = [
  ["Moron", "Ramos Mejia", "San Justo", "Ituzaingo"],
  ["Rafaela", "Venado Tuerto", "Reconquista", "Rosario"],
  ["Capilla del Monte", "Villa Maria", "Villa Gral Belgrano", "La Granja"],
];

function mostrarCiudades(arreglo, lugar) {
  let elementos = "<option selected disables>--Seleccione--</option>";

  for (let i = 0; i < arreglo.length; i++) {
    elementos +=
      '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }

  lugar.innerHTML = elementos;
}

function validarProvincia() {
  let optionValor =
    $selectProvincia.options[$selectProvincia.selectedIndex].value;

  if (optionValor == opcionValores[0]) {
    mostrarCiudades(ciudades[0], $selectEstablecimiento);
  }
  if (optionValor == opcionValores[1]) {
    mostrarCiudades(ciudades[1], $selectEstablecimiento);
  }
  if (optionValor == opcionValores[2]) {
    mostrarCiudades(ciudades[2], $selectEstablecimiento);
  }
}

$selectProvincia.addEventListener("change", function (e) {
  validarProvincia();
  validarPrecio($selectHorario.value);
});
$selectHorario.addEventListener("change", (e) => {
  validarPrecio($selectHorario.value);
});

function validarPrecio(horario) {
  if (horario === "1" || horario === "4") {
    $precio.innerHTML = precios[0];
  }
  if (horario === "2" || horario === "3") {
    $precio.innerHTML = precios[1];
  }
}
