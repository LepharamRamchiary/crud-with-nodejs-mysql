import express from "express";
import {
  createUser,
  getUsers,
  getSingleUser,
  updatedUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create-users", createUser);
router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updatedUser);
router.delete("/:id", deleteUser);


export default router;
