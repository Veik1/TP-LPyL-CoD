const data = require('../data/data.json')
const {carreras} = require('./carreraController')

module.exports = {
  getAllMaterias: (req, res) => {
    const carreraId = req.params.carreraId;
    const carrera = data.carreras.find(carrera => carrera.id === parseInt(carreraId));
     if (!carrera) {
      return res.status(404).json({ message: 'Carrera no encontrada.' });
    }
    res.json(carrera.materias);
  },

  getMateriaById: (req, res) => {
    // Lógica para obtener una materia específica de una carrera por su ID
  },

  createMateria: (req, res) => {
    // Lógica para crear una nueva materia para una carrera
    const dataMateria = req.body
    let id = 1
    const carrera = carreras.find(carrera=>carrera.id==idCarrera)
  },

  updateMateria: (req, res) => {
    // Lógica para actualizar una materia existente de una carrera
  },

  deleteMateria: (req, res) => {
    // Lógica para eliminar una materia de una carrera
  }
};
