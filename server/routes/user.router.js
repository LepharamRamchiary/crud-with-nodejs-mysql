import express from "express";
import { Router } from "express";
import conn from "../db/conn.js";

const router = Router();

// register user
router.post("/register", (req, res) => {
  const { name, email, age, work, address, mobile } = req.body;

  if (!name || !email || !age || !work || !address || !mobile) {
    res.status(422).json("Please fill all the fields");
  }

  try {
    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          console.error(err);
        } else if (result.length > 0) {
          res.status(422).json("User already exists");
        } else {
          conn.query(
            "INSERT INTO users (name, email, age, work, address, mobile) VALUES (?, ?, ?, ?, ?, ?)",
            [name, email, age, work, address, mobile],
            (err, result) => {
              if (err) {
                console.error(err);
              } else {
                res.status(201).json("User registered successfully");
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(500).json("Server error");
  }
});

export default router;
