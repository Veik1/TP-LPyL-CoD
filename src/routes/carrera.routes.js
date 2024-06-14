const express = require("express");
const router = express.Router();
const {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  updateCarrera,
  deleteCarrera,
} = require("../controllers/carrera.controller");
const { schemaValidator } = require("../middlewares/schemaValidator");
const carreraSchema = require("../schemas/carrera.schema");

router.get("/carreras", getAllCarreras);
router.get("/carreras/:id", getCarreraById);
router.post("/carreras", schemaValidator(carreraSchema), createCarrera);
router.put("/carreras/:id", schemaValidator(carreraSchema), updateCarrera);
router.delete("/carreras/:id", deleteCarrera);

module.exports = router;
