const pool = require('../config/db');

const Grupos = {
  async crearGrupo(id_profesor, id_modulo, fecha_inicio, fecha_fin) {
    try {
      const query = 'INSERT INTO grupo (id_profesor, id_modulo, fecha_inicio, fecha_fin) VALUES ($1, $2, $3, $4)';
      const values = [id_profesor, id_modulo, fecha_inicio, fecha_fin];
      await pool.query(query, values);
    } catch (error) {
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
      throw error;
    }
  },

  async obtenerTodosLosGrupos() {
    try {
      const query = 'SELECT * FROM grupo';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async obtenerAlumnosPorGrupo(id_grupo) {
    try {
      const query = 'SELECT alumnos.* FROM alumnos INNER JOIN inscripcion ON alumnos.id_alumno = inscripcion.id_alumno WHERE inscripcion.id_grupo = $1';
      const values = [id_grupo];
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async actualizarDatosGrupo(id_grupo, id_profesor, id_modulo, fecha_inicio, fecha_fin) {
    try {
      const query = 'UPDATE grupo SET id_profesor = $1, id_modulo = $2, fecha_inicio = $3, fecha_fin = $4 WHERE id_grupo = $5';
      const values = [id_profesor, id_modulo, fecha_inicio, fecha_fin, id_grupo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async eliminarGrupo(id_grupo) {
    try {
      const query = 'DELETE FROM grupo WHERE id_grupo = $1';
      const values = [id_grupo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Grupos;