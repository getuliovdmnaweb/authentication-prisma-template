const { UserModel } = require("../models");
const { comparePassword } = require("../utils");

const validatePassword = async (req, res, next) => {
  const { email, password } = req.body;

  const userToLog = await UserModel.findByEmail(email);

  if (!userToLog) {
    return res.status(400).json({
      message: "There is no user signed up for this e-mail!",
    });
  }
  const isSamePassword = comparePassword(password, userToLog.password);

  if (!isSamePassword) {
    return res.status(400).json({
      message: "Make sure you typed the correct password!",
    });
  }
  req.userToLog = userToLog;
  next();
};

module.exports = validatePassword;
