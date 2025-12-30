document.addEventListener('DOMContentLoaded', () => {
    let productos = [
        { id: 1, nombre: 'Proteína', precio: 50, categoria: 'Suplementos' },
        { id: 2, nombre: 'Colchoneta', precio: 20, categoria: 'Accesorios' },
        { id: 3, nombre: 'Botella', precio: 10, categoria: 'Accesorios' }
    ];
    let productoIdCounter = productos.length + 1;

    const tablaBody = document.querySelector('#tablaProductos tbody');
    const modalProductoEl = document.getElementById('modalProducto');
    const modalProducto = new bootstrap.Modal(modalProductoEl);
    const formProducto = document.getElementById('formProducto');
    const tituloModal = document.getElementById('tituloModal');

    const inputId = document.getElementById('productoId');
    const inputNombre = document.getElementById('nombreProducto');
    const inputPrecio = document.getElementById('precioProducto');
    const inputCategoria = document.getElementById('categoriaProducto');

    function renderTabla() {
        tablaBody.innerHTML = '';
        productos.forEach(producto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>S/. ${producto.precio.toFixed(2)}</td>
                <td>${producto.categoria}</td>
                <td>
                    <button class="btn btn-sm btn-primary btnEditar" data-id="${producto.id}">Editar</button>
                    <button class="btn btn-sm btn-danger btnEliminar" data-id="${producto.id}">Eliminar</button>
                </td>
            `;
            tablaBody.appendChild(tr);
        });

        // Botones Editar
        tablaBody.querySelectorAll('.btnEditar').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const prod = productos.find(p => p.id === id);
                inputId.value = prod.id;
                inputNombre.value = prod.nombre;
                inputPrecio.value = prod.precio;
                inputCategoria.value = prod.categoria;
                tituloModal.textContent = 'Editar Producto';
                modalProducto.show();
            });
        });

        // Botones Eliminar
        tablaBody.querySelectorAll('.btnEliminar').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                productos = productos.filter(p => p.id !== id);
                renderTabla();
            });
        });
    }

    // Botón agregar
    document.getElementById('btnAgregar').addEventListener('click', () => {
        inputId.value = '';
        inputNombre.value = '';
        inputPrecio.value = '';
        inputCategoria.value = '';
        tituloModal.textContent = 'Agregar Producto';
        modalProducto.show();
    });

    // Guardar producto
    formProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = inputId.value;
        const nombre = inputNombre.value.trim();
        const precio = parseFloat(inputPrecio.value);
        const categoria = inputCategoria.value.trim();

        if (!nombre || isNaN(precio) || !categoria) return;

        if (id) {
            const index = productos.findIndex(p => p.id === parseInt(id));
            productos[index] = { id: parseInt(id), nombre, precio, categoria };
        } else {
            productos.push({ id: productoIdCounter++, nombre, precio, categoria });
        }

        modalProducto.hide();
        renderTabla();
    });

    renderTabla();
});
