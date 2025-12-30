/*document.addEventListener('DOMContentLoaded', async () => {
    // Inicializar chart asistencia
    const ctxAsistencia = document.getElementById('asistenciaChart').getContext('2d');
    const asistenciaChart = new Chart(ctxAsistencia, {
        type: 'bar',
        data: {
            labels: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
            datasets: [{
                label: 'Asistencia',
                data: [],
                backgroundColor: '#007bff'
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });

    // Inicializar chart clases
    const ctxClases = document.getElementById('clasesChart').getContext('2d');
    const clasesChart = new Chart(ctxClases, {
        type: 'pie',
        data: { labels: [], datasets: [{ data: [], backgroundColor: ['#ff6384','#36a2eb','#ffce56','#4bc0c0','#9966ff'] }] },
        options: { responsive: true }
    });

    // Traer datos del backend
    try {
        const response = await fetch('http://localhost:8080/api/staff/dashboard');
        const data = await response.json();

        // Actualizar métricas
        document.getElementById('asistenciaActual').innerText = data.asistenciaActual;
        document.getElementById('horaPico').innerText = data.horaPico;
        document.getElementById('membresiasHoy').innerText = data.membresiasHoy;

        // Actualizar chart asistencia
        asistenciaChart.data.datasets[0].data = data.asistenciaHoras;
        asistenciaChart.update();

        // Actualizar chart clases
        clasesChart.data.labels = data.clasesDelDia.map(c => c.nombre);
        clasesChart.data.datasets[0].data = data.clasesDelDia.map(c => c.inscritos);
        clasesChart.update();

    } catch (error) {
        console.error('Error al cargar dashboard:', error);
    }
});*/


// mets.js - simulador con membresías que suben y hora pico fija
// mets.js - Simulación dashboard staff
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar chart asistencia
    const ctxAsistencia = document.getElementById('asistenciaChart').getContext('2d');
    const asistenciaChart = new Chart(ctxAsistencia, {
        type: 'bar',
        data: {
            labels: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
            datasets: [{
                label: 'Asistencia',
                data: [],
                backgroundColor: '#007bff'
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });

    // Inicializar chart clases
    const ctxClases = document.getElementById('clasesChart').getContext('2d');
    const clasesChart = new Chart(ctxClases, {
        type: 'pie',
        data: { labels: [], datasets: [{ data: [], backgroundColor: ['#ff6384','#36a2eb','#ffce56','#4bc0c0','#9966ff'] }] },
        options: { responsive: true }
    });

    let membresiasHoy = 0;

    // Función para generar datos simulados
    function generarDatos() {
        membresiasHoy += Math.floor(Math.random() * 2); // va subiendo poco a poco
        return {
            asistenciaActual: Math.floor(Math.random() * 30) + 1,
            horaPico: '18:00',
            membresiasHoy: membresiasHoy,
            asistenciaHoras: Array.from({length: 15}, () => Math.floor(Math.random() * 10)),
            clasesDelDia: [
                { nombre: 'CrossFit', inscritos: Math.floor(Math.random() * 20) },
                { nombre: 'Yoga', inscritos: Math.floor(Math.random() * 15) },
                { nombre: 'Spinning', inscritos: Math.floor(Math.random() * 18) },
                { nombre: 'Pilates', inscritos: Math.floor(Math.random() * 12) },
            ]
        };
    }

    // Función para actualizar métricas y gráficos
    function actualizarDashboard() {
        const data = generarDatos();

        document.getElementById('asistenciaActual').innerText = data.asistenciaActual;
        document.getElementById('horaPico').innerText = data.horaPico;
        document.getElementById('membresiasHoy').innerText = data.membresiasHoy;

        asistenciaChart.data.datasets[0].data = data.asistenciaHoras;
        asistenciaChart.update();

        clasesChart.data.labels = data.clasesDelDia.map(c => c.nombre);
        clasesChart.data.datasets[0].data = data.clasesDelDia.map(c => c.inscritos);
        clasesChart.update();
    }

    // Primera carga
    actualizarDashboard();

    // Actualizar cada 20 segundos
    setInterval(actualizarDashboard, 20000);
});
