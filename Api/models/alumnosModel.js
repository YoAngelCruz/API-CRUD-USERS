const pool = require('../config/db'); // Importa la configuración de la conexión a la base de datos

const Alumnos = {
  async crearAlumno(nombre, clave, turno, fecha_inicio, edad, domicilio, num_tel_a, email, contraseña, tutor) {
    try {
      const query = 'INSERT INTO alumnos (nombre, clave, turno, fecha_inicio, edad, domicilio, num_tel_a, email, contraseña, tutor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
      const values = [nombre, clave, turno, fecha_inicio, edad, domicilio, num_tel_a, email, contraseña, tutor];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async obtenerAlumnoPorId(id_alumno) {
    try {
      const query = 'SELECT * FROM alumnos WHERE id_alumno = $1';
      const values = [id_alumno];
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

  async actualizarDatosAlumno(id_alumno, camposActualizables) {
    try {
      const { contraseña, domicilio } = camposActualizables;
      let query = 'UPDATE alumnos SET ';
      const values = [];
      const params = [];

      if (contraseña !== undefined) {
        params.push(`contraseña = $${params.length + 1}`);
        values.push(contraseña);
      }

      if (domicilio !== undefined) {
        params.push(`domicilio = $${params.length + 1}`);
        values.push(domicilio);
      }

      query += params.join(', ') + ' WHERE id_alumno = $' + (params.length + 1);
      values.push(id_alumno);

      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async eliminarAlumno(id_alumno) {
    try {
      const query = 'DELETE FROM alumnos WHERE id_alumno = $1';
      const values = [id_alumno];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async inscribirseAGrupo(id_alumno, id_grupo) {
    try {
      const query = 'INSERT INTO inscripcion (id_alumno, id_grupo) VALUES ($1, $2)';
      const values = [id_alumno, id_grupo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Alumnos;