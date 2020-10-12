'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PriorityWords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PriorityWords.init({
    word_eng: DataTypes.STRING,
    word_kor: DataTypes.STRING,
    distinguish: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PriorityWords',
  });
  return PriorityWords;
};