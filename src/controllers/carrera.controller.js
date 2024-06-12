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
  const datos = req.body;
  let indexCarrera = 1;
  if (carreras.length) {
    const listaIndices = carreras.map(carrera => carrera.id);
    indexCarrera = Math.max(...listaIndices) + 1;
  }
  carreras.push({ ID: indexCarrera, ...datos, materias: [] });
  return res.status(201).json({ mensaje: 'Bien ahí, la carrera fue creada con éxito:', carrera: carreras[carreras.length - 1] });
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
