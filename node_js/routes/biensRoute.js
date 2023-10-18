const express = require('express');
const router = express.Router(); 
const biensController = require("../controllers/biensController");
const auth = require("../security/auth.js");

router.get("/" ,auth.authentification,biensController.getBiens);
router.get("/:page/:limit" ,auth.authentification,biensController.getBiensPaginate);
router.post("/" ,auth.authentification,biensController.saveBien);
router.put("/" ,auth.authentification,biensController.updateBien);
router.get("/:id" ,auth.authentification,biensController.getBienById);
router.delete("/:id" ,auth.authentification,biensController.deleteBien);

module.exports = router;