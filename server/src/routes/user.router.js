import express from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create-users", createUser);
router.get("/", getUsers);

export default router;
