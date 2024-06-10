const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');

router.get('/:carreraId/materias', materiaController.getAllMaterias);
router.get('/:carreraId/materias/:materiaId', materiaController.getMateriaById);
router.post('/:carreraId/materias', materiaController.createMateria);
router.put('/:carreraId/materias/:materiaId', materiaController.updateMateria);
router.delete('/:carreraId/materias/:materiaId', materiaController.deleteMateria);

module.exports = router;
