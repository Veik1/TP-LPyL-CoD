'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {

    static associate(models) {
      Materia.belongTo(models.Carrera, {as: 'Carrera'})
    }
  }
  Materia.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carreraId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'materia',
    timestamps: false
  });

  return Materia;
};