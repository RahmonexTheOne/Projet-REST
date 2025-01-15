'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titre: {
        type: Sequelize.STRING
      },
      duree: {
        type: Sequelize.INTEGER
      },
      langue: {
        type: Sequelize.STRING
      },
      sous_titres: {
        type: Sequelize.STRING
      },
      realisateur: {
        type: Sequelize.STRING
      },
      acteurs: {
        type: Sequelize.TEXT
      },
      age_minimum: {
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
    await queryInterface.dropTable('Films');
  }
};