const jwt = require('jsonwebtoken')
// const {User} = require("../models/user.js")

const authenticationMiddleWare = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401)
    }

    // verification logic here
    next()
  })
}

module.exports = authenticationMiddleWare
