const express = require('express');
const router = express.Router();
const AlumnosController = require('../controllers/alumnosController');

// Rutas para alumnos
router.post('/alumnos', AlumnosController.crearAlumno);
router.get('/alumnos/:id', AlumnosController.obtenerAlumnoPorId);
router.get('/alumnos', AlumnosController.obtenerTodosLosAlumnos);
router.get('/alumnos/:id_alumno/modulos', AlumnosController.obtenerModulosCursadosPorAlumno);
router.get('/alumnos/:id_alumno/modulos/calificaciones', AlumnosController.obtenerModulosConCalificaciones);
router.put('/alumnos/:id', AlumnosController.actualizarDatosAlumno);
router.put('/alumnos/pass/:id', AlumnosController.actualizarContraseñaAlumno);
router.delete('/alumnos/:id', AlumnosController.eliminarAlumno);
router.post('/alumnos/inscripcion', AlumnosController.inscribirseAGrupo);

module.exports = router;
