const data = require('../../data/data.json');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/data.json');

module.exports = {
  getAllCarreras: (req, res) => {
    try {
      res.status(200).json(data.carreras);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las carreras." });
    }
  },

  getCarreraById: (req, res) => {
    const id = parseInt(req.params.id);
    const carrera = data.carreras.find((carrera) => carrera.id === id);
    if (!carrera) {
      return res.status(404).json({ message: "Carrera no encontrada." });
    }
    const carreraSinMaterias = {
      id: carrera.id,
      nombre: carrera.nombre,
    };
    res.status(200).json(carreraSinMaterias);
  },

  createCarrera: (req, res) => {
    const nuevaCarrera = req.body;
    let id = data.carreras.length
      ? Math.max(...data.carreras.map((carrera) => carrera.id)) + 1
      : 1;
    const nuevaCarreraConId = { id, ...nuevaCarrera, materias: [] };
    data.carreras.push(nuevaCarreraConId);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res
      .status(201)
      .json({
        message: "Carrera creada correctamente.",
        carrera: nuevaCarreraConId,
      });
  },

  deleteCarrera: (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.carreras.findIndex((carrera) => carrera.id === id);
    if (index !== -1) {
      const [eliminada] = data.carreras.splice(index, 1);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return res
        .status(200)
        .json({
          mensaje: `La carrera ${eliminada.nombre} fue eliminada con éxito.`,
        });
    }
    res.status(404).json({ message: "Carrera no encontrada." });
  },
};
