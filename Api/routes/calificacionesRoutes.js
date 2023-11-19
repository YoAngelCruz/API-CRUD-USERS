const express = require('express');
const router = express.Router();
const CalificacionesController = require('../controllers/calificacionesController');

// Rutas para calificaciones
router.post('/calificaciones', CalificacionesController.crearCalificacion);
router.get('/calificaciones/:id_calificacion', CalificacionesController.obtenerCalificacionPorId);
router.get('/alumnos/:id_alumno/calificaciones', CalificacionesController.obtenerCalificacionesPorAlumno);
router.put('/calificaciones/:id_calificacion', CalificacionesController.actualizarCalificacion);
router.delete('/calificaciones/:id_calificacion', CalificacionesController.eliminarCalificacion);

module.exports = router;
