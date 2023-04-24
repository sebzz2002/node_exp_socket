const { Router } = require("express");

const inventoryRoutes = require("./src/modules/ineventory/inventory.route.js");

const router = Router();

router.use("/inventory", inventoryRoutes);

module.exports = router;
