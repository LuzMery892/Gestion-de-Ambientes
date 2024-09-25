// Datos iniciales (esto debería venir del backend en un caso real)
let datosOcupacion = [
    75, 85, 60, 90, 70, 80, 65, 95, 55, 88,
    72, 60, 78, 83, 67, 82, 74, 89, 66, 91,
    63, 77, 92, 80, 84
];

// Etiquetas para los ambientes
const etiquetasAmbientes = [
    'Salón 1', 'Salón 2', 'Salón 3', 'Salón 4', 'Salón 5',
    'Salón 6', 'Salón 7', 'Salón 8', 'Salón 9', 'Salón 10',
    'Salón 11', 'Salón 12', 'Salón 13', 'Salón 14', 'Salón 15',
    'Salón 16', 'Salón 17', 'Salón 18', 'Salón 19', 'Salón 20',
    'Salón 21', 'Salón 22', 'Salón 23', 'Salón 24', 'Salón 25'
];

// Datos de la tabla (esto también debería venir del backend en un caso real)
let datosTabla = generarDatosTablaSimulados(); // Genera datos de tabla simulados

// Gráfico de Ocupación por Ambiente
const ctxOcupacion = document.getElementById('ocupacionPorAmbienteChart').getContext('2d');
let ocupacionPorAmbienteChart = new Chart(ctxOcupacion, {
    type: 'bar',
    data: {
        labels: etiquetasAmbientes,
        datasets: [{
            label: 'Estadísticas ocupación Mes',
            data: datosOcupacion,
            backgroundColor: [
                '#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0',
                '#FF9800', '#FFEB3B', '#8BC34A', '#03A9F4', '#E91E63',
                '#9C27B0', '#F44336', '#3F51B5', '#009688', '#795548',
                '#607D8B', '#FF5722', '#FFC107', '#4CAF50', '#2196F3',
                '#FF9800', '#8BC34A', '#03A9F4', '#E91E63', '#F44336'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Porcentaje de Ocupación',
                    font: {
                        weight: 'bold',
                        size: '16px'
                    }
                },
                ticks: {
                    font: {
                        weight: 'bold',
                        size: '16px'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Ambientes',
                    font: {
                        weight: 'bold',
                        size: '16px'
                    }
                },
                ticks: {
                    font: {
                        weight: 'bold',
                        size: '16px'
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        weight: 'bold',
                        size: '16px'
                    }
                }
            }
        }
    }
});

// Función para cargar los datos en el gráfico y actualizar las tarjetas y la tabla
function cargarDatos(event) {
    const fechaSeleccionada = document.getElementById('selectorFecha').value;

    // Aquí deberías hacer una llamada al backend para obtener los datos actualizados
    /*
    fetch(`/api/estadisticas?fecha=${fechaSeleccionada}`)
        .then(response => response.json())
        .then(data => {
            // Actualiza los datos de ocupación con la respuesta del backend
            datosOcupacion = data.ocupacion; // Asumiendo que `data.ocupacion` contiene los datos necesarios
            
            // Actualiza los datos de la tabla
            datosTabla = data.tabla.filter(item => item.estado === 'Cancelada' && item.fecha === fechaSeleccionada);

            // Actualiza los datos en el gráfico
            ocupacionPorAmbienteChart.data.datasets[0].data = datosOcupacion;
            ocupacionPorAmbienteChart.data.datasets[0].label = `Estadísticas ocupación ${fechaSeleccionada}`;
            ocupacionPorAmbienteChart.update();

            // Actualiza los datos de las tarjetas
            document.getElementById('ocupacionPromedioMensual').innerText = calcularPromedio(datosOcupacion) + '%';
            document.getElementById('totalReservasMensual').innerText = data.totalReservas;
            document.getElementById('totalCanceladasMensual').innerText = data.totalCanceladas;
            document.getElementById('ambienteMenosUtilizado').innerText = data.ambienteMenosUtilizado;

            // Actualiza la tabla
            actualizarTabla();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
    */

    // Simulación de nuevos datos
    datosOcupacion = generarDatosAleatorios(); // Llama a una función para generar nuevos datos

    // Filtra solo las reservas canceladas que coinciden con la fecha seleccionada
    const reservasFiltradas = datosTabla.filter(item => item.estado === 'Cancelada' && item.fecha === fechaSeleccionada);

    // Actualiza el label del dataset
    ocupacionPorAmbienteChart.data.datasets[0].label = `Estadísticas ocupación ${fechaSeleccionada}`;

    // Actualiza los datos en el gráfico
    ocupacionPorAmbienteChart.data.datasets[0].data = datosOcupacion;
    ocupacionPorAmbienteChart.update();

    // Actualizar datos en las tarjetas
    document.getElementById('ocupacionPromedioMensual').innerText = calcularPromedio(datosOcupacion) + '%';
    document.getElementById('totalReservasMensual').innerText = Math.floor(Math.random() * 200);
    document.getElementById('totalCanceladasMensual').innerText = Math.floor(Math.random() * 20);
    document.getElementById('ambienteMenosUtilizado').innerText = `Salón ${Math.floor(Math.random() * 25) + 1}`;

    // Actualiza la tabla con datos filtrados
    actualizarTabla(reservasFiltradas);
}

// Función para actualizar la tabla con los datos
function actualizarTabla(reservas) {
    const tabla = document.getElementById('tabla_cancelar').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; // Limpia la tabla

    // Recorre los datos de la tabla y crea las filas
    reservas.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.fecha}</td>
            <td>${item.ambiente}</td>
            <td>${item.canceladoPor}</td>
            <td>${item.instructor}</td>
            <td>${item.estado}</td>
            <td>${item.motivo}</td>
        `;
        tabla.appendChild(row);
    });
}

// Función para generar datos aleatorios
function generarDatosAleatorios() {
    return Array.from({ length: 25 }, () => Math.floor(Math.random() * 100));
}

// Función para generar datos de tabla simulados
function generarDatosTablaSimulados() {
    const simulados = [];
    const motivos = ['Incapacidad', 'Cambio de Plan', 'Otros'];
    for (let i = 1; i <= 10; i++) {
        const fecha = `2024-09-${i < 10 ? '0' + i : i}`; // Asegura que la fecha sea en formato correcto
        simulados.push({
            fecha: fecha,
            ambiente: `Salón ${Math.floor(Math.random() * 25) + 1}`,
            canceladoPor: `Juan Cortes`,
            instructor: `Instructor ${Math.floor(Math.random() * 10) + 1}`,
            estado: 'Cancelada', // Solo se generan canceladas para este ejemplo
            motivo: motivos[Math.floor(Math.random() * motivos.length)] // Elige un motivo aleatorio
        });
    }
    return simulados;
}

// Función para calcular el promedio de ocupación
function calcularPromedio(datos) {
    const total = datos.reduce((acc, val) => acc + val, 0);
    return (total / datos.length).toFixed(2); // Retorna el promedio con 2 decimales
}
