const express = require('express');
const router = express.Router();
const carreraController = require('../controllers/carreraController');
const { schemaValidator } = require('../middlewares/schemaValidator');
const { carreraSchema } = require('../schemas/carreraSchema');

router.get('/carreras', carreraController.getAllCarreras);
router.get('/carreras/:id', carreraController.getCarreraById);
router.post('/carreras', schemaValidator(carreraSchema), carreraController.createCarrera);
router.delete('/carreras/:id', carreraController.deleteCarrera);

module.exports = router;
