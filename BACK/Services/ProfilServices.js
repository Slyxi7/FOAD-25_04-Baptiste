const { } = require("sequelize");
const Profil = require('../Models/Profil');
class ProfilService {
    async getAllProfils() {
        return await Profil.findAll();
    }
    async addProfil(profil) {
        return await Profil.create(profil);
    }
    async getProfilById(id) {
        return await Profil.findByPk(id);
    }
    async updateProfil(id, profil) {
        return await Profil.update(profil, {
            where: {
                id_profil: id
            }
        });
    }
    async deleteProfil(id) {
        return await Profil.destroy({
            where: {
                id_profil: id
            }
        });
    }
}
module.exports = new ProfilService();