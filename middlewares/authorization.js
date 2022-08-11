module.exports = (role) => (req, res, next) => {
  console.log("Authorization Middleware", role);
  next();
};
