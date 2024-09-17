// Datos y configuración para el gráfico de "Horas de Uso Ambiente"
const horasUsoData = [
  {
    type: 'bar',
    x: ['Oficina Central', 'Sucursal Norte', 'Sucursal Sur', 'Sucursal Este', 'Sucursal Oeste'],
    y: [240, 180, 150, 200, 170], // Horas de uso mensual para cada ambiente
    marker: {
      color: 'rgba(54, 162, 235, 0.6)',
      line: {
        color: 'rgba(54, 162, 235, 1)',
        width: 1.5
      }
    },
    text: [240, 180, 150, 200, 170],
    textposition: 'auto',
    hoverinfo: 'x+y'
  }
];

const horasUsoLayout = {
  title: {
    text: 'Uso Mensual de Ambientes',
    font: {
      size: 24
    }
  },
  xaxis: {
    title: 'Ambiente',
    tickangle: -45
  },
  yaxis: {
    title: 'Horas de Uso',
    rangemode: 'tozero'
  },
  margin: {
    t: 40,
    b: 80,
    l: 60,
    r: 20
  }
};

// Renderizar el gráfico en el contenedor con ID 'horasUsoChart'
Plotly.newPlot('horasUsoChart', horasUsoData, horasUsoLayout);

// Datos y configuración para el gráfico de "Frecuencia de Uso Mensual"
const frecuenciaUsoData = [
  {
    type: 'pie',
    labels: ['Oficina Central', 'Sucursal Norte', 'Sucursal Sur', 'Sucursal Este', 'Sucursal Oeste'],
    values: [240, 180, 150, 200, 170],
    textinfo: 'label+percent',
    insidetextorientation: 'radial'
  }
];

const frecuenciaUsoLayout = {
  title: {
    text: 'Frecuencia de Uso Mensual',
    font: {
      size: 24
    }
  },
  margin: {
    t: 40,
    b: 40,
    l: 40,
    r: 40
  }
};

// Renderizar el gráfico en el contenedor con ID 'frecuenciaUsoChart'
Plotly.newPlot('frecuenciaUsoChart', frecuenciaUsoData, frecuenciaUsoLayout);

// Datos y configuración para el gráfico de "Horarios de Uso"
const horariosUsoData = [
  {
    type: 'line',
    x: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    y: [50, 60, 70, 80, 90, 100], // Horas de uso en diferentes horarios
    mode: 'lines+markers',
    marker: {
      color: 'rgba(75, 192, 192, 0.6)'
    },
    line: {
      color: 'rgba(75, 192, 192, 1)',
      width: 2
    }
  }
];

const horariosUsoLayout = {
  title: {
    text: 'Horarios de Uso',
    font: {
      size: 24
    }
  },
  xaxis: {
    title: 'Hora del Día',
    tickangle: -45
  },
  yaxis: {
    title: 'Horas de Uso',
    rangemode: 'tozero'
  },
  margin: {
    t: 40,
    b: 80,
    l: 60,
    r: 20
  }
};

// Renderizar el gráfico en el contenedor con ID 'horariosUsoChart'
Plotly.newPlot('horariosUsoChart', horariosUsoData, horariosUsoLayout);

// Datos para el gráfico diario (esto debería ser dinámico en una aplicación real)
const dailyUsageData = [
  {
    type: 'bar',
    x: ['Oficina Central', 'Sucursal Norte', 'Sucursal Sur', 'Sucursal Este', 'Sucursal Oeste'],
    y: [20, 15, 10, 25, 18], // Horas de uso para un día específico
    marker: {
      color: 'rgba(153, 102, 255, 0.6)',
      line: {
        color: 'rgba(153, 102, 255, 1)',
        width: 1.5
      }
    },
    text: [20, 15, 10, 25, 18],
    textposition: 'auto',
    hoverinfo: 'x+y'
  }
];

const dailyUsageLayout = {
  title: {
    text: 'Uso Diario de Ambientes',
    font: {
      size: 24
    }
  },
  xaxis: {
    title: 'Ambiente',
    tickangle: -45
  },
  yaxis: {
    title: 'Horas de Uso',
    rangemode: 'tozero'
  },
  margin: {
    t: 40,
    b: 80,
    l: 60,
    r: 20
  }
};

// Renderizar el gráfico diario en el contenedor con ID 'dailyUsageChart'
function renderDailyUsageChart(date) {
  // Aquí deberías actualizar los datos en función de la fecha seleccionada
  Plotly.newPlot('dailyUsageChart', dailyUsageData, dailyUsageLayout);
}

// Inicializar el calendario
var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth', // Vista inicial del calendario
  events: [
    { title: 'Evento 1', start: '2024-09-10' },
    { title: 'Evento 2', start: '2024-09-15' }
  ],
  selectable: true,
  select: function(info) {
    alert('Fecha seleccionada: ' + info.startStr);
  }
});

calendar.render();