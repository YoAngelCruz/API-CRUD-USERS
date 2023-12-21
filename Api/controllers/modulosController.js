const Modulos = require('../models/modulosModel');

const ModulosController = {
  async crearModulo(req, res) {
    const { nombre, descripcion, duracion } = req.body;
    try {
      await Modulos.crearModulo(nombre, descripcion, duracion);
      res.status(201).json({ message: 'Módulo creado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el módulo' });
    }
  },

  async obtenerModuloPorId(req, res) {
    const { id_modulo } = req.params;
    try {
      const modulo = await Modulos.obtenerModuloPorId(id_modulo);
      if (!modulo) {
        return res.status(404).json({ message: 'El módulo no se encuentra registrado' });
      }

      res.status(200).json(modulo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el módulo' });
    }
  },

  async obtenerTodosLosModulos(req, res) {
    try {
      const modulos = await Modulos.obtenerTodosLosModulos();
      res.status(200).json(modulos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener todos los módulos' });
    }
  },

  async actualizarDatosModulo(req, res) {
    const { id_modulo } = req.params;
    const { nombre, descripcion, duracion } = req.body;
    try {
      const modulo = await Modulos.obtenerModuloPorId(id_modulo);
      if (!modulo) {
        return res.status(404).json({ message: 'El módulo no se encuentra registrado' });
      }
      
      await Modulos.actualizarDatosModulo(id_modulo, nombre, descripcion, duracion);
      res.status(200).json({ message: 'Datos del módulo actualizados correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar los datos del módulo' });
    }
  },

  async eliminarModulo(req, res) {
    const { id_modulo } = req.params;
    try {
      const modulo = await Modulos.obtenerModuloPorId(id_modulo);
      if (!modulo) {
        return res.status(404).json({ message: 'El módulo no se encuentra registrado' });
      }
      
      await Modulos.eliminarModulo(id_modulo);
      res.status(200).json({ message: 'Módulo eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el módulo' });
    }
  },

  async asignarModuloAGrupo(req, res) {
    const { id_modulo, id_grupo } = req.body;
    try {
      await Modulos.asignarModuloAGrupo(id_modulo, id_grupo);
      res.status(200).json({ message: 'Módulo asignado correctamente al grupo' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al asignar el módulo al grupo' });
    }
  },
};

module.exports = ModulosController;