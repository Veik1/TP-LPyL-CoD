const { carreras } = require("../controllers/carrera.controller");
const { materias } = require("../controllers/materia.controller");

const hayMaterias = (req, res, next) => {
  const materiasEnCarreras = carreras.flatMap((carrera) => carrera.materias);
  if (materiasEnCarreras.length > 0) {
    next();
  } else {
    return res
      .status(404)
      .json({ mensaje: "No hay materias disponibles en las carreras." });
  }
};

const verificarIdMateria = (req, res, next) => {
  const id = req.params.id;
  const materiasEnCarreras = carreras.flatMap((carrera) => carrera.materias);
  const idSeleccionada = materiasEnCarreras.findIndex(
    (materia) => materia.id == id
  );
  if (idSeleccionada < 0) {
    return res
      .status(404)
      .json({ mensaje: `No se encontró la materia con el ID ${id}` });
  }
  next();
};

const verificarMateriaPorIdCarrera = (req, res, next) => {
  const idCarrera = req.params.id;
  const carrera = carreras.find((carrera) => carrera.id == idCarrera);
  const materiasDeCarrera = carrera.materias;
  if (materiasDeCarrera.length == 0) {
    return res
      .status(400)
      .json({ mensaje: `No hay materias para la carrera con ID ` });
  }
  next();
};

module.exports = {
  hayMaterias,
  verificarMateriaPorIdCarrera,
  verificarIdMateria,
};
