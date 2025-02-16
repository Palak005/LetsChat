import { Router } from "express";
import messagesController from "../controllers/messages.controller.js";
import isAutheticated from "../utils/isAuthenticated.js";

const router = Router();

router.get("/:id", isAutheticated, messagesController.getMessage);
router.post("/send/:id", isAutheticated, messagesController.sendMessage);

export default router;