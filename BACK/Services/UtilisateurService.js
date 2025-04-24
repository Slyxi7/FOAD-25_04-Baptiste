const {} = require("sequelize");
const Utilisateur = require("../Models/Utilisateur");

class UtilisateurService {
    async getAllUtilisateurs() {
        return await Utilisateur.findAll();
    }
}

module.exports = new UtilisateurService();
