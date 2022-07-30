const http = require("http");
const express = require("express");
const app = express();
const userRoute = require("./routes/user.route");
const dbConnection = require("./database/dbConnection");
const cors = require('cors');
const hostname = "localhost";
const port = 4000;


app.use(cors());
app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express Sever</h1>");
});
app.use("/user", userRoute);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
