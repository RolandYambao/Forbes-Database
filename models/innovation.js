'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class innovation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  innovation.init({
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    author: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    date: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    job: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
  }, {
    sequelize,
    modelName: 'innovation',
  });
  return innovation;
};