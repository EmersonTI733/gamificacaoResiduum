'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('participantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomePar: {
        type: Sequelize.STRING
      },
      nascimentoPar: {
        type: Sequelize.STRING
      },
      celularPar: {
        type: Sequelize.STRING
      },
      sexoPar: {
        type: Sequelize.STRING
      },
      emailPar: {
        type: Sequelize.STRING
      },
      escolaridadePar: {
        type: Sequelize.STRING
      },
      matriculaPar: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('participantes');
  }
};