const { UserModel } = require("../models");
const { hashPassword, generateToken } = require("../utils");

const createUser = async ({ email, password }) => {
  const hashedPassword = hashPassword(password);

  const createdUser = await UserModel.createUser({
    email,
    password: hashedPassword,
  });

  return createdUser;
};

const login = async (userToLog) => {
  const { email, role } = userToLog;
  const token = generateToken(email, role);
  return token;
};

module.exports = { createUser, login };
