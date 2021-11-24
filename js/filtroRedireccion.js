let $buttons = document.querySelectorAll("button");
const $inputSearch = document.getElementById("search");
const $places = document.querySelectorAll(".place");
const d = document;

$buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let sede = button.id;
    switch (sede) {
      case "moron":
        location.href = "sede_moron.html";
        break;
      case "santafe":
        location.href = "sede_santafe.html";
        break;
      case "cordoba":
        location.href = "sede_cordoba.html";
        break;
      case "ituz":
        location.href = "sede_ituzaingo.html";
        break;
    }
  })
);

$inputSearch.addEventListener("keyup", (e) => {
  if (e.key === "Escape") e.target.value = "";

  const $provincias = d.querySelectorAll(".provincia");
  for (let i = 0; i < $provincias.length; i++) {
    $provincias[i].textContent
      .toLowerCase()
      .includes(e.target.value.toLowerCase())
      ? $places[i].classList.remove("filter")
      : $places[i].classList.add("filter");
  }
});
