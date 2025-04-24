const express = require("express");

const router = express.Router();

const UtilisateurController = require("../Controllers/UtilisateurControllers");

router.get("/", (req, res) => {
  UtilisateurController.getAllUtilisateurs(req, res);
});
module.exports = router;