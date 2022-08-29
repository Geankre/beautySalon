const express = require('express')
const router = express.Router()
const controller = require('../controllers/professionalController')

module.exports = router

router.get("/byId/:id", controller.getProfessionalById)
router.get("/all", controller.getAllProfessional)
router.post("/signup", controller.signUp)
router.patch("/update/:id", controller.updateProfessional)
router.delete("/delete/:id", controller.deleteProfessional)



module.exports = router 
