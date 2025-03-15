import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import authRouter from "./routers/auth.routes.js";
import messageRouter from "./routers/message.routes.js";
import userRouter from "./routers/user.routes.js";
import cookieParser from "cookie-parser";
import {app, server} from "./socket/socket.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(cors({ origin: "https://letschat-bplh.onrender.com" }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, ()=>{
    connectDB();
    console.log("Server is listening");
});