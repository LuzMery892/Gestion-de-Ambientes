window.onload = function() {
    const selectorFecha = document.getElementById('selectorFecha');

    // Inicializar Flatpickr con el plugin de selección de meses
    flatpickr(selectorFecha, {
        plugins: [
            new monthSelectPlugin({
                shorthand: true, // Usa abreviaturas (Jan, Feb, etc.)
                dateFormat: "Y-m", // Formato de la fecha
                altFormat: "F Y" // Formato alternativo para mostrar
            })
        ],
        defaultDate: new Date(), // Establecer la fecha actual como predeterminada
        minDate: "2024-01", // Fecha mínima
        maxDate: "2050-01" // Fecha máxima
    });
};

let ocupacionChart; // Declarar fuera de la función para poder destruirlo si es necesario

function cargarDatos(event) {
    if (event) {
        event.preventDefault(); // Evita el comportamiento por defecto del botón
    }

    const fechaSeleccionada = document.getElementById('selectorFecha').value;
    console.log("Fecha seleccionada:", fechaSeleccionada); // Para depuración

    if (fechaSeleccionada) {
        const [añoSeleccionado, mesSeleccionado] = fechaSeleccionada.split("-");
        const mesIndex = parseInt(mesSeleccionado, 10) - 1;

        // Validar el mes
        if (mesIndex < 0 || mesIndex > 11) {
            alert("Mes no válido.");
            return;
        }

        // Convertir el mes a un formato legible
        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        const mesNombre = meses[mesIndex]; // Obtener el nombre del mes

        // Datos de ocupación
        const datosOcupacion = [80, 60, 100, 50]; // Cambia estos valores según el mes
        const sedes = ['Sede Central', 'Sede Pomar', 'Sede Buenos Aires', 'Sede USB'];

        const ctx = document.getElementById('ocupacionChart').getContext('2d');

        // Destruir el gráfico anterior si existe
        if (ocupacionChart) {
            ocupacionChart.destroy();
        }

        // Crear gráfico
        ocupacionChart = new Chart(ctx, {
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
                    borderColor: '#333',
                    borderWidth: 1
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
