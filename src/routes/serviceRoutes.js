const express = require('express')
const router = express.Router()
const controller = require('../controllers/serviceController')
module.exports = router

router.get("/byId/:id", controller.getServiceById)
router.get("/all", controller.getAllServices)
router.post("/create", controller.createService)
router.patch("/update/:id", controller.updateService)
router.delete("/delete/:id", controller.deleteService)



module.exports = router 

