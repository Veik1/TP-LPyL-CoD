const db = require('../../models');
const Carrera = db.Carrera;

const hayMaterias = async (req, res, next) => {
  try {
    const carreras = await Carrera.findAll({ include: Materia });
    const materiasEnCarreras = carreras.flatMap((carrera) => carrera.Materias);
    if (materiasEnCarreras.length > 0) {
      next();
    } else {
      return res
        .status(404)
        .json({ mensaje: 'No hay materias disponibles en las carreras.' });
    }
  } catch (error) {
    console.error('Error al verificar la existencia de materias:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const verificarIdMateria = async (req, res, next) => {
  const id = req.params.id;
  try {
    const materia = await Materia.findByPk(id);
    if (!materia) {
      return res
        .status(404)
        .json({ mensaje: `No se encontró la materia con el ID ${id}` });
    }
    next();
  } catch (error) {
    console.error(`Error al verificar la materia con el ID ${id}:`, error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const verificarMateriaPorIdCarrera = async (req, res, next) => {
  const idCarrera = req.params.id;
  try {
    const carrera = await Carrera.findByPk(idCarrera, { include: Materia });
    const materiasDeCarrera = carrera.Materias;
    if (materiasDeCarrera.length === 0) {
      return res
        .status(400)
        .json({ mensaje: `No hay materias para la carrera con ID ${idCarrera}` });
    }
    next();
  } catch (error) {
    console.error(`Error al verificar las materias de la carrera con el ID ${idCarrera}:`, error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  hayMaterias,
  verificarMateriaPorIdCarrera,
  verificarIdMateria,
};
