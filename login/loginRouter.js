const express = require("express");

const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
// const generateToken = require("../auth/generateToken");

const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const router = express.Router();

// POST to 5000/api/login
router.post("/", (request, response) => {
  let { username, password } = request.body;
  //   console.log("POST login request", request);
  //   console.log("POST login request body", request.body);

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        console.log("token", token);
        response.status(200).json({ token });
      } else {
        // dont send 404 status because dont want them guessing credentials
        response.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      response.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username
  };
  // const secret = "keep it secret, keep it safe!"; => importing this from config/secrets instead
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
