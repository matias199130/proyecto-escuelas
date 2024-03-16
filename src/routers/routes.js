// routes.js
const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoControllers');

router.post('/', alumnoController.crearAlumno);
router.get('/alumnos', alumnoController.obtenerAlumnos);
router.get('/alumnos/:id', alumnoController.obtenerAlumnoPorId);
router.put('/alumnos/:id', alumnoController.actualizarAlumno);
router.delete('/alumnos/:id', alumnoController.eliminarAlumno);

module.exports = router;
