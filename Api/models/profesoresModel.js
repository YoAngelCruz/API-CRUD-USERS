const bcrypt = require('bcrypt');
const pool = require('../config/db'); // Importa la configuración de la conexión a la base de datos

const Profesores = {
  async crearProfesor(nombre, num_tel_p, email, contraseña) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'INSERT INTO profesores (nombre, num_tel_p, email, contraseña) VALUES ($1, $2, $3, $4)';
      const values = [nombre, num_tel_p, email, hashedPassword]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async obtenerProfesorPorId(id_profesor) {
    try {
      const query = 'SELECT * FROM profesores WHERE id_profesor = $1';
      const values = [id_profesor];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  async obtenerTodosLosProfesores() {
    try {
      const query = 'SELECT * FROM profesores';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async obtenerGruposImpartidosPorProfesor(id_profesor) {
    try {
      const query = 'SELECT * FROM grupo WHERE id_profesor = $1';
      const values = [id_profesor];
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async actualizarDatosProfesor(id_profesor, contraseña) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'UPDATE profesores SET contraseña = $1 WHERE id_profesor = $2';
      const values = [hashedPassword, id_profesor];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async eliminarProfesor(id_profesor) {
    try {
      const query = 'DELETE FROM profesores WHERE id_profesor = $1';
      const values = [id_profesor];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async asignarProfesorAGrupo(id_profesor, id_grupo) {
    try {
      const query = 'UPDATE grupo SET id_profesor = $1 WHERE id_grupo = $2';
      const values = [id_profesor, id_grupo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async asignarCalificacion(id_grupo, id_alumno, calificacion) {
    try {
      const query = 'INSERT INTO calificacion (id_inscripcion, calificacion) SELECT id_inscripcion, $1 FROM inscripcion WHERE id_grupo = $2 AND id_alumno = $3';
      const values = [calificacion, id_grupo, id_alumno];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Profesores;