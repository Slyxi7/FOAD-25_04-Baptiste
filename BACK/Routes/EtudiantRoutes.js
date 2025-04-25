const express = require('express');
const router = express.Router();
const EtudiantController =
    require('../Controllers/EtudiantControllers');
router.get("/", (req, res) => {
    EtudiantController.getAllEtudiants(req, res);
});
router.post("/", (req, res) => {
    EtudiantController.addEtudiant(req, res);
});
router.get("/:id", (req, res) => {
    EtudiantController.getEtudiantById(req, res);
});
router.put("/:id", (req, res) => {
    EtudiantController.updateEtudiant(req, res);
});
router.delete("/:id", (req, res) => {
    EtudiantController.deleteEtudiant(req, res);
});
module.exports = router;