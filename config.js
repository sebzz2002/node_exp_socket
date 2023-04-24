const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sebin:hFc3bpKqiLOkP4Lw@cluster0.wm9vimt.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log("Connection to db failed", err));
};

module.exports = db;
