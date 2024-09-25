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
