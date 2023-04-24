const mongoose = require("mongoose");

const Inventory = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const model = mongoose.model("inventory", Inventory);

module.exports = model;
