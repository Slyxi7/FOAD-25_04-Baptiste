const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");
const Utilisateur = require("./Utilisateur");

class Profil extends Model {}
Profil.init(
  {
    id_profil: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bio: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
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
    tableName: "Profil",
    timestamps: false,
  }
);
module.exports = Profil;