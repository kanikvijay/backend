import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";
import connectDb from "./connectionDb/db.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import blogRoutes from "../Blog-website/routes/blogRoutes.mjs";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
dotenv.config();
import Blog from "../Blog-website/models/blogModel.mjs";
import User from "../Blog-website/models/userModel.mjs";

// mongo db connection
connectDb();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 8080;

// app.use((req, res) => {
//   res.send("hello");
// });
app.get("/",(req,res)=>console.log("done"))
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`
  );
});