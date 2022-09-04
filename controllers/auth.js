const { UserService } = require("../services");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const createdUser = await UserService.createUser({ name, email, password });
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
  console.log(userToLog);
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
