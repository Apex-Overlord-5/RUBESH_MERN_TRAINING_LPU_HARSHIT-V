const express = require('express')
const { getAllUsers, loginController, registerController } = require('../controllers/userController')
//router object
const router = express.Router()
//GetAllusers || GET
router.get('/all-users', getAllUsers)

//CREATE USER || POST
router.post("/register", registerController);
//LOGIN POST || POST
router.post("/login", loginController);
module.exports = router