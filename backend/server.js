import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  res.send("Server is ready!");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
