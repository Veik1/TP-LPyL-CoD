const data = require("../../data/data.json");

const carreras = data.carreras; //Extraigo del JSON las carreras

const getAllCarreras = (req, res) => {
  res.status(200).json(carreras);
};

const getCarreraById = (req, res) => {
  const id = req.params.id;
  const carrera = carreras.find((carrera) => carrera.id == id);
  if (!carrera) {
    return res.status(404).json({ error: "Mal ahí, no se pudo encontrar la carrera" });
  }
  res.status(200).json(carrera);
};

const createCarrera = (req, res) => {
  const nuevaCarrera = req.body;
  const id = obtenerNuevoId();
  const carreraConId = { id, ...nuevaCarrera, materias: [] };
  carreras.push(carreraConId);
  return res
    .status(201)
    .json({ mensaje: "Bien ahí! La carrera fue creada con éxito: ", carrera: carreraConId });
};

const obtenerNuevoId = () => {
  if (carreras.length === 0) {
    return 1;
  } else {
    const listaIds = carreras.map((carrera) => carrera.id);
    return Math.max(...listaIds) + 1;
  }
};

const deleteCarreraById = (req, res) => {
  const id = req.params.id;
  const idBorrar = carreras.findIndex((carrera) => carrera.id == id);
  if (idBorrar >= 0) {
    const eliminado = carreras.splice(idBorrar, 1);
    return res
      .status(200)
      .json({
        mensaje: `La carrera ${eliminado[0].nombre} fue eliminada con éxito`,
      });
  } else {
    return res
      .status(404)
      .json({ mensaje: `No hay ninguna carrera con el ID ${id}` });
  }
};

module.exports = {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  deleteCarreraById,
  carreras,
};
