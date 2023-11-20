const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importar las rutas de cada controlador
const administradoresRoutes = require('./Api/routes/administradoresRoutes');
const alumnosRoutes = require('./Api/routes/alumnosRoutes');
const calificacionesRoutes = require('./Api/routes/calificacionesRoutes');
const gruposRoutes = require('./Api/routes/gruposRoutes');
const inscripcionesRoutes = require('./Api/routes/inscripcionesRoutes');
const modulosRoutes = require('./Api/routes/modulosRoutes');
const profesoresRoutes = require('./Api/routes/profesoresRoutes');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Configuración de las rutas
app.use('/api', administradoresRoutes); // Rutas de administradores
app.use('/api', alumnosRoutes); // Rutas de alumnos
app.use('/api', calificacionesRoutes); // Rutas de Calificaciones
app.use('/api', gruposRoutes); // Rutas de grupos
app.use('/api', inscripcionesRoutes); // Rutas de inscripciones
app.use('/api', modulosRoutes); // Rutas de modulos
app.use('/api', profesoresRoutes); // Rutas de profesores

// Puerto donde escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("**Bienvenido al API de ICEC-WEB**");
});
