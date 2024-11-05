import { Router } from "express";
import {
  getAllselesmen,
  createselesmen,
  getByIdselesmen,
  deleteById,
} from "../controllers/selesmen.controller.js";
import { basicAuthMid } from "../middlewares/middleware.js";

const selesmenrouter = Router();

selesmenrouter.post("/", createselesmen);
selesmenrouter.get("/", getAllselesmen);
selesmenrouter.get("/:id", getByIdselesmen);
selesmenrouter.delete("/:id", deleteById);

export default selesmenrouter;
