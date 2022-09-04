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

const createUser = async ({ name, email, password }) => {
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return createdUser;
};

module.exports = { findByEmail, createUser };
