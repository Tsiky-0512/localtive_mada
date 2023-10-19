const express = require('express');
const router = express.Router(); 
const facturesController = require("../controllers/facturesController");
const auth = require("../security/auth.js");

router.post("/" ,auth.authentification,facturesController.saveFacture);


module.exports = router;