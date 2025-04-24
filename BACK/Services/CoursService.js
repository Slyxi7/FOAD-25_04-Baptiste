const { } = require("sequelize");
const Cours = require("../Models/Cours");
const Utilisateur = require("../Models/Utilisateur");

class CoursService {
    async getAllCours() {
        return await Cours.findAll({
            include: [
                {
                    model: Utilisateur,
                    as: "utilisateur"
                },
            ],
        });
    }
}

module.exports = new CoursService();
