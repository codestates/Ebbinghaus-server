'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class completedWords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here

    }
  };
  completedWords.init({
    user_id: DataTypes.INTEGER,
    word_eng: DataTypes.STRING,
    word_kor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'completedWords',
  });
  return completedWords;
};