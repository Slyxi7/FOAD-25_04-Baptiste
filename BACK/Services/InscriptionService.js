const Inscription = require("../Models/Inscription");
const Etudiant = require("../Models/Etudiant");
const Cours = require("../Models/Cours");

class InscriptionService {
    async getAllInscriptions() {
        return await Inscription.findAll({
            include: [
                {
                    model: Etudiant,
                    as: "etudiant"
                },
                {
                    model: Cours,
                    as: "cours"
                }
            ]
        });
    }
}

module.exports = new InscriptionService();
