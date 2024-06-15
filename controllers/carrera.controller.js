const db = require("../../models");
const carreraSchema = require("../schemas/carrera.schema");
const Carrera = db.Carrera;
const Materia = db.Materia;

const getAllCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.findAll();
    res.status(200).json(carreras);
  } catch (error) {
    console.error("Error al obtener las carreras:", error);
    res.status(500).json({ error: "Hubo un error al obtener las carreras" });
  }
};

const getCarreraById = async (req, res) => {
  const id = req.params.id;
  try {
    const carrera = await Carrera.findOne({ where: { id: id } });
    if (!carrera) {
      res.status(404).json({ error: "Carrera no encontrada" });
    } else {
      res.status(200).json(carrera);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCarrera = async (req, res) => {
  const datos = req.body;

  const { error } = carreraSchema.validate(datos);
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(400).json({ error: errorMessage });
  }

  try {
    const nuevaCarrera = await Carrera.create(datos);
    res
      .status(201)
      .json({ mensaje: "Carrera creada con éxito", carrera: nuevaCarrera });
  } catch (error) {
    console.error("Error al crear la carrera:", error);
    res.status(500).json({ error: "Hubo un error al crear la carrera" });
  }
};

const updateCarrera = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  try {
    const carrera = await Carrera.findOne({ where: { id } });
    if (!carrera) {
      return res
        .status(404)
        .json({ error: "Mal ahí, la carrera no pudo ser encontrada" });
    }
    await Carrera.update(datos, { where: { id } });
    res
      .status(200)
      .json({ mensaje: "La carrera actualizada con éxito, bien ahí padre" });
  } catch (error) {
    console.error("Error al actualizar la carrera:", error);
  }
};

const deleteCarrera = async (req, res) => {
  const id = req.params.id;
  try {
    const carreraEliminada = await Carrera.destroy({ where: { id } });
    if (!carreraEliminada) {
      return res.status(404).json({ error: "Carrera no encontrada" });
    }
    res.status(200).json({ mensaje: "Carrera eliminada con éxito" });
  } catch (error) {
    console.error("Error al eliminar la carrera:", error);
    res.status(500).json({ error: "Hubo un error al eliminar la carrera" });
  }
};

module.exports = {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  updateCarrera,
  deleteCarrera,
};
