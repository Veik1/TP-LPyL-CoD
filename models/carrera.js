'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    static associate(models) {
      Carrera.hasMany(models.Materia, {as: 'Materia'})
    }
  }

  Carrera.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    universidad: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Carrera',
    timestamps: false, // Evita que Sequelize agregue createdAt y updatedAt
    tableName: 'carrera' // Nombre específico de la tabla en la base de datos
  });

  return Carrera;
};
