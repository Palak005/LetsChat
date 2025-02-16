import express from "express";
import authControllers from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", authControllers.Signup);

router.post("/login", authControllers.Login);

router.post("/logout", authControllers.Logout);


export default router;