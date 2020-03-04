const express = require("express");
const locationsFile = __dirname + "/../../models/Locations.json";
const locations = require(locationsFile);
const router = express.Router();

router.get("/", (req, res) => {
  const locationsList = locations.map(location => {
    return {
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

module.exports = router;
