'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  endereco.init({
    matricula: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    papel: DataTypes.FLOAT,
    metal: DataTypes.FLOAT,
    vidro: DataTypes.FLOAT,
    organico: DataTypes.FLOAT,
    plastico: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'endereco',
  });
  return endereco;
};