const $porProvincia = document.getElementById("refinar"),
  $porIdioma = document.getElementById("idioma");

$porProvincia.addEventListener("change", (e) => {
  console.log(e.target.value);

  const $cursos = document.querySelectorAll(".curso");
  for (let i = 0; i < $cursos.length; i++) {
    console.log($cursos[i].childNodes[3].textContent.toLowerCase());

    $cursos[i].childNodes[3].textContent
      .toLowerCase()
      .includes(e.target.value.toLowerCase())
      ? $cursos[i].classList.remove("filter")
      : $cursos[i].classList.add("filter");
  }
});

$porIdioma.addEventListener("change", (e) => {
  console.log(e.target.value);

  const $cursos = document.querySelectorAll(".curso");
  for (let i = 0; i < $cursos.length; i++) {
    console.log($cursos[i].childNodes[3].textContent.toLowerCase());

    $cursos[i].childNodes[3].textContent
      .toLowerCase()
      .includes(e.target.value.toLowerCase())
      ? $cursos[i].classList.remove("filter")
      : $cursos[i].classList.add("filter");
  }
});
