'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      this.hasMany(db.minewords, { foreignKey: "user_id", sourceKey: "id" })
      this.hasMany(db.completedwords, { foreignKey: "user_id", sourceKey: "id" })
      this.hasMany(db.users_priority_word, { foreignKey: "user_id", sourceKey: "id" })
    }
  };
  Users.init({
    ID: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};