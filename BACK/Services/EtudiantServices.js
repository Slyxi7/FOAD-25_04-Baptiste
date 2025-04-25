const { } = require("sequelize");
const Etudiant = require('../Models/Etudiant');
class EtudiantService {
    async getAllEtudiants() {
        return await Etudiant.findAll();
    }
    async addEtudiant(etudiant) {
        return await Etudiant.create(etudiant);
    }
    async getEtudiantById(id) {
        return await Etudiant.findByPk(id);
    }
    async updateEtudiant(id, etudiant) {
        return await Etudiant.update(etudiant, {
            where: {
                id_etudiant: id
            }
        });
    }
    async deleteEtudiant(id) {
        return await Etudiant.destroy({
            where: {
                id_etudiant: id
            }
        });
    }
}
module.exports = new EtudiantService();