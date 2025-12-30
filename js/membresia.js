document.addEventListener('DOMContentLoaded', () => {
  const btnActualizar = document.getElementById('btnActualizarMembresia');
  const planActualEl = document.getElementById('planActual');
  const fechaVencimientoEl = document.getElementById('fechaVencimiento');
  const tipoPlanEl = document.getElementById('tipoPlan');
  const mesesAgregarEl = document.getElementById('mesesAgregar');
  const mensajeEl = document.getElementById('mensajeActualizacion');
  const historialPagosEl = document.getElementById('historialPagos');

  btnActualizar.addEventListener('click', () => {
    // Cambiar tipo de plan
    planActualEl.textContent = tipoPlanEl.value;

    // Actualizar fecha de vencimiento
    let fechaActual = new Date(fechaVencimientoEl.textContent.split('/').reverse().join('-'));
    let mesesAgregar = parseInt(mesesAgregarEl.value);
    fechaActual.setMonth(fechaActual.getMonth() + mesesAgregar);

    // Formatear fecha
    const dia = String(fechaActual.getDate()).padStart(2,'0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2,'0');
    const anio = fechaActual.getFullYear();
    fechaVencimientoEl.textContent = `${dia}/${mes}/${anio}`;

    // Añadir al historial
    const li = document.createElement('li');
    li.textContent = `Agregado ${mesesAgregar} mes(es) - ${dia}/${mes}/${anio}`;
    historialPagosEl.prepend(li);

    // Mensaje de confirmación
    mensajeEl.textContent = '¡Membresía actualizada exitosamente!';
    setTimeout(() => mensajeEl.textContent = '', 3000);
  });
});
