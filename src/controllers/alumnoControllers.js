// alumnoController.js
exports.crearAlumno = (req, res) => {
  const { nombre, apellido, edad, curso } = req.body;
  connection.query(
    "INSERT INTO alumnos (nombre, apellido, edad, curso) VALUES (?, ?, ?, ?)",
    [nombre, apellido, edad, curso],
    (error, results) => {
      if (error) {
        console.error("Error al crear un alumno:", error);
        res.status(500).json({ mensaje: "Error al crear un alumno" });
        return;
      }
      res.json({ mensaje: "Alumno creado exitosamente", id: results.insertId });
    },
  );
};

// alumnoController.js
exports.obtenerAlumnoPorId = (req, res) => {
  const id = req.params.id;
  // este console log lo meti yo
  console.log(id);
  connection.query(
    "SELECT * FROM alumnos WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error al obtener el alumno:", error);
        res.status(500).json({ mensaje: "Error al obtener el alumno" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ mensaje: "Alumno no encontrado" });
        return;
      }
      res.json(results[0]);
    },
  );
};

// alumnoController.js
exports.actualizarAlumno = (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, edad, curso } = req.body;
  connection.query(
    "UPDATE alumnos SET nombre = ?, apellido = ?, edad = ?, curso = ? WHERE id = ?",
    [nombre, apellido, edad, curso, id],
    (error, results) => {
      if (error) {
        console.error("Error al actualizar el alumno:", error);
        res.status(500).json({ mensaje: "Error al actualizar el alumno" });
        return;
      }
      res.json({ mensaje: "Alumno actualizado exitosamente" });
    },
  );
};

// alumnoController.js
exports.eliminarAlumno = (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM alumnos WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error al eliminar el alumno:", error);
        res.status(500).json({ mensaje: "Error al eliminar el alumno" });
        return;
      }
      res.json({ mensaje: "Alumno eliminado exitosamente" });
    },
  );
};

