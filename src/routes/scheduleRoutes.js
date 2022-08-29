const express = require('express')
const router = express.Router()
const controller = require('../controllers/scheduleController')
module.exports = router

router.get("/byId/:id", controller.getScheduleById)
router.get("/all", controller.getAllSchedule)
router.post("/create", controller.createSchedule)
router.patch("/update/:id", controller.updateSchedule)
router.delete("/delete/:id", controller.deleteSchedule)


module.exports = router 

