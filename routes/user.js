const { Router } = require("express");

const router = Router();

router.get("/foods", (req, res) => {
  res.json({
    message: "These are all user foods.",
    foods: [],
  });
});

module.exports = router;
