const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Etudiant extends Model {}
Etudiant.init(
  {
    id_etudiant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Etudiant",
    timestamps: false,
  }
);
module.exports = Etudiant;