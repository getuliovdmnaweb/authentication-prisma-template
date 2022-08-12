const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

const createUser = async ({ email, password }) => {
  const createdUser = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  return createdUser;
};

module.exports = { findByEmail, createUser };
