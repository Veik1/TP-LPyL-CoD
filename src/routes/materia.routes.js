
const { Router } = require('express')

//Controladores
const materiaController = require('../controllers/materia.controller')

const carreraMiddleware = require('../middlewares/carrera.middleware')
const materiaMiddleware = require('../middlewares/materia.middleware')

//Validador de Schemas
const { schemaValidator } = require('../middlewares/schemaValidator')

//Schemas
const materiaSchema = require('../schemas/materia.schema')


const route = Router()

route.post('/carreras/:id/materia',
    schemaValidator(materiaSchema),
    carreraMiddleware.verificarIdCarrera,
    materiaController.createMateria) // Crear una materia dentro de una carrera
route.get('/carreras/:id/materias',
    carreraMiddleware.existenCarreras,
    carreraMiddleware.verificarIdCarrera,
    materiaMiddleware.verificarMateriaPorIdCarrera,
    materiaController.getMateriasByCarrera) // Ver todas las materias de una carrera
route.get('/materias',
    materiaMiddleware.hayMaterias,
    materiaController.getAllMaterias) // Ver todas las materias
route.get('/materias/:id',
    materiaMiddleware.verificarIdMateria,
    materiaController.getMateriaById) // Buscar una materia
route.delete('/materias/:id', materiaMiddleware.verificarIdMateria, materiaController.deleteMateriaById) // Borrar una materia


module.exports = route;
