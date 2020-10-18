"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class priorityWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user_priority_word, {
        foreignKey: "priority_word_id",
      });
    }
  }
  priorityWord.init(
    {
      word_eng: DataTypes.STRING,
      word_kor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "priorityWord",
    }
  );
  return priorityWord;
};
