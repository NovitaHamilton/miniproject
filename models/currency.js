const { sequelize } = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');

// Define Currency Model
class Currency extends Model {}
Currency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currencyCode: {
      type: DataTypes.INTEGER,
      primaryKEY: false,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      references: {
        model: 'Country',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: false, //  This determines the naming convention for automatically-added fields (like foreign keys and timestamps) to 'camelCase' instead of 'snake_case'
    timestamps: true, // This automatically adds createdAt and updatedAt fields
    modelName: 'Currency',
  }
);

model.exports = Currency;
