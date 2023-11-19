const express = require('express');
const router = express.Router();
const AlumnosController = require('../controllers/alumnosController');

// Rutas para alumnos
router.post('/alumnos', AlumnosController.crearAlumno);
router.get('/alumnos/:id_alumno', AlumnosController.obtenerAlumnoPorId);
router.get('/alumnos', AlumnosController.obtenerTodosLosAlumnos);
router.get('/alumnos/:id_alumno/modulos', AlumnosController.obtenerModulosCursadosPorAlumno);
router.put('/alumnos/:id_alumno', AlumnosController.actualizarDatosAlumno);
router.delete('/alumnos/:id_alumno', AlumnosController.eliminarAlumno);
router.post('/alumnos/inscripcion', AlumnosController.inscribirseAGrupo);

module.exports = router;
