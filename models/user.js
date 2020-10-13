"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.mineWord, { foreignKey: "user_id" });
      this.hasMany(models.user_priority_word, { foreignKey: "user_id" });
      this.hasMany(models.completedWord, { foreignKey: "user_id" });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
