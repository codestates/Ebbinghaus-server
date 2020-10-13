'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class time_pass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.mineWord, { foreignKey: "mine_word_id" });
      this.belongsTo(models.user_priority_word, { foreignKey: "user_priority_word_id" });


    }
  };
  time_pass.init({
    user_priority_word_id: DataTypes.INTEGER,
    mine_word_id: DataTypes.INTEGER,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'time_pass',
  });
  return time_pass;
};