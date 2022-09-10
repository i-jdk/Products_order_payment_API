const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const User = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primarykey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci" }
  );
  return User;
};