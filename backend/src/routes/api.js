const express = require("express")
const route = express.Router()
const studentController = require("../controllers/studentController")

route.post("/registration",studentController.createStudentData)
route.get("/read",studentController.readStudentData)
route.post("/update/:id",studentController.updateStudentData)
route.get("/delete/:id",studentController.deleteStudentData)

module.exports = route