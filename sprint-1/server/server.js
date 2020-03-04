const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const inventoryRoute = require("./routes/api/Inventory");
app.use("/api/Inventory", inventoryRoute);

// const locationsRoute = require("./routes/api/locations");
// app.use("/api/locations", locationsRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
