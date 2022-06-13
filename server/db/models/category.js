'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Game, {
        foreignKey: 'gameId'
      });
      this.hasMany(models.Question, {
        foreignKey: 'categoryId',
      })
    }
  }
  Category.init({
    title: DataTypes.STRING,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
