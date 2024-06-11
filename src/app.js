const express = require('express');
const bodyParser = require('body-parser');
const materiaController = require('../controllers/materiaController');
const carreraController = require('../controllers/carreraController');

const app = express();
app.use(bodyParser.json());

// Ruta para obtener todas las carreras
app.get('/api/carreras', carreraController.getAllCarreras);

// Ruta para obtener una carrera por su ID
app.get('/api/carreras/:id', carreraController.getCarreraById);

const router = express.Router();

router.get('/:carreraId/materias', materiaController.getAllMaterias);

app.use('/api', router); // Monta las rutas bajo el prefijo '/api'

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
