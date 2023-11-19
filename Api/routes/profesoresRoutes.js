// profesoresRoutes.js
const express = require('express');
const router = express.Router();
const ProfesoresController = require('../controllers/profesoresController');

// Rutas para profesores
router.post('/profesores', ProfesoresController.crearProfesor);
router.get('/profesores/:id_profesor', ProfesoresController.obtenerProfesorPorId);
router.get('/profesores', ProfesoresController.obtenerTodosLosProfesores);
router.get('/profesores/:id_profesor/grupos', ProfesoresController.obtenerGruposImpartidosPorProfesor);
router.put('/profesores/:id_profesor', ProfesoresController.actualizarDatosProfesor);
router.delete('/profesores/:id_profesor', ProfesoresController.eliminarProfesor);
router.post('/profesores/asignar', ProfesoresController.asignarProfesorAGrupo);
router.post('/profesores/calificacion', ProfesoresController.asignarCalificacion);

module.exports = router;
