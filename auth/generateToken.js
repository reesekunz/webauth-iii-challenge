const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
};
