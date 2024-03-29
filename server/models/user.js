'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'users',
    }
  )
  return User
}
