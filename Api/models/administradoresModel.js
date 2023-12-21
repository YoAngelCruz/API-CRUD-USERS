const bcrypt = require('bcrypt');
const pool = require('../config/db'); // Importa la configuración de la conexión a la base de datos

const Administradores = {
  async crearAdministrador(nombre, num_tel_a, email, contraseña) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'INSERT INTO administradores (nombre, num_tel_a, email, contraseña) VALUES ($1, $2, $3, $4)';
      const values = [nombre, num_tel_a, email, hashedPassword]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerAdministradorPorId(id) {
    try {
      const query = 'SELECT * FROM administradores WHERE id = $1';
      const values = [id];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async obtenerTodosLosAdministradores() {
    try {
      const query = 'SELECT * FROM administradores';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async actualizarDatosAdministrador(id, nombre, num_tel_a, email) {
    try {
      const query = 'UPDATE administradores SET nombre = $1, num_tel_a = $2, email = $3 WHERE id = $4';
      const values = [nombre, num_tel_a, email, id]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async actualizarContraseñaAdministrador(id, contraseña) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'UPDATE administradores SET contraseña = $1 WHERE id = $2';
      const values = [hashedPassword, id]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async eliminarAdministrador(id) {
    try {
      const query = 'DELETE FROM administradores WHERE id = $1';
      const values = [id];
      await pool.query(query, values);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

module.exports = Administradores;