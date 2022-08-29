const express = require('express')
const router = express.Router()
const controller = require('../controllers/unitController')
module.exports = router

router.get("/byId/:id", controller.getUnitById)
router.get("/all", controller.getAllUnits)
router.post("/create", controller.createUnit)
router.patch("/update/:id", controller.updateUnit)
router.delete("/delete/:id", controller.deleteUnits)



module.exports = router 