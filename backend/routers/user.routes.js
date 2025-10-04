import {Router} from "express";
import userController from "../controllers/user.controller.js"
import isAutheticated from "../utils/isAuthenticated.js";
import checkLimit from "../utils/checkSwipeLimit.js";


const router =  Router();

router.get("/all",isAutheticated, userController.getAllUsers);
router.get("/details", isAutheticated, userController.getUserDetails);
router.get("/to-connect", isAutheticated, checkLimit, userController.toConnect);
router.get("/friends", isAutheticated, userController.getFriends);
router.post("/swipe", isAutheticated, userController.addFriend);
router.post("/unfriend", isAutheticated, userController.unFriend);
router.put("/edit-profile", isAutheticated, userController.editProfile);
export default router;
