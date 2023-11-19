const Administradores = require('../models/administradoresModel');

const AdministradoresController = {
  async crearAdministrador(req, res) {
    const { nombre, num_tel_a, email, contraseña } = req.body;
    try {
      await Administradores.crearAdministrador(nombre, num_tel_a, email, contraseña);
      res.status(201).json({message: 'Administrador creado correctamente' });
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error al crear el administrador' });
    }
  },

  async obtenerAdministradorPorId(req, res) {
    const { id_admin } = req.params;
    try {
      const administrador = await Administradores.obtenerAdministradorPorId(id_admin);
      if (!administrador) {
        return res.status(404).json({ message: 'Administrador no encontrado' });
      }
      res.status(200).json(administrador);
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error al obtener el administrador' });
    }
  },

  async obtenerTodosLosAdministradores(req, res) {
    try {
      const administradores = await Administradores.obtenerTodosLosAdministradores();
      res.status(200).json(administradores);
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error al obtener todos los administradores' });
    }
  },

  async actualizarDatosAdministrador(req, res) {
    const { id_admin } = req.params;
    const { nombre, num_tel_a, email, contraseña } = req.body;
    try {
      await Administradores.actualizarDatosAdministrador(id_admin, nombre, num_tel_a, email, contraseña);
      res.status(200).json({ message: 'Datos del administrador actualizados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar los datos del administrador' });
    }
  },

  async eliminarAdministrador(req, res) {
    const { id_admin } = req.params;
    try {
      await Administradores.eliminarAdministrador(id_admin);
      res.status(200).json({ message: 'Administrador eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el administrador' });
    }
  },
};

module.exports = AdministradoresController;