"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class mineWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.hasMany(models.time_pass, { foreignKey: "mine_word_id" });
    }
  }
  mineWord.init(
    {
      user_id: DataTypes.INTEGER,
      word_eng: DataTypes.STRING,
      word_kor: DataTypes.STRING,
      distinguish: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "mineWord",
    }
  );
  return mineWord;
};
