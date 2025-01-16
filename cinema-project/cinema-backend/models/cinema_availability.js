module.exports = (sequelize, DataTypes) => {
    const CinemaAvailability = sequelize.define('CinemaAvailability', {
      cinema_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      film_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    CinemaAvailability.associate = (models) => {
      CinemaAvailability.belongsTo(models.Film, {
        foreignKey: 'film_id',
        onDelete: 'CASCADE',
      });
    };
  
    return CinemaAvailability;
  };
  