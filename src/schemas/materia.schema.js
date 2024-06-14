const Joi = require("joi");

const materiaSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "number.base": "El ID debe ser un número",
    "number.integer": "El ID debe ser un número entero",
    "any.required": "El ID es obligatorio",
  }),
  nombre: Joi.string().min(10).max(50).required().messages({
    "string.min": "El nombre de la materia debe tener al menos 10 caracteres",
    "string.max": "El nombre de la materia no puede exceder los 50 caracteres",
    "string.empty": "El nombre de la materia no puede estar vacío",
    "any.required": "El nombre de la materia es obligatorio",
  }),
  anio: Joi.number().integer().min(1).max(5).required().messages({
    "number.base": "Error. El año tiene ser un número",
    "number.integer": "El año debe ser un número entero",
    "number.min": "El año debe ser como mínimo 1",
    "number.max": "El año no puede ser superior a 5",
    "any.required": "Por favor. Ingrese el año",
  }),
  carreraId: Joi.number().integer().required().messages({
    "number.base": "El ID de la carrera tiene que ser numérico",
    "number.integer": "El ID de la carrera tiene que ser un entero",
    "any.required": "Por favor. Ingrese el ID de la carrera",
  }),
});

module.exports = materiaSchema;
