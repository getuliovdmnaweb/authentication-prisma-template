const jwt = require("jsonwebtoken");
const { LOGIN_HASH } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Please login before trying to access this resource",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, LOGIN_HASH);

    if (Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).json({
        message: "Please login again to access this resource!",
      });
    }
    req.user = {
      email: decodedToken.email,
      role: decodedToken.role,
    };
  } catch (error) {
    return res.status(401).json({
      message: `Login correctly to access this resource: ${error.message}`,
    });
  }

  next();
};
