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
      participante.hasOne(db.endereco, {
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
    escolaridadePar: DataTypes.STRING,
    matriculaPar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'participante',
  });
  return participante;
};