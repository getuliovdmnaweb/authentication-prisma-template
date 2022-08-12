const { UserModel } = require("../models");

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const user = await UserModel.findByEmail(email);

  if (user) {
    return res.status(400).json({
      message: "E-mail already in use!",
    });
  }
  next();
};

module.exports = validateEmail;
