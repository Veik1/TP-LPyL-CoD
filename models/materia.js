'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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