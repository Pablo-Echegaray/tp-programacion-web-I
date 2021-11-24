let optionValor;
let establecimiento;

window.onload = function () {
  establecimiento = document.getElementById("establecimiento");
  establecimiento.onchange = function () {
    datosEstablecimiento();
  };
};
function datosEstablecimiento() {
  let $nombreEst = document.getElementById("nombre__establecimiento");
  let $direccion = document.getElementById("direccion__establecimiento");
  let $localidad = document.getElementById("localidad__establecimiento");
  let $provEst = document.getElementById("provincia__establecimiento");
  let $email = document.getElementById("mail__establecimiento");
  optionValor = establecimiento.options[establecimiento.selectedIndex].value;
  optionValor = optionValor.toLowerCase();
  switch (optionValor) {
    case "moron":
      $nombreEst.innerText = "Centro de Cultura Inglesa Lord Byron";
      $direccion.innerText = "Carlos Pellegrini 711";
      $localidad.innerText = "Morón";
      $provEst.innerText = "Buenos Aires";
      $email.innerText = "sede_moron@gmail.com";
      break;
    case "ramos mejia":
      $nombreEst.innerText = "DoneWise";
      $direccion.innerText = "Necochea 437";
      $localidad.innerText = "Ramos Mejia";
      $provEst.innerText = "Buenos Aires";
      $email.innerText = "sede_ramos@gmail.com";
      break;
    case "san justo":
      $nombreEst.innerText = "Dream";
      $direccion.innerText = "Av. Dr. Ignacio Arieta 3227";
      $localidad.innerText = "San Justo";
      $provEst.innerText = "Buenos Aires";
      $email.innerText = "sede_san_justo@gmail.com";
      break;
    case "ituzaingo":
      $nombreEst.innerText = "Instituto de ingles Kells";
      $direccion.innerText = "Manuel Rodríguez Fragio 536";
      $localidad.innerText = "Ituzaingo";
      $provEst.innerText = "Buenos Aires";
      $email.innerText = "sede_ituzaingo@gmail.com";
      break;
    case "rafaela":
      $nombreEst.innerText = "Instituto de Rafa Gorgori";
      $direccion.innerText = "Calle falsa 123";
      $localidad.innerText = "Rafaela";
      $provEst.innerText = "Santa Fe";
      $email.innerText = "sede_rafa@gmail.com";
      break;
    case "venado tuerto":
      $nombreEst.innerText = "Instituto Barba Roja";
      $direccion.innerText = "Oceano Atlantico 4554";
      $localidad.innerText = "Venado Tuerto";
      $provEst.innerText = "Santa Fe";
      $email.innerText = "sede_barba@gmail.com";
      break;
    case "reconquista":
      $nombreEst.innerText = "Instituto de Idiomas";
      $direccion.innerText = "Av Juan Manuel de Rosas 854";
      $localidad.innerText = "Reconquista";
      $provEst.innerText = "Santa Fe";
      $email.innerText = "sede_idiomas@gmail.com";
      break;
    case "rosario":
      $nombreEst.innerText = "Instituto de Rosario";
      $direccion.innerText = "Mariano Moreno 1034";
      $localidad.innerText = "Rosario";
      $provEst.innerText = "Santa Fe";
      $email.innerText = "sede_rosario@gmail.com";
      break;
    case "capilla del monte":
      $nombreEst.innerText = "Instituto del Monte";
      $direccion.innerText = "Hipolito Yrigoyen 224";
      $localidad.innerText = "Capilla del Monte";
      $provEst.innerText = "Cordoba";
      $email.innerText = "sede_delmonte@gmail.com";
      break;
    case "villa maria":
      $nombreEst.innerText = "Instituto Maria";
      $direccion.innerText = "Juan Manuel Belgrano 524";
      $localidad.innerText = "Villa Maria";
      $provEst.innerText = "Cordoba";
      $email.innerText = "sede_maria@gmail.com";
      break;
    case "villa gral belgrano":
      $nombreEst.innerText = "Instituto Belgrano";
      $direccion.innerText = "Peñaloza 624";
      $localidad.innerText = "Villa Gral Belgrano";
      $provEst.innerText = "Cordoba";
      $email.innerText = "sede_belgrano@gmail.com";
      break;
    case "la granja":
      $nombreEst.innerText = "Instituto Cisnes";
      $direccion.innerText = "Echandia 1124";
      $localidad.innerText = "La Granja";
      $provEst.innerText = "Cordoba";
      $email.innerText = "sede_cisnes@gmail.com";
      break;
    default:
      $nombreEst.innerText = " ";
      $direccion.innerText = " ";
      $localidad.innerText = " ";
      $provEst.innerText = " ";
      $email.innerText = " ";
      break;
  }
}
