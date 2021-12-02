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
      models.innovation.hasMany(models.comments, { foreignKey: 'articleId' });
    }
  };
  innovation.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.STRING,
    job: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'innovation',
  });
  return innovation;
};