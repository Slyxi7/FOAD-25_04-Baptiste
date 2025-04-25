const express = require('express');
const router = express.Router();
const CoursController =
    require('../Controllers/CoursControllers');
router.get("/", (req, res) => {
    CoursController.getAllCours(req, res);
});
router.post("/", (req, res) => {
    CoursController.addCours(req, res);
});
router.get("/:id", (req, res) => {
    CoursController.getCoursById(req, res);
});
router.put("/:id", (req, res) => {
    CoursController.updateCours(req, res);
});
router.delete("/:id", (req, res) => {
    CoursController.deleteCours(req, res);
});
module.exports = router;