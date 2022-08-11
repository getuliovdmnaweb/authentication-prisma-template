const signup = async (req, res) => {
  const { email, password } = req.body;

  res.send("User is signing up");
};

const login = async (req, res) => {
  res.send("User is loging in");
};
module.exports = {
  signup,
  login,
};
