const InscriptionService =
    require('../Services/InscriptionService');

class InscriptionController {
    async getAllInscriptions(req, res) {
        try { // on declare le try
            const inscriptions = await
                InscriptionService.getAllInscriptions();
            res.json(inscriptions);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des inscriptions' });

        }
    }
}
module.exports = new InscriptionController();
