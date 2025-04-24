const express = require('express');

const router = express.Router();

const EtudiantController =
require('../Controllers/EtudiantControllers');

router.get("/", (req, res) => {
 EtudiantController.getAllEtudiants(req, res);
});
module.exports = router;
