const CoursService =
    require('../Services/CoursServices');
class CoursController {
    async getAllCours(req, res) {
        try {
            const cours = await
                CoursService.getAllCours();
            res.json(cours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des cours' });
        }
    }
    async addCours(req, res) {
        try {
            const cours = await
                CoursService.addCours(req.body);
            res.status(201).json(cours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout du cours' });
        }
    }
    async getCoursById(req, res) {
        try {
            const cours = await
                CoursService.getCoursById(req.params.id);
            if (!cours) {
                return res.status(404).json({ error: 'Cours non trouvé' });
            }
            res.json(cours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération du cours' });
        }
    }
    async updateCours(req, res) {
        try {
            const cours = await
                CoursService.updateCours(req.params.id, req.body);
            if (!cours) {
                return res.status(404).json({ error: 'Cours non trouvé' });
            }
            res.json(cours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour du cours' });
        }
    }
    async deleteCours(req, res) {
        try {
            const cours = await
                CoursService.deleteCours(req.params.id);
            if (!cours) {
                return res.status(404).json({
                    error:
                        'Cours non trouvé'
                });
            }
            res.json({ message: 'Cours supprimé avec succès' });
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression du cours' });
        }
    }
}
module.exports = new CoursController();