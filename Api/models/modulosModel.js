const pool = require('../config/db'); // Importa la configuración de la conexión a la base de datos

const Modulos = {
  async crearModulo(nombre, descripcion, duracion) {
    try {
      const query = 'INSERT INTO modulos (nombre, descripcion, duracion) VALUES ($1, $2, $3)';
      const values = [nombre, descripcion, duracion];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async obtenerModuloPorId(id_modulo) {
    try {
      const query = 'SELECT * FROM modulos WHERE id_modulo = $1';
      const values = [id_modulo];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  async obtenerTodosLosModulos() {
    try {
      const query = 'SELECT * FROM modulos';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async actualizarDatosModulo(id_modulo, nombre, descripcion, duracion) {
    try {
      const query = 'UPDATE modulos SET nombre = $1, descripcion = $2, duracion = $3 WHERE id_modulo = $4';
      const values = [nombre, descripcion, duracion, id_modulo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async eliminarModulo(id_modulo) {
    try {
      const query = 'DELETE FROM modulos WHERE id_modulo = $1';
      const values = [id_modulo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async asignarModuloAGrupo(id_modulo, id_grupo) {
    try {
      const query = 'UPDATE grupo SET id_modulo = $1 WHERE id_grupo = $2';
      const values = [id_modulo, id_grupo];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Modulos;