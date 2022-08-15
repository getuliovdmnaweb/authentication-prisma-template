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
  const userToLog = req.userToLog;

  try {
    const token = await UserService.login(userToLog);
    res.status(201).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = {
  signup,
  login,
};
