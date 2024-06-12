const data = require('../../data/data.json');
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/data.json");

module.exports = {
  getAllMaterias: (req, res) => {
    const carreraId = parseInt(req.params.carreraId);
    const carrera = data.carreras.find((carrera) => carrera.id === carreraId);
    if (!carrera) {
      return res.status(404).json({ message: "Carrera no encontrada." });
    }
    res.status(200).json(carrera.materias);
  },

  getMateriaById: (req, res) => {
    const { carreraId, materiaId } = req.params;
    const carrera = data.carreras.find(
      (carrera) => carrera.id === parseInt(carreraId)
    );
    if (!carrera) {
      return res.status(404).json({ message: "Carrera no encontrada." });
    }
    const materia = carrera.materias.find(
      (materia) => materia.id === parseInt(materiaId)
    );
    if (!materia) {
      return res.status(404).json({ message: "Materia no encontrada." });
    }
    res.status(200).json(materia);
  },

  createMateria: (req, res) => {
    const carreraId = parseInt(req.params.carreraId);
    const carrera = data.carreras.find((carrera) => carrera.id === carreraId);
    if (!carrera) {
      return res.status(404).json({ message: "Carrera no encontrada." });
    }
    const nuevaMateria = req.body;
    let id = carrera.materias.length
      ? Math.max(...carrera.materias.map((materia) => materia.id)) + 1
      : 1;
    const nuevaMateriaConId = { id, ...nuevaMateria, carreraId };
    carrera.materias.push(nuevaMateriaConId);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(201).json({
      message: "Materia creada correctamente.",
      materia: nuevaMateriaConId,
    });
  },

  updateMateria: (req, res) => {
    const { carreraId, materiaId } = req.params;
    const carrera = data.carreras.find(
      (carrera) => carrera.id === parseInt(carreraId)
    );
    if (!carrera) {
      return res.status(404).json({ message: "Carrera no encontrada." });
    }
    const materiaIndex = carrera.materias.findIndex(
      (materia) => materia.id === parseInt(materiaId)
    );
    if (materiaIndex === -1) {
      return res.status(404).json({ message: "Materia no encontrada." });
    }
    const updatedMateria = { ...carrera.materias[materiaIndex], ...req.body };
    carrera.materias[materiaIndex] = updatedMateria;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json({
      message: "Materia actualizada correctamente.",
      materia: updatedMateria,
    });
  },

  deleteMateria: (req, res) => {
    const { carreraId, materiaId } = req.params;
    const carrera = data.carreras.find(
      (carrera) => carrera.id === parseInt(carreraId)
    );
    if (!carrera) {
      return res.status(404).json({ message: "Carrera no encontrada." });
    }
    const materiaIndex = carrera.materias.findIndex(
      (materia) => materia.id === parseInt(materiaId)
    );
    if (materiaIndex === -1) {
      return res.status(404).json({ message: "Materia no encontrada." });
    }
    const [eliminada] = carrera.materias.splice(materiaIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json({
      message: `La materia ${eliminada.nombre} fue eliminada con éxito.`,
    });
  },
};
