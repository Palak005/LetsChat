import {Router} from "express";
import userController from "../controllers/user.controller.js"
import isAutheticated from "../utils/isAuthenticated.js";


const router =  Router();

router.get("/all",isAutheticated, userController.getAllUsers);

export default router;

