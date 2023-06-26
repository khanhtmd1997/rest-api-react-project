require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.set("strictQuery", false);

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//
const app = express();
app.use(cors());
app.use(express.json());

//routes api
const routesUsers = require("./routes/routes.users");
const routesRoles = require("./routes/routes.roles");
app.use("/api/users", routesUsers);
app.use("/api/roles", routesRoles);

//
app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});
