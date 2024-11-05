import express from "express";
import dotenv from "dotenv";
import productrouter from "./routes/product.routes.js";
import userrouter from "./routes/user.routes.js";
import selesmenrouter from "./routes/selesmean.routes.js";
import basketrouter from "./routes/basket.routes.js";
import { ConnectDatabase } from "./database/db.js";
import { createTables } from "./database/tables.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/user", userrouter);
app.use("/product", productrouter);
app.use("/selemen", selesmenrouter);
app.use("/basket", basketrouter);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "An error occurred", error: err.message });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server run in ${port}`);
  ConnectDatabase();
  createTables();
});
