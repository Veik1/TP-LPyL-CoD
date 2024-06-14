const db = require("../../models");
const Carrera = db.Carrera;

const existenCarreras = async (req, res, next) => {
  try {
    const carreras = await Carrera.findAll();
    if (carreras.length === 0) {
      return res
        .status(404)
        .json({ mensaje: "No existen carreras disponibles" });
    }
    next();
  } catch (error) {
    console.error("Error al verificar la existencia de carreras:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const verificarIdCarrera = async (req, res, next) => {
  const id = req.params.id;
  try {
    const carreraExistente = await Carrera.findByPk(id);
    if (!carreraExistente) {
      return res
        .status(404)
        .json({
          mensaje: `La carrera con el ID ${id} no se encuentra registrada`,
        });
    }
    next();
  } catch (error) {
    console.error(`Error al verificar la carrera con el ID ${id}:`, error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = { existenCarreras, verificarIdCarrera };
