require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = function createSecretToken(id){
  return jwt.sign({ id }, process.env.TOKEN_KEY || "sushil", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};