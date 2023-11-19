const express = require('express');
const router = express.Router();
const GruposController = require('../controllers/gruposController');

// Rutas para grupos
router.post('/grupos', GruposController.crearGrupo);
router.get('/grupos/:id_grupo', GruposController.obtenerGrupoPorId);
router.get('/grupos', GruposController.obtenerTodosLosGrupos);
router.get('/grupos/:id_grupo/alumnos', GruposController.obtenerAlumnosPorGrupo);
router.put('/grupos/:id_grupo', GruposController.actualizarDatosGrupo);
router.delete('/grupos/:id_grupo', GruposController.eliminarGrupo);

module.exports = router;
