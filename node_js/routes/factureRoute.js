const express = require('express');
const router = express.Router(); 
const facturesController = require("../controllers/facturesController");
const auth = require("../security/auth.js");

router.post("/generate" ,auth.authentification,facturesController.generateFacture);
router.get("/send/:id" ,auth.authentification,facturesController.sendFacture);
router.get("/:page/:limit" ,auth.authentification,facturesController.getFacturesPaginate);


module.exports = router;