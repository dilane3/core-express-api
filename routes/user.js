const express = require('express')
const {getAllUsers} = require('../controllers/userController.js')
const authenticationMiddleWare = require("../middlewares/authentication.js")

const route = express.Router()

route.get("/all", authenticationMiddleWare, getAllUsers)

module.exports = route
