'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prints extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prints.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    course: DataTypes.STRING,
    numpage: DataTypes.INTEGER,
    layout: DataTypes.STRING,
    pagesize: DataTypes.STRING,
    pageperside: DataTypes.INTEGER,
    alignment: DataTypes.STRING,
    scale: DataTypes.STRING,
    copy: DataTypes.INTEGER,
    printerid: DataTypes.STRING,
    time: DataTypes.STRING,
    status: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Prints',
  });
  return Prints;
};