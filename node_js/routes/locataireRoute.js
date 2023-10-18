const express = require('express');
const router = express.Router(); 
const locatairesController = require("../controllers/locatairesController");
const auth = require("../security/auth.js");

router.get("/" ,auth.authentification,locatairesController.getLocataires);
// router.get("/:page/:limit" ,auth.authentification,locatairesController.getLocatairesPaginate);
router.get("/:page/:limit" ,auth.authentification,locatairesController.getLocatairesPaginate);
router.post("/" ,auth.authentification,locatairesController.saveLocataire);
router.put("/" ,auth.authentification,locatairesController.updateLocataire);
router.get("/:id" ,auth.authentification,locatairesController.getLocataireById);
router.delete("/:id" ,auth.authentification,locatairesController.deleteLocataire);

module.exports = router;