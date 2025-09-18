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

const editProfile = async (req, res) => {
    try {
        const userId = req.user.id; 

        const { fullname, bio, location, interests, avatar } = req.body;

        const updates = {};
        //Data validation
        if (fullname) updates.fullname = fullname;
        if (bio) updates.bio = bio;
        if (location) updates.location = location;
        if (interests) updates.interests = interests;
        if (avatar) updates.avatar = avatar;

        // Update user
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true, runValidators: true }
        ).select("-password");

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser
        });

    } catch (error) {
        console.error("Edit Profile Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export default {getAllUsers};