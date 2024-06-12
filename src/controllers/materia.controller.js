const data = require("../../data/data.json");
const { carreras } = require("./carrera.controller");
const materias = data.carreras.materias;

const createMateria = (req, res) => {
  const dataMateria = req.body;
  const idCarrera = req.params.id;
  let id = 1;
  const carrera = carreras.find((carrera) => carrera.id == idCarrera);
  if (carrera.materias.length > 0) {
    const ids = carrera.materias.map((materia) => materia.id);
    id = Math.max(...ids) + 1;
  }
  carrera.materias.push({ id, ...dataMateria, idCarrera });
  return res
    .status(201)
    .json({
      mensaje: "La materia ha sido creada",
      materia: carrera.materias[carrera.materias.length - 1],
    });
};

const getMateriasByCarrera = (req, res) => {
  const idCarrera = req.params.id;
  const carrera = carreras.find((carrera) => carrera.id == idCarrera);
  const materiasById = carrera.materias;
  return res
    .status(200)
    .json({ carrera: carrera.nombre, materias: materiasById });
};

const getAllMaterias = (req, res) => {
  const materiasRecorriendoCarreras = carreras.map(
    (carrera) => carrera.materias
  );
  return res.status(200).json(materiasRecorriendoCarreras);
};

const getMateriaById = (req, res) => {
  const id = req.params.id;
  const materiasExtraidas = carreras.flatMap((carrera) => carrera.materias);
  const materia = materiasExtraidas.find((materia) => materia.id == id);
  res.status(200).json(materia);
};

const deleteMateriaById = (req, res) => {
  const id = req.params.id;
  const materiasExtraidas = carreras.flatMap((carrera) => carrera.materias);
  const idx = materiasExtraidas.findIndex((materia) => materia.id == id);
  if (idx >= 0) {
    const carrera = carreras.find((carrera) =>
      carrera.materias.some((materia) => materia.id == id)
    );
    const idxMateriaDentroDeCarrera = carrera.materias.findIndex(
      (materia) => materia.id == id
    );
    const borrada = carrera.materias.splice(idxMateriaDentroDeCarrera, 1);
    res
      .status(200)
      .json({
        mensaje: `La materia ${borrada[0].nombre} fue borrada con exito`,
      });
  }
};

module.exports = {
  createMateria,
  getMateriasByCarrera,
  getAllMaterias,
  getMateriaById,
  deleteMateriaById,
  materias,
};
