'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programmation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Programmation.init({
    film_id: DataTypes.INTEGER,
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    jours: DataTypes.STRING,
    heure: DataTypes.TIME,
    ville: DataTypes.STRING,
    adresse_salle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Programmation',
  });
  return Programmation;
};