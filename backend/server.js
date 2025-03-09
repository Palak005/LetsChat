import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import authRouter from "./routers/auth.routes.js";
import messageRouter from "./routers/message.routes.js";
import userRouter from "./routers/user.routes.js";
import cookieParser from "cookie-parser";

import {app, server} from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

server.listen(PORT, ()=>{
    connectDB();
    console.log("Server is listening");
});