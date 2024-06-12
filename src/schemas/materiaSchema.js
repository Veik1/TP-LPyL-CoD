const Joi = require('joi');

const materiaSchema = Joi.object({
  nombre: Joi.string().max(30).required().messages({
    'string.max': 'El nombre de la materia debe tener como máximo {#limit} caracteres.',
    'string.empty': 'Error. El nombre de la materia se encuentra vacío.',
    'any.required': 'Se requiere ingresar el nombre de la materia.'
  }),
  cuatrimestral: Joi.number().integer().min(0).max(1).required().messages({
    'number.base': 'Error. Cuatrimestral debe ser un número.',
    'number.integer': 'Error. Cuatrimestral debe ser un número entero.',
    'number.min': 'El valor de cuatrimestral debe ser 0 o 1.',
    'number.max': 'El valor de cuatrimestral debe ser 0 o 1.',
    'any.required': 'Se requiere especificar si la materia es cuatrimestral.'
  }),
  anio: Joi.number().integer().max(5).required().messages({
    'number.base': 'Error. El año debe ser un número.',
    'number.integer': 'Error. El año debe ser un número entero.',
    'number.max': 'El año no debe ser mayor a {#limit}.',
    'any.required': 'Se requiere ingresar el año.'
  }),
  carreraId: Joi.number().integer().required().messages({
    'number.base': 'Error. El ID de la carrera debe ser un número.',
    'number.integer': 'Error. El ID de la carrera debe ser un número entero.',
    'any.required': 'Se requiere el ID de la carrera.'
  })
});

module.exports = { materiaSchema };
