const { carreras } = require("../controllers/carrera.controller");

const existenCarreras = (req, res, next) => {
  const carrerasDisponibles = carreras.length > 0;
  if (!carrerasDisponibles) {
    return res.status(404).json({ mensaje: "No existen carreras disponibles" });
  }
  next();
};

const verificarIdCarrera = (req, res, next) => {
  const id = req.params.id;
  const carreraExistente = carreras.some(
    (carrera) => carrera.id === parseInt(id)
  );
  if (!carreraExistente) {
    return res.status(404).json({ mensaje: `La carrera con el ID ${id} no se encuentra registrada` });
  }
  next();
};

module.exports = { existenCarreras, verificarIdCarrera };
