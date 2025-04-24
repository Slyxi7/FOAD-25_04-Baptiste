const express = require('express');

const router = express.Router();

const InscriptionController =
require('../Controllers/InscriptionControllers');

router.get("/", (req, res) => {
 InscriptionController.getAllInscriptions(req, res);
});
module.exports = router;
