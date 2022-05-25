const express = require("express");
const mysql = require("mysql2");
const conn = require("express-myconnection");
const routes = require("./routes/images.routes");

const app = express();
app.set("port", process.env.PORT || 5000);
const dbConfig = {
  host: "localhost",
  port: "3306",
  user: "XXXXXX",
  password: "XXXXXX",
  database: "XXXXXX",
};

app.use(conn(mysql, dbConfig, "single"));

app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
