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
    const { id } = req.params;
    try {
      const administrador = await Administradores.obtenerAdministradorPorId(id);
      if (!administrador) {
        return res.status(404).json({ message: 'El administrador no se encuentra registrado' });
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
    const { id } = req.params;
    const { nombre, num_tel_a, email} = req.body;
    try {
      const administrador = await Administradores.obtenerAdministradorPorId(id);
  
      if (!administrador) {
        return res.status(404).json({ message: 'El administrador no se encuentra registrado' });
      }

      await Administradores.actualizarDatosAdministrador(id, nombre, num_tel_a, email);
      res.status(200).json({ message: 'Datos del administrador actualizados correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar los datos del administrador' });
    }
  },

  async actualizarContraseñaAdministrador(req, res) {
    const { id } = req.params;
    const { contraseña } = req.body;
    try {
      const administrador = await Administradores.obtenerAdministradorPorId(id);
  
      if (!administrador) {
        return res.status(404).json({ message: 'El administrador no se encuentra registrado' });
      }

      await Administradores.actualizarContraseñaAdministrador(id, contraseña);
      res.status(200).json({ message: 'Contraseña del administrador actualizada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la Contraseña del administrador' });
    }
  },
  
  async eliminarAdministrador(req, res) {
    const { id } = req.params;
    try {
      // Verificar si el administrador existe antes de eliminarlo
      const administrador = await Administradores.obtenerAdministradorPorId(id);
  
      if (!administrador) {
        return res.status(404).json({ message: 'El administrador no se encuentra registrado' });
      }
  
      await Administradores.eliminarAdministrador(id);
      res.status(200).json({ message: 'Administrador eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el administrador' });
    }
  },
};

module.exports = AdministradoresController;