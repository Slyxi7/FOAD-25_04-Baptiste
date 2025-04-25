const express = require('express');
const router = express.Router();
const ProfilController =
    require('../Controllers/ProfilControllers');
router.get("/", (req, res) => {
    ProfilController.getAllProfils(req, res);
});
router.post("/", (req, res) => {
    ProfilController.addProfil(req, res);
});
router.get("/:id", (req, res) => {
    ProfilController.getProfilById(req, res);
});
router.put("/:id", (req, res) => {
    ProfilController.updateProfil(req, res);
});
router.delete("/:id", (req, res) => {
    ProfilController.deleteProfil(req, res);
});
module.exports = router;
