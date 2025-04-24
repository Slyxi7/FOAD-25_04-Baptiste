const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");
const Etudiant = require("./Etudiant");
const Cours = require("./Cours");

class Inscription extends Model {}

Inscription.init(
  {
    id_etudiant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Etudiant,
        key: "id_etudiant",
      },
    },
    id_cours: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Cours,
        key: "id_cours",
      },
    },
    date_inscription: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },
  {
    sequelize,
    tableName: "Inscription",
    timestamps: false,
  }
);

module.exports = Inscription;