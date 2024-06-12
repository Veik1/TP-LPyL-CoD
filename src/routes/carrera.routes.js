const { Router } = require("express");
const carreraController = require("../controllers/carrera.controller");
const carreraMiddleware = require("../middlewares/carrera.middleware");
const { schemaValidator } = require("../middlewares/schemaValidator");

const carreraSchema = require("../schemas/carrera.schema");

const route = Router();

route.get(
  "/carreras",
  carreraMiddleware.existenCarreras,
  carreraController.getAllCarreras
); // Ver todas las carreras
route.get(
  "/carreras/:id",
  carreraMiddleware.existenCarreras,
  carreraMiddleware.verificarIdCarrera,
  carreraController.getCarreraById
); // Seleccionar una carrera
route.post(
  "/carreras",
  schemaValidator(carreraSchema),
  carreraController.createCarrera
); // Creación de una Carrera
route.delete(
  "/carreras/:id",
  carreraMiddleware.existenCarreras,
  carreraMiddleware.verificarIdCarrera,
  carreraController.deleteCarreraById
); // Borrar una carrera

module.exports = route;
