const { Router } = require('express');
const materiaController = require('../controllers/materia.controller');
const carreraMiddleware = require('../middlewares/carrera.middleware');
const materiaMiddleware = require('../middlewares/materia.middleware');
const { schemaValidator } = require('../middlewares/schemaValidator');
const materiaSchema = require('../schemas/materia.schema');

const route = Router();

// Crear una materia para una carrera específica
route.post('/carreras/:id/materia',
    schemaValidator(materiaSchema), // Validar el esquema antes de crear una materia
    carreraMiddleware.verificarIdCarrera, // Verificar si la carrera existe
    materiaController.createMateria);

// Obtener todas las materias de una carrera específica
route.get('/carreras/:id/materias',
    carreraMiddleware.existenCarreras, // Verificar si existen carreras
    carreraMiddleware.verificarIdCarrera, // Verificar si la carrera existe
    materiaMiddleware.verificarMateriaPorIdCarrera, // Verificar si hay materias para la carrera
    materiaController.getMateriasByCarrera);

// Obtener todas las materias
route.get('/materias',
    materiaMiddleware.hayMaterias, // Verificar si hay materias disponibles
    materiaController.getAllMaterias);

// Obtener una materia por su ID
route.get('/materias/:id',
    materiaMiddleware.verificarIdMateria, // Verificar si la materia existe
    materiaController.getMateriaById);

// Borrar una materia por su ID
route.delete('/materias/:id',
    materiaMiddleware.verificarIdMateria, // Verificar si la materia existe
    materiaController.deleteMateriaById);

// Manejo de errores centralizado
route.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

module.exports = route;
