const ProfilService =
    require('../Services/ProfilServices');
class ProfilController {
    async getAllProfils(req, res) {
        try {
            const profils = await
                ProfilService.getAllProfils();
            res.json(profils);
        } catch (error) {
            console.log(error);
            console
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des profils' });
        }
    }
    async addProfil(req, res) {
        try {
            const profil = await
                ProfilService.addProfil(req.body);
            res.status(201).json(profil);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout du profil' });
        }
    }
    async getProfilById(req, res) {
        try {
            const profil = await
                ProfilService.getProfilById(req.params.id);
            if (!profil) {
                return res.status(404).json({ error: 'Profil non trouvé' });
            }
            res.json(profil);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération du profil' });
        }
    }
    async updateProfil(req, res) {
        try {
            const profil = await
                ProfilService.updateProfil(req.params.id, req.body);
            if (!profil) {
                return res.status(404).json({ error: 'Profil non trouvé' });
            }
            res.json(profil);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour du profil' });
        }
    }
    async deleteProfil(req, res) {
        try {
            const profil = await
                ProfilService.deleteProfil(req.params.id);
            if (!profil) {
                return res.status(404).json({
                    error:
                        'Profil non trouvé'
                });
            }
            res.json({ message: 'Profil supprimé avec succès' });
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression du profil' });
        }
    }
}
module.exports = new ProfilController();