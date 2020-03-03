const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const inventoryRoute = require("./routes/api/Inventory");
app.use("/", inventoryRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
