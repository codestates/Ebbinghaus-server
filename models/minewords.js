'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MineWords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MineWords.init({
    user_id: DataTypes.INTEGER,
    word_eng: DataTypes.STRING,
    word_kor: DataTypes.STRING,
    distinguish: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MineWords',
  });
  return MineWords;
};