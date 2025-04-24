const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Utilisateur extends Model {}
Utilisateur.init(
  {
    id_utilisateur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Utilisateur",
    timestamps: false,
  }
);
module.exports = Utilisateur;