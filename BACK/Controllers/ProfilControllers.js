const ProfilService =
    require('../Services/ProfilService');

class ProfilController {
    async getAllProfils(req, res) {
        try { // on declare le try
            const profils = await
                ProfilService.getAllProfils();
            res.json(profils);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des profils' });

        }
    }
}
module.exports = new ProfilController();
