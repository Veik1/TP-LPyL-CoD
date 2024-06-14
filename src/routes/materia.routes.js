const express = require("express");
const router = express.Router();
const {
  getAllMaterias,
  getMateriaById,
  createMateria,
  updateMateria,
  deleteMateria,
} = require("../controllers/materia.controller");
const { schemaValidator } = require("../middlewares/schemaValidator");
const materiaSchema = require("../schemas/materia.schema");

router.get("/materias", getAllMaterias);
router.get("/materias/:id", getMateriaById);
router.post(
  "/carreras/:id/materia",
  schemaValidator(materiaSchema),
  createMateria
);
router.put("/materias/:id", schemaValidator(materiaSchema), updateMateria);
router.delete("/materias/:id", deleteMateria);

module.exports = router;
