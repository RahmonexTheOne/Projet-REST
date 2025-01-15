'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Programmations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      film_id: {
        type: Sequelize.INTEGER
      },
      date_debut: {
        type: Sequelize.DATE
      },
      date_fin: {
        type: Sequelize.DATE
      },
      jours: {
        type: Sequelize.STRING
      },
      heure: {
        type: Sequelize.TIME
      },
      ville: {
        type: Sequelize.STRING
      },
      adresse_salle: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Programmations');
  }
};