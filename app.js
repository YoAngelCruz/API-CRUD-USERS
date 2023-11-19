const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Api/routes/administradoresRoutes'); // Rutas de tu aplicación

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Configuración de las rutas
app.use('/api', routes); // Suponiendo que tus rutas comienzan con '/api'

// Puerto donde escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
