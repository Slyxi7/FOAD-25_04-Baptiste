const Utilisateur = require("./Utilisateur");
const Profil = require("./Profil");
const Cours = require("./Cours");
const Etudiant = require("./Etudiant");
const Inscription = require("./Inscription");

Utilisateur.hasOne(Profil, {
  foreignKey: "id_utilisateur",
  as: "profil",
});
Profil.belongsTo(Utilisateur, {
  foreignKey: "id_utilisateur",
  as: "utilisateur",
});

Utilisateur.hasMany(Cours, {
  foreignKey: "id_utilisateur",
  as: "cours",
});
Cours.belongsTo(Utilisateur, {
  foreignKey: "id_utilisateur",
  as: "utilisateur",
});

Etudiant.belongsToMany(Cours, {
  through: Inscription,
  foreignKey: "id_etudiant",
  otherKey: "id_cours",
  as: "cours",
});
Cours.belongsToMany(Etudiant, {
  through: Inscription,
  foreignKey: "id_cours",
  otherKey: "id_etudiant",
  as: "etudiants",
});

Inscription.belongsTo(Etudiant, {
  foreignKey: "id_etudiant",
  as: "etudiant",
});
Inscription.belongsTo(Cours, {
  foreignKey: "id_cours",
  as: "cours",
});

module.exports = {
  Utilisateur,
  Profil,
  Cours,
  Etudiant,
  Inscription,
};
