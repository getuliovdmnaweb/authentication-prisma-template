const { UserModel } = require("../models");
const { hashPassword, generateToken } = require("../utils");

const createUser = async ({ name, email, password }) => {
  const hashedPassword = hashPassword(password);

  const createdUser = await UserModel.createUser({
    name,
    email,
    password: hashedPassword,
  });

  return createdUser;
};

const login = async (userToLog) => {
  const { name, email, role } = userToLog;
  const token = generateToken({ name, email, role });
  return token;
};

module.exports = { createUser, login };
