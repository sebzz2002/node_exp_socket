const itemService = require("./inventory.service");

const getItems = async (req, res, next) => {
  try {
    const items = await itemService.getItems();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req, res, next) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

const addItem = async (req, res, next) => {
  console.log(req.body);
  try {
    const newItem = await itemService.addItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const item = await itemService.deleteItem(req.params.id);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
};
