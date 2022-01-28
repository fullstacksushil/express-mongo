require("dotenv").config();

const express = require("express");
const mongoConnect = require("./util/database").mongoConnect;

const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

// start the app
mongoConnect(() => {
  app.listen(process.env.PORT, () => {
    console.log("App running on: ", process.env.PORT);
  });
});
