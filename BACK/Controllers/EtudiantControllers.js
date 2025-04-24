const EtudiantService =
    require('../Services/EtudiantService');

class EtudiantController {
    async getAllEtudiants(req, res) {
        try { // on declare le try
            const etudiants = await
                EtudiantService.getAllEtudiants();
            res.json(etudiants);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des étudiants' });

        }
    }
}
module.exports = new EtudiantController();
