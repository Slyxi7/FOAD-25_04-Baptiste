const { } = require("sequelize");
const Utilisateur = require('../Models/Utilisateur')
class UtilisateurService {
    async getAllUtilisateur() {
        return await Utilisateur.findAll();
    }
    async addUtilisateur(utilisateur) {
        return await Utilisateur.create(utilisateur);
    }
    async getUtilisateurById(id) {
        return await Utilisateur.findByPk(id);
    }
    async updateUtilisateur(id, utilisateur) {
        return await Utilisateur.update(utilisateur, {
            where: {
                id_utilisateur: id
            }
        });
    }
    async deleteUtilisateur(id) {
        return await Utilisateur.destroy({
            where: {
                id_utilisateur: id
            }
        });
    }
}

module.exports = new UtilisateurService();