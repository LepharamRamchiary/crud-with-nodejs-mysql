import express from "express";
import {
  createUser,
  getUsers,
  getSingleUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create-users", createUser);
router.get("/", getUsers);
router.get("/:id", getSingleUser);

export default router;
