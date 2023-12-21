const pool = require('../config/db');

const Inscripciones = {
  async crearInscripcion(id_alumno, id_grupo, fecha) {
    try {
      const query = 'INSERT INTO inscripcion (id_alumno, id_grupo, fecha) VALUES ($1, $2, $3)';
      const values = [id_alumno, id_grupo, fecha];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },
  
  async crearInscripciones(id_grupo, listaAlumnos) {
    let client; // Declara la variable client
    try {
      client = await pool.connect(); // Inicializa client
      await client.query('BEGIN');

      // Iterar sobre la lista de alumnos y realizar inserciones en la tabla inscripcion
      for (const id_alumno of listaAlumnos) {
        const query = 'INSERT INTO inscripcion (id_alumno, id_grupo, fecha) VALUES ($1, $2, CURRENT_DATE)';
        const values = [id_alumno, id_grupo];
        await client.query(query, values);
      }

      await client.query('COMMIT');
    } catch (error) {
      console.error(error);
      if (client) {
        await client.query('ROLLBACK');
      }
      throw error;
    } finally {
      if (client) {
        client.release();
      }
    }
  },

  async obtenerInscripcionPorId(id_inscripcion) {
    try {
      const query = 'SELECT * FROM inscripcion WHERE id_inscripcion = $1';
      const values = [id_inscripcion];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerTodasLasInscripciones() {
    try {
      const query = 'SELECT * FROM inscripcion';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async actualizarDatosInscripcion(id_inscripcion, id_alumno, id_grupo, fecha) {
    try {
      const query = 'UPDATE inscripcion SET id_alumno = $1, id_grupo = $2, fecha = $3 WHERE id_inscripcion = $4';
      const values = [id_alumno, id_grupo, fecha, id_inscripcion];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async eliminarInscripcion(id_inscripcion) {
    try {
      const query = 'DELETE FROM inscripcion WHERE id_inscripcion = $1';
      const values = [id_inscripcion];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

module.exports = Inscripciones;
