const db = require('../../models');
const Carrera = db.Carrera;
const Materia = db.Materia;

const getAllCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.findAll();
    res.status(200).json(carreras);
  } catch (error) {
    console.error('Error al obtener las carreras:', error);
    res.status(500).json({ error: 'Hubo un error al obtener las carreras' });
  }
};

const getCarreraById = async (req, res) => {
  const id = req.params.id;
  try {
      const Carrera = await Carrera.findOne({ where: { id: id } });
      if (!Carrera) {
          res.status(404).json({ error: 'Carrera no encontrada' });
      } else {
          res.status(200).json(Carrera);
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

const createCarrera = async (req, res) => {
  const datos = req.body;
  try {
    const nuevaCarrera = await Carrera.create(datos);
    res.status(201).json({ mensaje: 'Carrera creada con éxito', carrera: nuevaCarrera });
  } catch (error) {
    console.error('Error al crear la carrera:', error);
    res.status(500).json({ error: 'Hubo un error al crear la carrera' });
  }
};

const deleteCarreraById = async (req, res) => {
  const id = req.params.id;
  try {
    const carreraEliminada = await Carrera.destroy({ where: { id } });
    if (!carreraEliminada) {
      return res.status(404).json({ error: 'Carrera no encontrada' });
    }
    res.status(200).json({ mensaje: 'Carrera eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la carrera:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar la carrera' });
  }
};

module.exports = {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  deleteCarreraById,
};
