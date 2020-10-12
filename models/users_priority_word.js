'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_priority_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
    }
  };
  users_priority_word.init({
    user_id: DataTypes.INTEGER,
    priority_word_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_priority_word',
  });
  return users_priority_word;
};