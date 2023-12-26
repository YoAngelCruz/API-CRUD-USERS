const pool = require('../config/db');

const Grupos = {
  async crearGrupo(descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin) {
    try {
      const query = 'INSERT INTO grupo (descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin) VALUES ($1, $2, $3, $4, $5)';
      const values = [descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerGrupoPorId(id_grupo) {
    try {
      const query = 'SELECT * FROM grupo WHERE id_grupo = $1';
      const values = [id_grupo];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerTodosLosGrupos() {
    try {
      const query = 'SELECT * FROM grupo';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerAlumnosPorGrupo(id_grupo) {
    try {
        const query = `
            SELECT alumnos.*, inscripcion.id_inscripcion, calificacion.id_calificacion, calificacion.calificacion, calificacion.periodo
            FROM alumnos 
            INNER JOIN inscripcion ON alumnos.id = inscripcion.id_alumno 
            LEFT JOIN calificacion ON inscripcion.id_inscripcion = calificacion.id_inscripcion
            WHERE inscripcion.id_grupo = $1`;
        const values = [id_grupo];
        const { rows } = await pool.query(query, values);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
},

  async actualizarDatosGrupo(id_grupo, descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin) {
    try {
      const query = 'UPDATE grupo SET descripcion = $1, id_profesor = $2, id_modulo = $3, fecha_inicio = $4, fecha_fin = $5 WHERE id_grupo = $6';
      const values = [descripcion, id_profesor, id_modulo, fecha_inicio, fecha_fin, id_grupo];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async eliminarGrupo(id_grupo) {
    try {
      const query = 'DELETE FROM grupo WHERE id_grupo = $1';
      const values = [id_grupo];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

module.exports = Grupos;