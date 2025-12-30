document.addEventListener('DOMContentLoaded', () => {
    // Datos simulados del staff
    const staff = {
        nombre: "Juan Perez",
        correo: "juan.perez@email.com",
        rol: "Instructor",
        foto: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        password: "123456"
    };

    // Inputs
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputRol = document.getElementById('rol');
    const inputFoto = document.getElementById('inputFoto');
    const fotoPerfil = document.getElementById('fotoPerfil');
    const perfilForm = document.getElementById('perfilForm');

    const passActual = document.getElementById('passActual');
    const passNueva = document.getElementById('passNueva');
    const passConfirmar = document.getElementById('passConfirmar');

    // Cargar datos iniciales
    function cargarDatos() {
        inputNombre.value = staff.nombre;
        inputCorreo.value = staff.correo;
        inputRol.value = staff.rol;
        fotoPerfil.src = staff.foto;
    }

    cargarDatos();

    // Cambiar foto
    document.getElementById('btnCambiarFoto').addEventListener('click', () => {
        const file = inputFoto.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                fotoPerfil.src = e.target.result;
                staff.foto = e.target.result;
                alert('Foto actualizada con éxito.');
            };
            reader.readAsDataURL(file);
        } else {
            alert('Selecciona una imagen primero.');
        }
    });

    // Guardar cambios
    perfilForm.addEventListener('submit', (e) => {
        e.preventDefault();
        staff.nombre = inputNombre.value.trim();
        staff.correo = inputCorreo.value.trim();

        // Validar cambio de contraseña
        if (passActual.value || passNueva.value || passConfirmar.value) {
            if (passActual.value !== staff.password) {
                alert('Contraseña actual incorrecta.');
                return;
            }
            if (passNueva.value !== passConfirmar.value) {
                alert('Las nuevas contraseñas no coinciden.');
                return;
            }
            staff.password = passNueva.value;
            alert('Contraseña actualizada correctamente.');
        }

        alert('Perfil actualizado correctamente.');
        passActual.value = passNueva.value = passConfirmar.value = '';
    });
});
