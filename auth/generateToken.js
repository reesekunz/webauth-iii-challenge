const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
// const Users = require("../helpers/usersModel");
// const db = require("../database/dbConfig");
// token generation - importing into login and register routers
function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  // bring in the secret from the secrets file
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = { generateToken };
