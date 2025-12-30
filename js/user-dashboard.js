document.addEventListener('DOMContentLoaded', () => {
  // ====== Gráfico de progreso ======
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Completado', 'Faltante'],
      datasets: [{
        data: [70, 30],
        backgroundColor: ['#0d6efd', '#e9ecef']
      }]
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: { display: false }
      }
    }
  });

  // ====== Actualizar peso ======
  const btnCambiarPeso = document.getElementById('btnCambiarPeso');
  const pesoActual = document.getElementById('pesoActual');

  btnCambiarPeso.addEventListener('click', () => {
    const nuevoPeso = prompt('Ingresa tu nuevo peso:');
    if (nuevoPeso && !isNaN(nuevoPeso)) {
      pesoActual.textContent = `${nuevoPeso} kg`;
    } else {
      alert('Por favor ingresa un número válido.');
    }
  });

  // ====== Slider con animación ======
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    slides[currentIndex].classList.add('exit-left');

    currentIndex = (currentIndex + 1) % slides.length;

    // Reset de clases anteriores
    slides.forEach((slide, i) => {
      if (i !== currentIndex) slide.classList.remove('active', 'exit-left');
    });

    slides[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 4000);

  // ====== Reservas en Clases ======
  const reservarBtns = document.querySelectorAll(".btn-reservar");
  const ticketContainer = document.getElementById("ticket-container");

  if (reservarBtns.length > 0) {
    reservarBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const clase = this.closest(".card").querySelector(".card-title").textContent;
        const ticket = document.createElement("p");
        ticket.textContent = `Ticket reservado para ${clase}`;
        ticketContainer.appendChild(ticket);
        alert(`¡Reservaste tu lugar en ${clase}!`);
      });
    });
  }
});
