const express = require("express");
const inventoryFile = __dirname + "/../../models/Inventory.json";
const inventoryItems = require(inventoryFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const inventoryList = inventoryItems.map(inventoryItem => {
    return {
      id: inventoryItem.id,
      productname: inventoryItem.productname,
      productdescription: inventoryItem.productdescription,
      lastordered: inventoryItem.lastordered,
      city: inventoryItem.city,
      country: inventoryItem.country,
      quantity: inventoryItem.quantity,
      status: inventoryItem.status
    };
  });
  res.json(inventoryList);
});

router.post("/", (req, res) => {
  const newInventoryItem = {
    productname: req.body.productname,
    productdescription: req.body.productdescription,
    lastordered: req.body.lastordered,
    city: req.body.city,
    country: req.body.country,
    quantity: req.body.quantity,
    status: req.body.status
  };
  if (
    !newInventoryItem.productname ||
    !newInventoryItem.productdescription ||
    !newInventoryItem.lastordered ||
    !newInventoryItem.city ||
    !newInventoryItem.country ||
    !newInventoryItem.quantity ||
    !newInventoryItem.status
  ) {
    return res.status(400).json({
      errorMessage: "please fill in all the blanks"
    });
  }
  inventoryItems.push(newInventoryItem);
  helper.writeJSONFile(inventoryFile, inventoryItems);
  res.json(inventoryItems);
});

// router.delete("/:id" , (req,res)=>{
//   const inventoryList = inventoryItems.filter(item =>);

// });
module.exports = router;
