const Inventory = require("./inventory.schema");

const getItemById = async (id) => {
  try {
    const item = await Inventory.findById(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw error;
  }
};

const getItems = async () => {
  try {
    const items = await Inventory.find();
    return items;
  } catch (error) {
    throw error;
  }
};

const addItem = async (itemData) => {
  try {
    const newItem = new Inventory(itemData);
    await newItem.save();
    return newItem;
  } catch (error) {
    throw error;
  }
};

const updateItem = async (id, itemData) => {
  try {
    const item = await Inventory.findByIdAndUpdate(id, itemData, { new: true });
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (id) => {
  try {
    const item = await Inventory.findByIdAndDelete(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getItemById,
  getItems,
  addItem,
  updateItem,
  deleteItem,
};
