const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');
const { schemaValidator } = require('../middlewares/schemaValidator');
const { materiaSchema } = require('../schemas/materiaSchema');

router.get('/:carreraId/materias', materiaController.getAllMaterias);
router.get('/:carreraId/materias/:materiaId', materiaController.getMateriaById);
router.post('/:carreraId/materias', schemaValidator(materiaSchema), materiaController.createMateria);
router.put('/:carreraId/materias/:materiaId', materiaController.updateMateria);
router.delete('/:carreraId/materias/:materiaId', materiaController.deleteMateria);

module.exports = router;
