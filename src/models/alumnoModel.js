// models/Alumno.js
const mysql = require('mysql2/promise');

async function findAllAlumnos() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'escueladb'
  });

  const [rows, fields] = await connection.execute('SELECT * FROM alumnos');
  return rows;
}

async function findAlumnoById(id) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'escuelaDB'
  });

  const [rows, fields] = await connection.execute('SELECT * FROM alumnos WHERE id = ?', [id]);
  return rows[0];
}

// Exporta las funciones para su uso en otros archivos
module.exports = {
  findAllAlumnos,
  findAlumnoById
};