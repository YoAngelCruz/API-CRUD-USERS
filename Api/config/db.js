require('dotenv').config();

const { Pool } = require('pg');

// Configura la conexión a la base de datos
const pool = new Pool({
  user: process.env.TEST_DB_USER, // Nombre de usuario de PostgreSQL
  host: process.env.TEST_DB_HOST, // Host de PostgreSQL (por lo general, 'localhost')
  database: process.env.TEST_DB_DATABASE, // Nombre de la base de datos
  password: process.env.TEST_DB_PASSWORD, // Contraseña de PostgreSQL
  port: process.env.TEST_DB_PORT, // Puerto de PostgreSQL (por lo general, 5432)
});

module.exports = pool;
