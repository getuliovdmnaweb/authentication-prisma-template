const { UserModel } = require("../models");
const { hashPassword } = require("../utils");

const createUser = async ({ email, password }) => {
  const hashedPassword = hashPassword(password);

  const createdUser = await UserModel.createUser({
    email,
    password: hashedPassword,
  });

  return createdUser;
};

module.exports = { createUser };
