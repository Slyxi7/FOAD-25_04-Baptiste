const UtilisateurService = require('../Services/UtilisateurService');

class UtilisateurController {
    async getAllUtilisateurs(req, res) {
        try { // on declare le try
            const utilisateurs = await
                UtilisateurService.getAllUtilisateurs();
            res.json(utilisateurs);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });

        }
    }
}
module.exports = new UtilisateurController();
