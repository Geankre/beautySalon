const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')

module.exports = router

router.get("/byId/:id", controller.getClientById)
router.get("/all", controller.getAllClient)
router.post("/signup", controller.signUp)
router.patch("/update/:id", controller.updateClient)
router.delete("/delete/:id", controller.deleteClient)



module.exports = router 