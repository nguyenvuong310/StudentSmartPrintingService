'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Printers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Printers.init({
    printerid: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    time: DataTypes.STRING,
    slot: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Printers',
  });
  return Printers;
};