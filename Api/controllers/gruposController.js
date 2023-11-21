const Grupos = require('../models/gruposModel');

const GruposController = {
  async crearGrupo(req, res) {
    const { descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin} = req.body;
    try {
      await Grupos.crearGrupo(descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin);
      res.status(201).json({ message: 'Grupo creado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el grupo' });
    }
  },

  async obtenerGrupoPorId(req, res) {
    const { id_grupo } = req.params;
    try {
      const grupo = await Grupos.obtenerGrupoPorId(id_grupo);
      if (!grupo) {
        return res.status(404).json({ message: 'El grupo no se encuentra registrado' });
      }

      res.status(200).json(grupo);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el grupo' });
    }
  },

  async obtenerTodosLosGrupos(req, res) {
    try {
      const grupos = await Grupos.obtenerTodosLosGrupos();
      res.status(200).json(grupos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los grupos' });
    }
  },

  async obtenerAlumnosPorGrupo(req, res) {
    const { id_grupo } = req.params;
    try {
      const alumnos = await Grupos.obtenerAlumnosPorGrupo(id_grupo);
      res.status(200).json(alumnos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los alumnos del grupo' });
    }
  },

  async actualizarDatosGrupo(req, res) {
    const { id_grupo } = req.params;
    const { id_profesor, id_modulo, fecha_inicio, fecha_fin } = req.body;
    try {
      const grupo = await Grupos.obtenerGrupoPorId(id_grupo);
      if (!grupo) {
        return res.status(404).json({ message: 'El grupo no se encuentra registrado' });
      }

      await Grupos.actualizarDatosGrupo(id_grupo, id_profesor, id_modulo, fecha_inicio, fecha_fin);
      res.status(200).json({ message: 'Datos del grupo actualizados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar los datos del grupo' });
    }
  },

  async eliminarGrupo(req, res) {
    const { id_grupo } = req.params;
    try {
      const grupo = await Grupos.obtenerGrupoPorId(id_grupo);
      if (!grupo) {
        return res.status(404).json({ message: 'El grupo no se encuentra registrado' });
      }
      
      await Grupos.eliminarGrupo(id_grupo);
      res.status(200).json({ message: 'Grupo eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el grupo' });
    }
  },
};

module.exports = GruposController;