const mysql = require('mysql2');

/* const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto por el nombre de usuario de tu MySQL
  password: '1234', // Cambia esto por tu contraseña de MySQL
  database: 'escuelaDB' // Nombre de la base de datos que creaste
}); */

const express = require('express');
const { findAllAlumnos, findAlumnoById } = require('./models/alumnoModel'); // Importa las funciones del modelo de Alumno

const app = express();
const PORT = 3000;

app.get('/alumnos', async (req, res) => {
  const alumnos = await findAllAlumnos();
  res.json(alumnos);
});

app.get('/alumnos/:id', async (req, res) => {
    const id = req.params.id;
    const alumno = await findAlumnoById(id);
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ mensaje: 'Alumno no encontrado' });
    }
  });

app.get('/alumnos', async (req, res) => {
    try {
      // Conectar a la base de datos
      const connection = await mysql.createConnection({
        host: 'localhost',
        database: 'escueladb',
        user: 'root',
        password: '1234',
      });


    // Consultar los datos de la base de datos
    const [rows, fields] = await connection.execute('SELECT * FROM alumnos');

    // Renderizar la vista con los datos obtenidos
    res.render('alumnos', { alumnos: rows });

  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).send('Error al obtener datos de la base de datos');
  }
});



// Configurar Express para usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Resto del código...

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});