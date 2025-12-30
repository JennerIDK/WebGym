// staff.js - login del Staff
document.addEventListener('DOMContentLoaded', function() {
    const btnLogin = document.getElementById('btnLogin');
    const inputCodigo = document.getElementById('codigoEmpleado');

    btnLogin.addEventListener('click', async function() {
        const codigoEmpleado = inputCodigo.value.trim();

        if (!codigoEmpleado) {
            alert("Por favor, ingresa tu código.");
            return;
        }

        try {
            // Petición al backend
            const response = await fetch('http://localhost:8080/api/staff/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ codigoEmpleado })
            });

            if (response.ok) {
                // Login correcto, redirigir al dashboard del staff
                window.location.href = 'dashboard.html'; // ajusta la ruta si es necesario
            } else if (response.status === 401) {
                alert("Código inválido. Inténtalo de nuevo.");
            } else {
                alert("Ocurrió un error. Inténtalo más tarde.");
            }

        } catch (error) {
            console.error("Error en la petición:", error);
            alert("No se pudo conectar con el servidor. Revisa tu conexión.");
        }
    });

    // Opción: permitir presionar Enter para enviar
    inputCodigo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            btnLogin.click();
        }
    });
});
