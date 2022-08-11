module.exports = (req, res, next) => {
  console.log("Authentication Middleware");
  next();
};
