const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Handbook }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Handbook, { foreignKey: 'companyId' });
    }
  }
  Company.init({
    companyName: DataTypes.STRING,
    telNum: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
