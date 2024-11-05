import { Router } from "express";
import {
  getAllbasket,
  createbasket,
  getByIdbasket,
  updateById,
  deleteById,
} from "../controllers/basket.controller.js";
import { basicAuthMid } from "../middlewares/middleware.js";

const basketrouter = Router();

basketrouter.post("/", basicAuthMid, createbasket);
basketrouter.get("/", getAllbasket);
basketrouter.get("/:id", getByIdbasket);
basketrouter.put("/:id", basicAuthMid, updateById);
basketrouter.delete("/:id", basicAuthMid, deleteById);

export default basketrouter;