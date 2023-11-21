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
      throw error;
    }
  },

  async obtenerAdministradorPorId(id_admin) {
    try {
      const query = 'SELECT * FROM administradores WHERE id_admin = $1';
      const values = [id_admin];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  async obtenerTodosLosAdministradores() {
    try {
      const query = 'SELECT * FROM administradores';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async actualizarDatosAdministrador(id_admin, nombre, num_tel_a, email, contraseña) {
    try {
      const hashedPassword = await bcrypt.hash(contraseña, 10); // Encripta la contraseña
      const query = 'UPDATE administradores SET nombre = $1, num_tel_a = $2, email = $3, contraseña = $4 WHERE id_admin = $5';
      const values = [nombre, num_tel_a, email, hashedPassword, id_admin]; // Usa la contraseña encriptada
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  },

  async eliminarAdministrador(id_admin) {
    try {
      const query = 'DELETE FROM administradores WHERE id_admin = $1';
      const values = [id_admin];
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Administradores;