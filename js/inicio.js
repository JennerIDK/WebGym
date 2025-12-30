document.addEventListener('DOMContentLoaded', () => {
  // === Progreso de Peso ===
  const pesoActualEl = document.getElementById('pesoActual');
  const pesoMetaEl = document.getElementById('pesoMeta');
  const barraProgreso = document.getElementById('barraProgreso');
  const btnActualizarPeso = document.getElementById('btnActualizarPeso');

  function actualizarBarra() {
    const actual = parseFloat(pesoActualEl.textContent);
    const meta = parseFloat(pesoMetaEl.textContent);
    const progreso = ((actual - meta) <= 0) ? 100 : ((meta / actual) * 100);
    barraProgreso.style.width = `${Math.min(progreso, 100)}%`;
  }

  btnActualizarPeso.addEventListener('click', () => {
    const nuevoPeso = prompt('Ingresa tu nuevo peso (kg):');
    if (nuevoPeso && !isNaN(nuevoPeso)) {
      pesoActualEl.textContent = nuevoPeso;
      actualizarBarra();
    }
  });

  actualizarBarra();

  // === Actualizar Records ===
  const btnActualizarRecords = document.getElementById('btnActualizarRecords');
  btnActualizarRecords.addEventListener('click', () => {
    const sentadilla = prompt('Nuevo record Sentadilla (kg):', document.getElementById('sentadilla').textContent);
    const banca = prompt('Nuevo record Banca (kg):', document.getElementById('banca').textContent);
    const pesoMuerto = prompt('Nuevo record Peso Muerto (kg):', document.getElementById('pesoMuerto').textContent);
    
    if (sentadilla) document.getElementById('sentadilla').textContent = sentadilla;
    if (banca) document.getElementById('banca').textContent = banca;
    if (pesoMuerto) document.getElementById('pesoMuerto').textContent = pesoMuerto;
  });

  // === Slider automático ===
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
});
