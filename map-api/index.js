const express = require("express");
const port = 9000;

const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const restaurantsRoutes = require("./routes/restaurants.routes");
const neighboroodsRoutes = require("./routes/neighborhoods.routes");

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("DB Connection success"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api", restaurantsRoutes);
app.use("/api", neighboroodsRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Success" });
});

app.listen(process.env.port, () => {
  console.log("server is running on " + process.env.port);
});
