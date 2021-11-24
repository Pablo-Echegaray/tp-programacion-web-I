const doc = document;

doc.addEventListener("DOMContentLoaded", () => {
  contactFormValidations();
});

function contactFormValidations() {
  const $form = doc.querySelector("#form"),
    $inputs = doc.querySelectorAll("#form [required]");

  console.log($inputs);

  $inputs.forEach((input) => {
    const $span = doc.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  doc.addEventListener("keyup", (e) => {
    if (e.target.matches("#form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      //console.log($input, pattern);
      if (pattern && $input.value !== "") {
        //console.log("El input tiene patron");
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? doc.getElementById($input.name).classList.add("is-active")
          : doc.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        //console.log("El input NO tinene patron");
        return $input.value === ""
          ? doc.getElementById($input.name).classList.add("is-active")
          : doc.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  doc.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando Formulario");

    const $loader = doc.querySelector(".contact-form-loader"),
      $response = doc.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
