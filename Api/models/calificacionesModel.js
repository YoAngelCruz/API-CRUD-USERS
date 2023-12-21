const pool = require('../config/db');

const Calificaciones = {
  async crearCalificacion(id_inscripcion, calificacion, fecha, aprobado) {
    try {
      const query = 'INSERT INTO calificacion (id_inscripcion, calificacion, fecha, aprobado) VALUES ($1, $2, $3, $4)';
      const values = [id_inscripcion, calificacion, fecha, aprobado];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerCalificacionPorId(id_calificacion) {
    try {
      const query = 'SELECT * FROM calificacion WHERE id_calificacion = $1';
      const values = [id_calificacion];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerCalificacionesPorAlumno(id_alumno) {
    try {
      const query = 'SELECT * FROM calificacion INNER JOIN inscripcion ON calificacion.id_inscripcion = inscripcion.id_inscripcion WHERE inscripcion.id_alumno = $1';
      const values = [id_alumno];
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async actualizarCalificacion(id_calificacion, nuevaCalificacion, nuevaFecha, nuevoEstadoAprobado) {
    try {
      const query = 'UPDATE calificacion SET calificacion = $1, fecha = $2, aprobado = $3 WHERE id_calificacion = $4';
      const values = [nuevaCalificacion, nuevaFecha, nuevoEstadoAprobado, id_calificacion];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async eliminarCalificacion(id_calificacion) {
    try {
      const query = 'DELETE FROM calificacion WHERE id_calificacion = $1';
      const values = [id_calificacion];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

module.exports = Calificaciones;
