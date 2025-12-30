document.addEventListener('DOMContentLoaded', () => {
    let eventos = [
        { id: 1, nombre: "Clase de Boxeo", fecha: "2025-09-01", cupos: 10, costo: 20, imagen: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg" },
        { id: 2, nombre: "Clase de Spinning", fecha: "2025-09-02", cupos: 5, costo: 15, imagen: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg" },
        { id: 3, nombre: "Yoga", fecha: "2025-09-03", cupos: 8, costo: 10, imagen: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg" }
    ];

    const container = document.getElementById('eventosContainer');

    function renderEventos() {
        container.innerHTML = '';
        eventos.forEach(evento => {
            const div = document.createElement('div');
            div.className = 'col-md-4';
            div.innerHTML = `
                <div class="card card-evento">
                    <img src="${evento.imagen}" class="card-img-top" alt="${evento.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${evento.nombre}</h5>
                        <p class="card-text">Fecha: ${evento.fecha}</p>
                        <p class="card-text">Cupos disponibles: ${evento.cupos}</p>
                        <p class="card-text">Costo: S./${evento.costo}</p>
                        <button class="btn btn-success btnReservar" data-id="${evento.id}" ${evento.cupos === 0 ? 'disabled' : ''}>Reservar Ticket</button>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });

        // Botón reservar
        container.querySelectorAll('.btnReservar').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const evento = eventos.find(e => e.id === id);
                if (evento.cupos > 0) {
                    evento.cupos--;
                    alert(`¡Ticket reservado para ${evento.nombre}!`);
                    renderEventos();
                }
            });
        });
    }

    renderEventos();
});
