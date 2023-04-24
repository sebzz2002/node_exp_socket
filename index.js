const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config.js");
const router = require("./router.js");

const app = express();
const port = 5000;
db();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
