// ======================================
// ECO BAR – PERSISTENCIA + ENVÍO
// ======================================

document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.querySelector("form");

  const campos = ["nombre", "email", "tipo"];

  // ✅ 1. RESTAURAR DATOS AL CARGAR
  campos.forEach(function(campo) {
    const valor = localStorage.getItem("eco_" + campo);
    if (valor) {
      document.getElementById(campo).value = valor;
    }
  });

  // ✅ 2. GUARDAR AUTOMÁTICAMENTE
  campos.forEach(function(campo) {
    const elemento = document.getElementById(campo);
    elemento.addEventListener("input", function(e) {
      localStorage.setItem("eco_" + campo, e.target.value);
    });
  });

  // ✅ 3. VALIDACIÓN Y ENVÍO
  formulario.addEventListener("submit", function () {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkbox = formulario.querySelector('input[type="checkbox"]');

    if (nombre === "" || email === "") {
      alert("Por favor completa los campos de nombre y correo.");
      event.preventDefault();
      return;
    }

    if (!checkbox.checked) {
      alert("Debes aceptar los términos y condiciones.");
      event.preventDefault();
      return;
    }

    // ✅ mensaje (NO bloquea envío)
    alert("Gracias " + nombre + ", tu registro fue enviado correctamente.");

    // ✅ limpiar almacenamiento
    campos.forEach(function(campo) {
      localStorage.removeItem("eco_" + campo);
    });

    localStorage.setItem("eco_registrado", "true");
  });

});