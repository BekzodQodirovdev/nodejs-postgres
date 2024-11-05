import { Router } from "express";
import {
  getAllproduct,
  createproduct,
  getByIdproduct,
  updateById,
  deleteById,
  addComment,
  getComment,
} from "../controllers/product.controller.js";
import { basicAuthMid } from "../middlewares/middleware.js";

const productrouter = Router();

productrouter.post("/:product_id/comments", basicAuthMid, addComment);
productrouter.get("/:product_id/comments", getComment);

productrouter.post("/", basicAuthMid, createproduct);
productrouter.get("/", getAllproduct);
productrouter.get("/:id", getByIdproduct);
productrouter.put("/:id", basicAuthMid, updateById);
productrouter.delete("/:id", basicAuthMid, deleteById);

export default productrouter;
