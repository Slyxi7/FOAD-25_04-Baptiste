const { } = require("sequelize");
const Cours = require('../Models/Cours');
class CoursService {
    async getAllCours() {
        return await Cours.findAll();
    }
    async addCours(cours) {
        return await Cours.create(cours);
    }
    async getCoursById(id) {
        return await Cours.findByPk(id);
    }
    async updateCours(id, cours) {
        return await Cours.update(cours, {
            where: {
                id_cours: id
            }
        });
    }
    async deleteCours(id) {
        return await Cours.destroy({
            where: {
                id_cours: id
            }
        });
    }
}
module.exports = new CoursService();