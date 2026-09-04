function agregarTarea() {
            const tareaInput = document.getElementById('tareaInput');
            const tareaTexto = tareaInput.value.trim();

            if (tareaTexto !== '') {
                const listaTareas = document.getElementById('listaTareas');
                const nuevaTarea = document.createElement('li');
                nuevaTarea.textContent = tareaTexto;

                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.onclick = function() {
                    listaTareas.removeChild(nuevaTarea);
                };

                nuevaTarea.appendChild(botonEliminar);
                listaTareas.appendChild(nuevaTarea);

                tareaInput.value = '';
            }
        }