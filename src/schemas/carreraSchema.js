const Joi = require('joi');

const carreraSchema = Joi.object({
  nombre: Joi.string().max(50).required().messages({
    'string.max': 'El nombre de la carrera debe tener como máximo {#limit} caracteres.',
    'string.empty': 'El nombre no puede estar vacío.',
    'any.required': 'Se requiere ingresar el nombre de la carrera.'
  }),
  universidad: Joi.string().required().messages({
    'any.required': 'Se requiere ingresar el nombre de la universidad.',
  }),
});

module.exports = { carreraSchema };
