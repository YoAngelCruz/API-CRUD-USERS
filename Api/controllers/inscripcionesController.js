const Inscripciones = require('../models/inscripcionesModel');

const InscripcionesController = {
  async crearInscripcion(req, res) {
    const { id_alumno, id_grupo, fecha } = req.body;
    try {
      await Inscripciones.crearInscripcion(id_alumno, id_grupo, fecha);
      res.status(201).json({ message: 'Inscripción creada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la inscripción' });
    }
  },

  async obtenerInscripcionPorId(req, res) {
    const { id_inscripcion } = req.params;
    try {
      const inscripcion = await Inscripciones.obtenerInscripcionPorId(id_inscripcion);
      if (!inscripcion) {
        return res.status(404).json({ message: 'Inscripción no encontrada' });
      }
      res.status(200).json(inscripcion);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la inscripción' });
    }
  },

  async obtenerTodasLasInscripciones(req, res) {
    try {
      const inscripciones = await Inscripciones.obtenerTodasLasInscripciones();
      res.status(200).json(inscripciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las inscripciones' });
    }
  },

  async actualizarDatosInscripcion(req, res) {
    const { id_inscripcion } = req.params;
    const { id_alumno, id_grupo, fecha } = req.body;
    try {
      await Inscripciones.actualizarDatosInscripcion(id_inscripcion, id_alumno, id_grupo, fecha);
      res.status(200).json({ message: 'Datos de la inscripción actualizados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar los datos de la inscripción' });
    }
  },

  async eliminarInscripcion(req, res) {
    const { id_inscripcion } = req.params;
    try {
      await Inscripciones.eliminarInscripcion(id_inscripcion);
      res.status(200).json({ message: 'Inscripción eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la inscripción' });
    }
  },
};

module.exports = InscripcionesController;