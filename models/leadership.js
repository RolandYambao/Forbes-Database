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
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.STRING,
    job: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'leadership',
  });
  return leadership;
};