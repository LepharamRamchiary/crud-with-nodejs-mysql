import express from "express";
import cors from "cors";
import ApiError from "./utils/ApiError.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
  return res.status(500).json({ message: err.message });
});

export default app;
