const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");
const Utilisateur = require("./Utilisateur");

class Cours extends Model {}
Cours.init(
  {
    id_cours: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      references: {
        model: Utilisateur,
        key: "id_utilisateur",
      },
    },
  },
  {
    sequelize,
    tableName: "Cours",
    timestamps: false,
  }
);
module.exports = Cours;