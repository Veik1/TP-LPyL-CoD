const Joi = require('joi');

const carreraSchema = Joi.object().keys({
    nombre: Joi.string()
        .min(10)
        .max(60)
        .required()
        .messages({
            'string.min': 'La carrera debe tener al menos {#limit} caracteres',
            'string.max': 'La carrera no puede tener más de {#limit} caracteres',
            'string.empty': 'Por favor, ingrese el nombre de la carrera',
            'any.required': 'El nombre de la carrera es obligatorio'
        }),
    grado: Joi.string()
        .required()
        .valid('Licenciatura', 'Tecnicatura', 'Profesorado')
        .messages({
            'any.required': 'Por favor, ingrese un grado',
            'any.only': 'Los grados válidos son Licenciatura, Tecnicatura o Profesorado'
        }),
    universidad: Joi.string()
        .required()
        .valid('UNPAZ', 'UNGS', 'UTN', 'UNAHUR')
        .messages({
            'any.required': 'Por favor. Ingrese el nombre de la Universidad',
            'any.only': 'Las universidades permitidas son UNPAZ, UNGS, UTN y UNAHUR'
        })
});

module.exports = carreraSchema;
