// modulosRoutes.js
const express = require('express');
const router = express.Router();
const ModulosController = require('../controllers/modulosController');

// Rutas para módulos
router.post('/modulos', ModulosController.crearModulo);
router.get('/modulos/:id_modulo', ModulosController.obtenerModuloPorId);
router.get('/modulos', ModulosController.obtenerTodosLosModulos);
router.put('/modulos/:id_modulo', ModulosController.actualizarDatosModulo);
router.delete('/modulos/:id_modulo', ModulosController.eliminarModulo);
router.post('/modulos/asignar', ModulosController.asignarModuloAGrupo);

module.exports = router;
