const { Router } = require("express");
const {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} = require("./inventory.controller");

const router = Router();
router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", addItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
