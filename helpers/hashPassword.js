const bcrypt = require("bcrypt")


/**
 * This function hashes a given password using bcrypt algorithm
 */
const hashPassword = (password) => {
  // used for hashing password
  const saltRounds = 10;

  bcrypt.hash(password.toLowerCase(), saltRounds, function(err, hash) {
    if (err)
      return false

    return hash
  })
}

/**
 * This function compare the given password with the other one which is stored
 * in the database
 */
const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password.toLowerCase(), hash)
}

module.exports = {hashPassword, comparePassword}
