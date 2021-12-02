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
      models.comment.hasMany(models.money, { foreignKey: 'articleId' });
      models.comment.hasMany(models.leadership, { foreignKey: 'articleId' });
      models.comment.hasMany(models.innovation, { foreignKey: 'articleId' });
    }
  };
  comments.init({
    content: DataTypes.STRING,
    date: DataTypes.STRING,
    article: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    articleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};