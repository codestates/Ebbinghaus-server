'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_priority_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      this.belongsTo(db.users, { foreignKey: "user_id", targetKey: "id" });
      this.belongsTo(db.prioritywords, { foreignKey: "priority_word_id", targetKey: "id" });
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