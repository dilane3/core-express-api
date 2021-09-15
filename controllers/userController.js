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
