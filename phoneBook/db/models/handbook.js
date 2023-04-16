const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Handbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Company }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Company, { foreignKey: 'companyId' });
    }
  }
  Handbook.init({
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Handbook',
  });
  return Handbook;
};
