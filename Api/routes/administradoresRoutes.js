const express = require('express');
const router = express.Router();
const AdministradoresController = require('../controllers/administradoresController');

// Rutas para administradores
router.post('/administradores', AdministradoresController.crearAdministrador);
router.get('/administradores/:id_admin', AdministradoresController.obtenerAdministradorPorId);
router.get('/administradores', AdministradoresController.obtenerTodosLosAdministradores);
router.put('/administradores/:id_admin', AdministradoresController.actualizarDatosAdministrador);
router.delete('/administradores/:id_admin', AdministradoresController.eliminarAdministrador);

module.exports = router;
