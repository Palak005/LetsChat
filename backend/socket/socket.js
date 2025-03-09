import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

// {userId : socketId}
const userSocketMap = {}; 
io.on('connection', (socket) => {
    console.log("User connected", socket.id);
    const userId = socket.handshake.query.userId;
    if(userId != undefined){
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on is used to listen to the events and can be used o bith client and server.
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];

        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

const getSocketId = (recieverId)=>{
    if(userSocketMap[recieverId]) return userSocketMap[recieverId];

    return null;
}

export {app, io, server, getSocketId};