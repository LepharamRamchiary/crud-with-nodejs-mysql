import express from "express";
import {
  createUser,
  getUsers,
  getSingleUser,
  updatedUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create-users", createUser);
router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updatedUser);

export default router;
