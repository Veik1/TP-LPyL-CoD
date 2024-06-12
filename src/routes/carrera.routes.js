const { Router } = require("express");
const carreraController = require("../controllers/carrera.controller");
const carreraMiddleware = require("../middlewares/carrera.middleware");
const { schemaValidator } = require("../middlewares/schemaValidator");
const carreraSchema = require("../schemas/carrera.schema");

const route = Router();

// Ver todas las carreras
route.get(
  "/carreras",
  carreraMiddleware.existenCarreras,
  carreraController.getAllCarreras
);

// Seleccionar una carrera por ID
route.get(
  "/carreras/:id",
  carreraMiddleware.existenCarreras,
  carreraMiddleware.verificarIdCarrera,
  carreraController.getCarreraById
);

// Creación de una carrera
route.post(
  "/carreras",
  schemaValidator(carreraSchema), // Validar el esquema antes de crear una carrera
  carreraController.createCarrera
);

// Borrar una carrera por ID
route.delete(
  "/carreras/:id",
  carreraMiddleware.existenCarreras,
  carreraMiddleware.verificarIdCarrera,
  carreraController.deleteCarreraById
);

// Manejo de errores centralizado
route.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

module.exports = route;
