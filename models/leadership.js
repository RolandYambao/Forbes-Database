'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class leadership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  leadership.init({
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
    modelName: 'leadership',
  });
  return leadership;
};