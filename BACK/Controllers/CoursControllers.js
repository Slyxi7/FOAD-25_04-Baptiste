const CoursService =
    require('../Services/CoursService');

class CoursController {
    async getAllCours(req, res) {
        try { // on declare le try
            const cours = await
                CoursService.getAllCours();
            res.json(cours);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des cours' });

        }
    }
}
module.exports = new CoursController();
