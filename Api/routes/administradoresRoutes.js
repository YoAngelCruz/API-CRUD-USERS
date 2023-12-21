const express = require('express');
const router = express.Router();
const AdministradoresController = require('../controllers/administradoresController');

// Rutas para administradores
router.post('/administradores', AdministradoresController.crearAdministrador);
router.get('/administradores/:id', AdministradoresController.obtenerAdministradorPorId);
router.get('/administradores', AdministradoresController.obtenerTodosLosAdministradores);
router.put('/administradores/:id', AdministradoresController.actualizarDatosAdministrador);
router.put('/administradores/pass/:id', AdministradoresController.actualizarContraseñaAdministrador);
router.delete('/administradores/:id', AdministradoresController.eliminarAdministrador);

module.exports = router;
