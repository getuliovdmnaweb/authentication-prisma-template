const { UserService } = require("../services");

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const createdUser = await UserService.createUser({ email, password });
    res.status(201).json({
      message: "User created successfully",
      createdUser,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  res.send("User is loging in");
};
module.exports = {
  signup,
  login,
};
