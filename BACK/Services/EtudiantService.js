const Etudiant = require("../Models/Etudiant");

class EtudiantService {
    async getAllEtudiants() {
        return await Etudiant.findAll();
    }
}

module.exports = new EtudiantService();
