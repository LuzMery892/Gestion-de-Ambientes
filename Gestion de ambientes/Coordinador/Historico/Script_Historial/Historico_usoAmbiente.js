// Datos temporales para los gráficos
const datosOcupacion = [75, 85, 60, 90, 70, 80, 65, 95, 55, 88, 72, 60, 78, 83, 67]; // Porcentaje de ocupación de cada ambiente
const etiquetasAmbientes = [
    'Salón 1', 'Salón 2', 'Salón 3', 'Salón 4', 'Salón 5',
    'Salón 6', 'Salón 7', 'Salón 8', 'Salón 9', 'Salón 10',
    'Salón 11', 'Salón 12', 'Salón 13', 'Salón 14', 'Salón 15'
];

// Gráfico de Ocupación por Ambiente
const ctxOcupacion = document.getElementById('ocupacionPorAmbienteChart').getContext('2d');
const ocupacionPorAmbienteChart = new Chart(ctxOcupacion, {
    type: 'bar',
    data: {
        labels: etiquetasAmbientes,
        datasets: [{
            label: 'Ocupación (%)',
            data: datosOcupacion,
            backgroundColor: [
                '#4CAF50', // Verde
                '#2196F3', // Azul
                '#FFC107', // Amarillo
                '#FF5722', // Naranja
                '#9C27B0', // Morado
                '#FF9800', // Naranja claro
                '#FFEB3B', // Amarillo claro
                '#8BC34A', // Verde claro
                '#03A9F4', // Azul claro
                '#E91E63', // Rosa
                '#9C27B0', // Morado
                '#F44336', // Rojo
                '#3F51B5', // Azul oscuro
                '#009688', // Teal
                '#795548', // Marrón
                '#607D8B'  // Azul grisáceo
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Porcentaje de Ocupación'
                }
            }
        }
    }
});
