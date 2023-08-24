import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Login, Register, currentuser } from "./Controllers/userController.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes

app.post("/register", Register);
app.post("/login", Login);
app.post("/currentuser", currentuser);

// mongoose connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(() => console.log("error DB connection"));

// port listen

app.listen(8000, () => {
  console.log("server running in port 8000");
});
