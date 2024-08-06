//configuracion del servidor local

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//luz puedes configurar si no tienes... el sevidor local simple con node.js
// installa node.js 
//ejecuta estos comandos en la terminal de este proyecto: (npm init -y) y (npm install express)  
//inicia el servidor con este comando : node server.js (Ejecuta el servidor Node.js para servir la app frontend)
// ya ahi el proyecto estaria disponible en http://localhost:3000 
//o si lo estas haciendo en visual studio code instala la extencion live server
//IMPORTANTE para correr tu codigo lo haces desde index.html clic derecho y ejecutar o desde cmd :node.js
