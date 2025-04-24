const express = require('express');

const router = express.Router();

const CoursController =
require('../Controllers/CoursControllers');

router.get("/", (req, res) => {
 CoursController.getAllCours(req, res);
});
module.exports = router;
