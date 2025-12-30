document.addEventListener('DOMContentLoaded', () => {
    const clasesContainer = document.getElementById('clasesContainer');
    const btnAgregarClase = document.getElementById('btnAgregarClase');
    const modalClase = new bootstrap.Modal(document.getElementById('modalClase'));
    const claseForm = document.getElementById('claseForm');

    const inputNombre = document.getElementById('nombre');
    const inputCupos = document.getElementById('cupos');
    const inputCosto = document.getElementById('costo');
    const inputImagen = document.getElementById('imagen');
    const inputIndex = document.getElementById('claseIndex');

    let clases = [
        { nombre: 'Boxeo', cupos: 15, costo: 50, imagen: 'https://images.pexels.com/photos/4761796/pexels-photo-4761796.jpeg' },
        { nombre: 'Spinning', cupos: 20, costo: 40, imagen: 'https://images.pexels.com/photos/3757370/pexels-photo-3757370.jpeg' }
    ];

    function renderClases() {
        clasesContainer.innerHTML = '';
        clases.forEach((clase, index) => {
            const col = document.createElement('div');
            col.classList.add('col-md-4');
            col.innerHTML = `
                <div class="card">
                    <img src="${clase.imagen}" class="card-img-top" alt="${clase.nombre}">
                    <div class="card-body">
                        <h5>${clase.nombre}</h5>
                        <p>Cupos: ${clase.cupos}</p>
                        <p>Costo: S/. ${clase.costo}</p>
                        <button class="btn btn-warning btn-sm me-2" onclick="editarClase(${index})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminarClase(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            clasesContainer.appendChild(col);
        });
    }

    // Agregar clase
    btnAgregarClase.addEventListener('click', () => {
        inputNombre.value = '';
        inputCupos.value = '';
        inputCosto.value = '';
        inputImagen.value = '';
        inputIndex.value = '';
        document.getElementById('modalClaseLabel').textContent = 'Agregar Clase';
        modalClase.show();
    });

    // Guardar clase (Agregar o Editar)
    claseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = inputNombre.value.trim();
        const cupos = parseInt(inputCupos.value);
        const costo = parseFloat(inputCosto.value);
        const imagen = inputImagen.value.trim();
        const index = inputIndex.value;

        if (index) {
            clases[index] = { nombre, cupos, costo, imagen };
        } else {
            clases.push({ nombre, cupos, costo, imagen });
        }

        modalClase.hide();
        renderClases();
    });

    // Exponer funciones para botones dinámicos
    window.eliminarClase = function(index) {
        clases.splice(index, 1);
        renderClases();
    };

    window.editarClase = function(index) {
        const clase = clases[index];
        inputNombre.value = clase.nombre;
        inputCupos.value = clase.cupos;
        inputCosto.value = clase.costo;
        inputImagen.value = clase.imagen;
        inputIndex.value = index;
        document.getElementById('modalClaseLabel').textContent = 'Editar Clase';
        modalClase.show();
    };

    renderClases();
});
