'use strict';
const {
  Model
} = require('sequelize');

const db = require('./index');
module.exports = (sequelize, DataTypes) => {
  class participante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      participante.hasOne(db.residuo, {
        foreignKey: 'id',
      });
    }
  }
  participante.init({
    nomePar: DataTypes.STRING,
    nascimentoPar: DataTypes.STRING,
    celularPar: DataTypes.STRING,
    sexoPar: DataTypes.STRING,
    emailPar: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    escolaridadePar: DataTypes.STRING,
    matriculaPar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'participante',
  });
  return participante;
};