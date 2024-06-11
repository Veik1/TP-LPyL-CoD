const data = require('../data/data.json');

module.exports = {
  
  
    getAllCarreras: (req, res) => {
      res.json(data.carreras);
    }    
  ,
  getCarreraById: (req, res) => {
    // Lógica para obtener una carrera por su ID
    const id = req.params.id
    const carrera = carreras.find(carrera => carrera.id == id)
    const carreraSinMaterias = {
      id: carrera.id,
      nombre: carrera.nombre
    }
    res.status(200).json(carreraSinMaterias)
  },

  createCarrera: (req, res) => {
    const nuevaCarrera = req.body; // Suponiendo que los datos de la carrera están en el cuerpo de la solicitud
    // Agregar lógica para validar y agregar la nueva carrera al archivo JSON
    let id = 1
    if(carreras.length){
      const listaId = carreras.map(carrera=>carrera.id)
      id = Math.max(...listaId)+1
    }
    carreras.push({id,...nuevaCarrera,materias:[]})
    res.status(201).json({ message: 'Carrera creada correctamente.', carrera: nuevaCarrera });
    
  },
  
 
    deleteCarrera: (req, res) => {
      const id = req.params.id;
      // Agregar lógica para buscar y eliminar la carrera del archivo JSON
      const idEliminar = carreras.findIndex(carrera=>carrera.id==id)
      if(idEliminar>=0){
        const eliminar = carreras.splice(idEliminar,1)
        res.status(200).json({mensaje: `La carrera ${eliminar[0].nombre} fue eliminada con exito`})
      }
      res.json({ message: 'Carrera eliminada correctamente.' });
    }
    
  };