'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Film.init({
    titre: DataTypes.STRING,
    duree: DataTypes.INTEGER,
    langue: DataTypes.STRING,
    sous_titres: DataTypes.STRING,
    realisateur: DataTypes.STRING,
    acteurs: DataTypes.TEXT,
    age_minimum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};