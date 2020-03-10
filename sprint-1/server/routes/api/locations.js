const express = require("express");
const locationsFile = __dirname + "/../../models/Locations.json";
const locations = require(locationsFile);
const router = express.Router();

router.get("/", (req, res) => {
  const locationsList = locations.map(location => {
    return {
      id: location.id,
      warehouse: location.warehouse,
      address: location.address,
      contactPerson: location.contactPerson,
      contactPosition: location.contactPosition,
      contactNumber: location.contactNumber,
      contactEmail: location.contactEmail,
      categories: location.categories
    };
  });
  res.json(locationsList);
});

router.get("/:id", (req, res) => {
  const found = locations.some(location => location.id === req.params.id);
  if (found) {
    res.json(locations.filter(location => location.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

module.exports = router;
