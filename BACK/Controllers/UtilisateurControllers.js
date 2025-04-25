const UtilisateurService =
    require('../Services/UtilisateurServices');
class UtilisateurController {
    async getAllUtilisateurs(req, res) {
        try {
            const utilisateurs = await
                UtilisateurService.getAllUtilisateur();
            res.json(utilisateurs);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des utilisateurs' });
        }
    }
    async addUtilisateur(req, res) {
        try {
            const utilisateur = await
                UtilisateurService.addUtilisateur(req.body);
            res.status(201).json(utilisateur);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout de la formation' });
        }
    }
    async getUtilisateurById(req, res) {
        try {
            const utilisateur = await
                UtilisateurService.getUtilisateurById(req.params.id);
            if (!utilisateur) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            res.json(utilisateur);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
        }
    }
    async updateUtilisateur(req, res) {
        try {
            const utilisateur = await
                UtilisateurService.updateUtilisateur(req.params.id, req.body);
            if (!utilisateur) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            res.json(utilisateur);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
        }
    }
    async deleteUtilisateur(req, res) {
        try {
            const utilisateur = await
                UtilisateurService.deleteUtilisateur(req.params.id);
            if (!utilisateur) {
                return res.status(404).json({
                    error:
                        'Utilisateur non trouvé'
                });
            }
            res.json({ message: 'Utilisateur supprimé avec succès' });
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        }
    }
}
module.exports = new UtilisateurController();
