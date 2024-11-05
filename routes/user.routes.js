import { Router } from "express";
import { createUser, loginUser } from "../controllers/user.controller.js";

const userrouter = Router();

userrouter.post("/register", createUser);
userrouter.post("/login", loginUser);

export default userrouter;
