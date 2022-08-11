const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { AuthRoutes, AdminRoutes, UserRoutes } = require("./routes");
const {
  AuthenticationMiddleware,
  AuthorizationMiddleware,
} = require("./middlewares");
const { ROLES } = require("./constants");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the App",
  });
});

app.use("/auth", AuthRoutes);

app.use(AuthenticationMiddleware);

app.use("/admin", AuthorizationMiddleware(ROLES.ADMIN), AdminRoutes);

app.use("/user", AuthorizationMiddleware(ROLES.USER), UserRoutes);

app.listen(8080);
