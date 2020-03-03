const express = require("express");
const inventoryFile = __dirname + "/../../models/Inventory.json";
const inventoryItems = require(inventoryFile);
const router = express.Router();

router.get("/", (req, res) => {
  const inventoryList = inventoryItems.map(inventoryItem => {
    return {
      id: inventoryItem.id,
      productname: inventoryItem.productname,
      productdescription: inventoryItem.productdescription,
      lastordered: inventoryItem.lastordered,
      location: inventoryItem.location,
      quantity: inventoryItem.quantity,
      status: inventoryItem.status
    };
  });
  res.json(inventoryList);
});

module.exports = router;
