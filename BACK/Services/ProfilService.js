const Profil = require("../Models/Profil");
const Utilisateur = require("../Models/Utilisateur");

class ProfilService {
    async getAllProfils() {
        return await Profil.findAll({
            include: [
                {
                    model: Utilisateur,
                    as: "utilisateur"
                }
            ],
        });
    }
}

module.exports = new ProfilService();
