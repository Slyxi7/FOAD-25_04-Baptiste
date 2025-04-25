const express = require('express');
const router = express.Router();
const UtilisateurController =
    require('../Controllers/UtilisateurControllers');
router.get("/", (req, res) => {
    UtilisateurController.getAllUtilisateurs(req, res);
});
router.post("/", (req, res) => {
    UtilisateurController.addUtilisateur(req, res);
});
router.get("/:id", (req, res) => {
    UtilisateurController.getUtilisateurById(req, res);
});
router.put("/:id", (req, res) => {
    UtilisateurController.updateUtilisateur(req, res);
});
router.delete("/:id", (req, res) => {
    UtilisateurController.deleteUtilisateur(req, res);
});
module.exports = router;
