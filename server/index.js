import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import conn from "./db/conn.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

import userRouter from "./routes/user.router.js";
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
