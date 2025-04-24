const express = require('express');

const router = express.Router();

const ProfilController =
require('../Controllers/ProfilControllers');

router.get("/", (req, res) => {
 ProfilController.getAllProfils(req, res);
});
module.exports = router;
