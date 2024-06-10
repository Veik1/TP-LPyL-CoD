const express = require('express');
const bodyParser = require('body-parser');
const materiaController = require('../controllers/materiaController');
const carreraController = require('../controllers/carreraController');

const app = express();
app.use(bodyParser.json());

const router = express.Router();

router.get('/:carreraId/materias', materiaController.getAllMaterias);

app.use('/api', router); // Monta las rutas bajo el prefijo '/api'

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
