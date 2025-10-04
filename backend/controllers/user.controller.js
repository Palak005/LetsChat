import { User } from "../models/user.model.js";

const getAllUsers = async(req, res)=>{
    try{
        const allUsers = await User.find().select("-password");

        res.status(200).json({allUsers : allUsers});
    } catch(error){
        console.log("Error while getting all users : ", error.message);
        res.status(400).json({error : error.message});
    }
}

const getUserDetails = async (req, res) => {
    try {
        const user = req.user; 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   

        res.status(200).json({
            user,
            message: "User details fetched successfully"
        });
    }
    catch (error) {
        console.error("Get User Details Error:", error);
        res.status(500).json({ message: "Error while getting user details" });
    }
}

const editProfile = async (req, res) => {
    try {
        const userId = req.user.id; 

        let { fullname, bio, location, interests, avatar, subscription } = req.body;
        const updates = {};

        //Data validation
        if (fullname) updates.fullname = fullname;
        if (bio) updates.bio = bio;
        if (location) updates.location = location;
        if (interests) updates.interests = interests;
        if (avatar) updates.avatar = avatar;
        if (subscription) updates.subscription = subscription;

        if(typeof(interests) === 'string' && interests.length>0){
            interests = interests.split(",").map(interest => interest.trim());
            updates.interests = interests;      
        }

        // Update user
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updates,
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

const toConnect = async(req, res)=>{
    try{
        const user = req.user;
        const newUsers = await User.find({_id : {$nin : [...user.friendList, user._id]}}).select("-password -friendList -email -location -createdAt -updatedAt");

        if(newUsers == null){
            return res.status(404).json({message : "No new users found"});
        }   

        return res.status(200).json({newUsers : newUsers});
    }
    catch(error){
        console.log("Error while fetching users : ", error.message);
        res.status(500).json({ message: "Server error" });      
    }
}

const getFriends = async(req, res)=>{
    try{
        const user = req.user;
        
        const friends = await User.find({_id: {$in : user.friendList}}).select("-password -friendList -email -bio -location -interests -createdAt -updatedAt");
        if(friends == null){
            return res.status(404).json({message : "Error while fetching friends"});
        }

        return res.status(200).json({friends : friends});

    }
    catch(error){
        console.log("Error while fetching friends : ", error.message);
        res.status(500).json({ message: "Server error" });      
    }
}

const handleSwipe = async (req, res) => {
    try{
        const user = req.user;
        const {friendId} = req.body;
        const {direction} = req.body;
        if(friendId == null){
            return res.status(400).json({message : "Friend ID is required"});
        }

        user.swipeCount += 1;
        const remainingSwipes = (user.subscription === "premium")? Infinity :  Math.max(0, 5 - user.swipeCount);
        await user.save();

        //Rejecting the swipedUser 
        if(direction === "left"){
            return res.status(200).json({
                message : "User rejected successfully",
                remainingSwipes
            })
        }

        //Adding the swipedUser as friend
        user.friendList.push(friendId);
        await user.save();  

        res.status(200).json({
            message : "Friend added successfully",
            remainingSwipes
        });
    }
    catch(error){
        console.log("Error while adding friend : ", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

const unFriend = async(req, res)=>{
    try{
        const user = req.user;;
        const {friendId} = req.body;

        if(friendId == null){
            return res.status(400).json({message : "Friend ID is required"});
        }

        if(!user.friendList.includes(friendId)){
            return res.status(400).json({message : "User is not in your friend list"});
        }

        user.friendList = user.friendList.filter(id => id.toString() !== friendId);
        await user.save();

        res.status(200).json({message : "Friend removed successfully"});
    }
    catch(error){  
        console.log("Error while removing friend : ", error.message);
        res.status(500).json({ message: "Server error" });
    }
}
export default {getAllUsers, handleSwipe, editProfile, getUserDetails, getFriends, toConnect, unFriend};