const db = require('../../models');
const Materia = db.Materia;

const createMateria = async (req, res) => {
  const dataMateria = req.body;
  const idCarrera = req.params.id;
  try {
    const carreraExistente = await carrera.findByPk(idCarrera);
    if (!carreraExistente) {
      return res.status(404).json({ error: "Carrera no encontrada" });
    }
    const nuevaMateria = await materia.create({ ...dataMateria, carreraId: idCarrera });
    res.status(201).json({ mensaje: "La materia ha sido creada", materia: nuevaMateria });
  } catch (error) {
    console.error("Error al crear la materia:", error);
    res.status(500).json({ error: "Hubo un error al crear la materia" });
  }
};

const getMateriasByCarrera = async (req, res) => {
  const idCarrera = req.params.id;
  try {
    const carreraConMaterias = await carrera.findByPk(idCarrera, {
      include: 'materias'
    });
    if (!carreraConMaterias) {
      return res.status(404).json({ error: "Carrera no encontrada" });
    }
    res.status(200).json(carreraConMaterias.materias);
  } catch (error) {
    console.error("Error al obtener las materias de la carrera:", error);
    res.status(500).json({ error: "Hubo un error al obtener las materias de la carrera" });
  }
};

const getAllMaterias = async (req, res) => {
  try {
    const materias = await materia.findAll();
    res.status(200).json(materias);
  } catch (error) {
    console.error("Error al obtener las materias:", error);
    res.status(500).json({ error: "Hubo un error al obtener las materias" });
  }
};

const getMateriaById = async (req, res) => {
  const id = req.params.id;
  try {
    const materiaEncontrada = await materia.findByPk(id);
    if (!materiaEncontrada) {
      return res.status(404).json({ error: "Materia no encontrada" });
    }
    res.status(200).json(materiaEncontrada);
  } catch (error) {
    console.error("Error al obtener la materia:", error);
    res.status(500).json({ error: "Hubo un error al obtener la materia" });
  }
};

const deleteMateriaById = async (req, res) => {
  const id = req.params.id;
  try {
    const materiaEliminada = await materia.destroy({ where: { id } });
    if (!materiaEliminada) {
      return res.status(404).json({ error: "Materia no encontrada" });
    }
    res.status(200).json({ mensaje: "Materia eliminada con éxito" });
  } catch (error) {
    console.error("Error al eliminar la materia:", error);
    res.status(500).json({ error: "Hubo un error al eliminar la materia" });
  }
};

module.exports = {
  createMateria,
  getMateriasByCarrera,
  getAllMaterias,
  getMateriaById,
  deleteMateriaById,
};
