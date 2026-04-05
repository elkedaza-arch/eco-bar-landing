// ==================================
// FASE 5 – JAVASCRIPT
// Validación y envío del formulario
// ==================================

document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Detiene el comportamiento del navegador

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const tipo = document.getElementById("tipo").value;
    const checkbox = formulario.querySelector('input[type="checkbox"]');

    if (nombre === "" || email === "") {
      alert("Por favor completa los campos de nombre y correo.");
      return;
    }

    if (!checkbox.checked) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    alert(
      "Gracias, " +
      nombre +
      ". Tu registro como " +
      tipo +
      " ha sido enviado correctamente."
    );

    formulario.reset();
  });

});
