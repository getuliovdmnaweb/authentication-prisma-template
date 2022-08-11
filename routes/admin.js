const { Router } = require("express");

const router = Router();

router.get("/users", (req, res) => {
  res.json({
    message: "These are all admin users.",
    users: [],
  });
});

module.exports = router;
