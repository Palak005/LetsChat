import { User } from "../models/user.model.js";

const getAllUsers = async(req, res)=>{
    try{
        const loggedInUser = req.user._id;
        const filteredUsers = await User.find({_id : {$ne : loggedInUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch(error){
        console.log("Error while getting all users : ", error.message);
        res.status(400).json({error : error.message});
    }
}

export default {getAllUsers};