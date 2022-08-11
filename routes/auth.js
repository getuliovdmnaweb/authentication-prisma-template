const { Router } = require("express");

const router = Router();

router.post("/signup", (req, res) => {
  res.send("User is signing up");
});

router.post("/login", (req, res) => {
  res.send("User is loging in");
});

module.exports = router;
