const db = require("../../models");
const Materia = db.Materia;

const createMateria = async (req, res) => {
  const { id, nombre, anio, carreraId } = req.body;

  try {
    const existingMateria = await Materia.findByPk(id);
    if (existingMateria) {
      return res.status(400).json({ error: "El ID de materia ya está en uso" });
    }

    const nuevaMateria = await Materia.create({ id, nombre, anio, carreraId });

    if (!nuevaMateria) {
      return res.status(404).json({ error: "No se pudo crear la materia" });
    }

    res
      .status(201)
      .json({ mensaje: "Materia creada con éxito", materia: nuevaMateria });
  } catch (error) {
    console.error("Error al crear la materia:", error);
    res.status(500).json({ error: "Hubo un error al crear la materia" });
  }
};

const getMateriasByCarrera = async (req, res) => {
  const idCarrera = req.params.id;
  try {
    const carreraConMaterias = await carrera.findByPk(idCarrera, {
      include: "materias",
    });
    if (!carreraConMaterias) {
      return res.status(404).json({ error: "Carrera no encontrada" });
    }
    res.status(200).json(carreraConMaterias.materias);
  } catch (error) {
    console.error("Error al obtener las materias de la carrera:", error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener las materias de la carrera" });
  }
};

const getAllMaterias = async (req, res) => {
  try {
    const materias = await Materia.findAll();
    res.status(200).json(materias);
  } catch (error) {
    console.error("Error al obtener las materias:", error);
    res.status(500).json({ error: "Hubo un error al obtener las materias" });
  }
};

const getMateriaById = async (req, res) => {
  const id = req.params.id;
  try {
    const materia = await Materia.findOne({ where: { id: id } });
    if (!materia) {
      res.status(404).json({ error: "Materia no encontrada" });
    } else {
      res.status(200).json(materia);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMateria = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  try {
    const materia = await Materia.findOne({ where: { id } });
    if (!materia) {
      return res.status(404).json({ error: "Materia no encontrada" });
    }
    await Materia.update(datos, { where: { id } });
    res.status(200).json({ mensaje: "Materia actualizada con éxito" });
  } catch (error) {
    console.error("Error al actualizar la materia:", error);
    res.status(500).json({ error: "Hubo un error al actualizar la materia" });
  }
};

const deleteMateria = async (req, res) => {
  const id = req.params.id;
  try {
    const materiaEliminada = await Materia.destroy({ where: { id } });
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
  updateMateria,
  deleteMateria,
};
