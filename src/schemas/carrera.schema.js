const Joi = require("joi");

const carreraSchema = Joi.object().keys({
  id: Joi.number().integer().required().messages({
    "number.base": "El ID debe ser un número",
    "number.integer": "El ID debe ser un número entero",
    "any.required": "El ID es obligatorio",
  }),
  nombre: Joi.string().min(10).max(60).required().messages({
    "string.min": "La carrera debe tener al menos {#limit} caracteres",
    "string.max": "La carrera no puede tener más de {#limit} caracteres",
    "string.empty": "Por favor, ingrese el nombre de la carrera",
    "any.required": "El nombre de la carrera es obligatorio",
  }),
  grado: Joi.string()
    .required()
    .valid("Licenciatura", "Tecnicatura", "Profesorado", "Ingenieria")
    .messages({
      "any.required": "Por favor, ingrese un grado",
      "any.only":
        "Los grados válidos son Licenciatura, Tecnicatura, Profesorado, o una Ingeniería",
    }),
  universidad: Joi.string()
    .required()
    .valid("UNPAZ", "UNGS", "UTN", "UNAHUR")
    .messages({
      "any.required": "Por favor. Ingrese el nombre de la Universidad",
      "any.only": "Las universidades permitidas son UNPAZ, UNGS, UTN y UNAHUR",
    }),
});

module.exports = carreraSchema;
