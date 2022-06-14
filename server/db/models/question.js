'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Category, {
      foreignKey: 'categoryId',
     })
    }
  }
  Question.init({
    categoryId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
