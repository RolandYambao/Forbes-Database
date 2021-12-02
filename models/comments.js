'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comments.belongsTo(models.money);
      models.comments.belongsTo(models.leadership);
      models.comments.belongsTo(models.innovation);
    }
  };
  comments.init({
    content: DataTypes.STRING,
    date: DataTypes.STRING,
    article: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};