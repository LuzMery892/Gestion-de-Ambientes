window.onload = function() {
    const selectorFecha = document.getElementById('selectorFecha');

    // Inicializar Flatpickr con el plugin de selección de meses
    flatpickr(selectorFecha, {
        plugins: [
            new monthSelectPlugin({
                shorthand: true, // Usa abreviaturas (Jan, Feb, etc.)
                dateFormat: "Y-m", // Formato de la fecha
                altFormat: "F Y", // Formato alternativo para mostrar
            })
        ],
        defaultDate: new Date(), // Establecer la fecha actual como predeterminada
        minDate: "2024-01", // Fecha mínima
        maxDate: "2050-01" // Fecha máxima
    });
};

function cargarDatos() {
    const fechaSeleccionada = document.getElementById('selectorFecha').value;

    if (fechaSeleccionada) {
        const [añoSeleccionado, mesSeleccionado] = fechaSeleccionada.split("-");

        // Convertir el mes a un formato legible
        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        const mesNombre = meses[parseInt(mesSeleccionado) - 1]; // Obtener el nombre del mes

        // Datos de ocupación
        const datosOcupacion = [80, 60, 100, 50]; // Puedes cambiar estos valores según el mes
        const sedes = ['Sede Central', 'Sede Pomar', 'Sede Buenos Aires', 'Sede Buenaventura'];

        // Crear gráfico
        const ctx = document.getElementById('ocupacionChart').getContext('2d');
        const ocupacionChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sedes,
                datasets: [{
                    label: `${mesNombre} ${añoSeleccionado}`, // Mostrar el mes y el año
                    data: datosOcupacion,
                    backgroundColor: [
                        '#e6e653',
                        '#81c784',
                        '#64b5f6',
                        '#d66cf7'
                    ],
                    borderColor: [
                        '#333',
                        '#333',
                        '#333',
                        '#333',
                    ],
                    borderWidth: 1 // Eliminar la barra al lado del label
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true // Mostrar la leyenda
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}%`; // Mostrar el porcentaje
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%'; // Mostrar % en el eje Y
                            }
                        }
                    }
                }
            }
        });
    } else {
        alert("Por favor, selecciona un mes válido.");
    }
}
