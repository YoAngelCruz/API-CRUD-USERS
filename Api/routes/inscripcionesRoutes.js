const express = require('express');
const router = express.Router();
const InscripcionesController = require('../controllers/inscripcionesController');

// Rutas para las inscripciones
router.post('/inscripciones', InscripcionesController.crearInscripcion);
router.get('/inscripciones/:id_inscripcion', InscripcionesController.obtenerInscripcionPorId);
router.get('/inscripciones', InscripcionesController.obtenerTodasLasInscripciones);
router.put('/inscripciones/:id_inscripcion', InscripcionesController.actualizarDatosInscripcion);
router.delete('/inscripciones/:id_inscripcion', InscripcionesController.eliminarInscripcion);

module.exports = router;
