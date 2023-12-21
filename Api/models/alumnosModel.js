const bcrypt = require('bcrypt');
const pool = require('../config/db'); // Importa la configuración de la conexión a la base de datos

const Alumnos = {
  async crearAlumno(nombre, clave, turno, fecha_inicio, edad, curp, domicilio, num_tel_a, email, contraseña, tutor) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'INSERT INTO alumnos (nombre, clave, turno, fecha_inicio, edad, curp, domicilio, num_tel_a, email, contraseña, tutor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
      const values = [nombre, clave, turno, fecha_inicio, edad, curp, domicilio, num_tel_a, email, hashedPassword, tutor]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async obtenerAlumnoPorId(id) {
    try {
      const query = 'SELECT * FROM alumnos WHERE id = $1';
      const values = [id];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  async obtenerTodosLosAlumnos() {
    try {
      const query = 'SELECT * FROM alumnos';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async obtenerModulosCursadosPorAlumno(id_alumno) {
    try {
      const query = 'SELECT modulos.* FROM modulos INNER JOIN grupo ON modulos.id_modulo = grupo.id_modulo INNER JOIN inscripcion ON grupo.id_grupo = inscripcion.id_grupo WHERE inscripcion.id_alumno = $1';
      const values = [id_alumno];
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async obtenerModulosConCalificaciones(id_alumno) {
    try {
      const query = `
        SELECT modulos.*, calificacion.calificacion
        FROM modulos
        INNER JOIN grupo ON modulos.id_modulo = grupo.id_modulo
        INNER JOIN inscripcion ON grupo.id_grupo = inscripcion.id_grupo
        LEFT JOIN calificacion ON inscripcion.id_inscripcion = calificacion.id_inscripcion
        WHERE inscripcion.id_alumno = $1
      `;
      const values = [id_alumno];
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async actualizarDatosAlumno(id, nombre, clave, edad, curp, domicilio, num_tel_a, email, turno, fecha_inicio, tutor) {
    try {
      const query = 'UPDATE alumnos SET nombre = $1, clave = $2, edad = $3, curp = $4, domicilio = $5, num_tel_a = $6, email = $7, turno = $8, fecha_inicio = $9, tutor = $10 WHERE id = $11';
      const values = [nombre, clave, edad, curp, domicilio, num_tel_a, email, turno, fecha_inicio, tutor, id]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async actualizarContraseñaAlumno(id, contraseña) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'UPDATE alumnos SET contraseña = $1 WHERE id = $2';
      const values = [hashedPassword, id]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async eliminarAlumno(id) {
    try {
      const query = 'DELETE FROM alumnos WHERE id = $1';
      const values = [id];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async inscribirseAGrupo(id_alumno, id_grupo, fecha) {
    try {
      const query = 'INSERT INTO inscripcion (id_alumno, id_grupo, fecha) VALUES ($1, $2, $3)';
      const values = [id_alumno, id_grupo, fecha];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Alumnos;