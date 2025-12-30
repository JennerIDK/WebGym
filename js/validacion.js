// credential validator
document.addEventListener("DOMContentLoaded", function () {
  const tipoDocumento = document.getElementById("tipoDocumento");
  const numeroDocumento = document.getElementById("numeroDocumento");

  function actualizarValidacion() {
    const tipo = tipoDocumento.value;

    if (tipo === "DNI") {
      numeroDocumento.setAttribute("maxlength", "8");
      numeroDocumento.setAttribute("placeholder", "Ingresa tu DNI");
    } else if (tipo === "Pasaporte") {
      numeroDocumento.setAttribute("maxlength", "12");
      numeroDocumento.setAttribute("placeholder", "Ingresa tu Pasaporte");
    } else if (tipo === "carnet de extranjería") {
      numeroDocumento.setAttribute("maxlength", "20");
      numeroDocumento.setAttribute(
        "placeholder",
        "Ingresa tu carnet de extranjería"
      );
    }
  }

  tipoDocumento.addEventListener("change", actualizarValidacion);
  actualizarValidacion(); // Ejecutar al cargar
});
// end credential validator
