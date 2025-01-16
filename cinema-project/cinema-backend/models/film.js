'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    titre: { type: DataTypes.STRING, allowNull: false },
    duree: { type: DataTypes.INTEGER, allowNull: false },
    langue: { type: DataTypes.STRING },
    sous_titres: { type: DataTypes.STRING },
    realisateur: { type: DataTypes.STRING, allowNull: false },
    acteurs: { type: DataTypes.TEXT, allowNull: false },
    age_minimum: { type: DataTypes.INTEGER, allowNull: false },
    banner: { type: DataTypes.STRING }, // URL of the banner image
    trailer: { type: DataTypes.STRING } // URL of the trailer video
  }, {
    timestamps: false
  });

  return Film;
};