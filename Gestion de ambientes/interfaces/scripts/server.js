const express = require('express');
const path = require('path');
const app = express();

// Configura la carpeta 'Gestion de Ambientes'' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'Gestion-de-Ambientes/Gestion de Ambientes')));

// Configura la ruta principal para enviar el archivo 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Gestion-de-Ambientes/Gestion de Ambientes/Coordinador/index.html'));
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
