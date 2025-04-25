const EtudiantService =
    require('../Services/EtudiantServices');
class EtudiantController {
    async getAllEtudiants(req, res) {
        try {
            const etudiants = await
                EtudiantService.getAllEtudiants();
            res.json(etudiants);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des étudiants' });
        }
    }
    async addEtudiant(req, res) {
        try {
            const etudiant = await
                EtudiantService.addEtudiant(req.body);
            res.status(201).json(etudiant);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout de l\'étudiant' });
        }
    }
    async getEtudiantById(req, res) {
        try {
            const etudiant = await
                EtudiantService.getEtudiantById(req.params.id);
            if (!etudiant) {
                return res.status(404).json({ error: 'Étudiant non trouvé' });
            }
            res.json(etudiant);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération de l\'étudiant' });
        }
    }
    async updateEtudiant(req, res) {
        try {
            const etudiant = await
                EtudiantService.updateEtudiant(req.params.id, req.body);
            if (!etudiant) {
                return res.status(404).json({ error: 'Étudiant non trouvé' });
            }
            res.json(etudiant);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de l\'étudiant' });
        }
    }
    async deleteEtudiant(req, res) {
        try {
            const etudiant = await
                EtudiantService.deleteEtudiant(req.params.id);
            if (!etudiant) {
                return res.status(404).json({
                    error:
                        'Étudiant non trouvé'
                });
            }
            res.json({ message: 'Etudiant supprimé avec succès' });
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression de l\'étudiant' });
        }
    }
}
module.exports = new EtudiantController();