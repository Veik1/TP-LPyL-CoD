const data = require('../data/data.json');

module.exports = {
  
  
    getAllCarreras: (req, res) => {
      res.json(data.carreras);
    }    
  ,
  getCarreraById: (req, res) => {
    // Lógica para obtener una carrera por su ID
  },
  createCarrera: (req, res) => {
    const nuevaCarrera = req.body; // Suponiendo que los datos de la carrera están en el cuerpo de la solicitud
    // Agregar lógica para validar y agregar la nueva carrera al archivo JSON
    res.status(201).json({ message: 'Carrera creada correctamente.', carrera: nuevaCarrera });
    
  },
  
 
    deleteCarrera: (req, res) => {
      const id = req.params.id;
      // Agregar lógica para buscar y eliminar la carrera del archivo JSON
      res.json({ message: 'Carrera eliminada correctamente.' });
    }
    
  };
