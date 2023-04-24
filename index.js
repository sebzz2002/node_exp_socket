const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config.js");
const router = require("./router.js");

const socketIo = require("socket.io");

const app = express();
const port = 5000;
db();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.use(router);
