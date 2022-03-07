const express = require("express");
const app = express();
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
// app.use("/", (req, res) => {
//   res.send("it works now wm;kdsmlkdsmklsdmlknsdkl !!");
// });

const userRoute = require("./api/routes/userRoutes");
const updateRoute = require("./api/routes/updateRoutes");
const postRouter = require("./api/routes/postRouter");
app.use("/users", userRoute);
app.use("/update", updateRoute);
app.use("/add", postRouter);
module.exports = app;
