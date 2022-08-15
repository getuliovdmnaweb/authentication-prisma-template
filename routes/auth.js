const { Router } = require("express");

const { AuthController } = require("../controllers");
const {
  validateCredentials,
  validateEmail,
  validatePassword,
} = require("../validators");

const router = Router();

router.post(
  "/signup",
  validateCredentials,
  validateEmail,
  AuthController.signup
);

router.post(
  "/login",
  validateCredentials,
  validatePassword,
  AuthController.login
);

module.exports = router;
