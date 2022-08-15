const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { LOGIN_TOKEN } = process.env;

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

const generateToken = (email, role) => {
  const token = jwt.sign(
    {
      email,
      role,
    },
    LOGIN_TOKEN,
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
};
