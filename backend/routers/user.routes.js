import {Router} from "express";
import userController from "../controllers/user.controller.js"
import isAutheticated from "../utils/isAuthenticated.js";


const router =  Router();

router.get("/all",isAutheticated, userController.getAllUsers);
router.get("/details", isAutheticated, userController.getUserDetails);
router.get("/to-connect", isAutheticated, userController.toConnect);
router.get("/friends", isAutheticated, userController.getFriends);
router.post("/add-friend", isAutheticated, userController.addFriend);
router.post("/unfriend", isAutheticated, userController.unFriend);
router.put("/edit-profile", isAutheticated, userController.editProfile);
export default router;
