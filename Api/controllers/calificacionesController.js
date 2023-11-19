const Calificaciones = require('../models/calificacionesModel');

const CalificacionesController = {
  async crearCalificacion(req, res) {
    const { id_inscripcion, calificacion, fecha, aprobado } = req.body;
    try {
      await Calificaciones.crearCalificacion(id_inscripcion, calificacion, fecha, aprobado);
      res.status(201).json({ message: 'Calificación creada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la calificación' });
    }
  },

  async obtenerCalificacionPorId(req, res) {
    const { id_calificacion } = req.params;
    try {
      const calificacion = await Calificaciones.obtenerCalificacionPorId(id_calificacion);
      if (!calificacion) {
        return res.status(404).json({ message: 'Calificación no encontrada' });
      }
      res.status(200).json(calificacion);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la calificación' });
    }
  },

  async obtenerCalificacionesPorAlumno(req, res) {
    const { id_alumno } = req.params;
    try {
      const calificaciones = await Calificaciones.obtenerCalificacionesPorAlumno(id_alumno);
      res.status(200).json(calificaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las calificaciones del alumno' });
    }
  },

  async actualizarCalificacion(req, res) {
    const { id_calificacion } = req.params;
    const { calificacion, fecha, aprobado } = req.body;
    try {
      await Calificaciones.actualizarCalificacion(id_calificacion, calificacion, fecha, aprobado);
      res.status(200).json({ message: 'Calificación actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la calificación' });
    }
  },

  async eliminarCalificacion(req, res) {
    const { id_calificacion } = req.params;
    try {
      await Calificaciones.eliminarCalificacion(id_calificacion);
      res.status(200).json({ message: 'Calificación eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la calificación' });
    }
  },
};

module.exports = CalificacionesController;