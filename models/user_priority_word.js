"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_priority_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsTo(models.priorityWord, { foreignKey: "priority_word_id" });
    }
  }
  user_priority_word.init(
    {
      user_id: DataTypes.INTEGER,
      priority_word_id: DataTypes.INTEGER,
      distinguish: DataTypes.INTEGER,
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user_priority_word",
    }
  );
  return user_priority_word;
};
