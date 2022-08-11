const { body, validationResult } = require("express-validator");

const validateCredentials = async (req, res, next) => {
  const validations = [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ];
  await Promise.all(validations.map((validation) => validation.run(req)));

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessage = new Error("Error: ");
    const emailValidation = errors
      .array()
      .find((error) => error.param === "email");
    const passwordValidation = errors
      .array()
      .find((error) => error.param === "password");

    if (emailValidation) {
      errorMessage.message = errorMessage.message + "E-mail is not valid.";
    }
    if (passwordValidation) {
      errorMessage.message =
        errorMessage.message + "Password has to be at least 5 characters long.";
    }

    return res.status(400).json({
      message: errorMessage.message,
    });
  }
  next();
};

module.exports = validateCredentials;
