# core-express-api

**core-express-api** is a template for creating api server application using **nodejs and express** (javascript's technologies).
It offer to you the main structure that you can use for starting your server app. Many folders and files are already created, and the server is already setup and run fine. Let's see what these folders and files contain.

## Structure of the main project
There is so many folders and files in this project, only that you need to start you server application. Let's discover it.

1. **Main file (app.js)**
This file is the entry point of your application, it's here where all the request is handled by your server app.

2. **routes folder**
This Folder store all the routes file of your application. By default there is already one router file named **user.js**, and handles all the request that refers to the user.

code

```javascript

const express = require('express')
const {getAllUsers} = require('../controllers/userController.js')
const authenticationMiddleWare = require("../middlewares/authentication.js")

const route = express.Router()

route.get("/all", authenticationMiddleWare, getAllUsers)

module.exports = route

```
regarding inside of this file, we remark that, there is one route defined which is `/all`
We can also see that, this file depends on **getAllUsers** function and **authenticationMiddleWare**. We will present all those functions below.

3. **controllers folder**
This folder store all controllers that are used for all routes file. One controller is asign to one router handler. It's inside the controller where all the logic is stored.

code

```javascript

const {hashPassword, comparePassword} = require("../helpers/hashPassword.js")

class UserController {

  /**
   * Get all users
   */
  static getAllUsers(req, res) {
    res.send("No user founded !")
  }
}

module.exports = UserController

```

Here we define a class named **UserController** which contains one static function named **getAllUsers** which returns a message to the browser.
