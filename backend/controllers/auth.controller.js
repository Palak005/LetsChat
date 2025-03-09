import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/generateToken.js";

const Signup = async(req, res)=>{
    try{
        const {fullname, username, password, confirmPassword, gender} = req.body;

        if(password != confirmPassword){
            return res.status(400).send({message : "Password Doesn't Matched"});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).send({message : "User Already Exists"});
        }

        //Hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        //Creating new user
        const newUser = new User({
            fullname,
            username,
            password : hashedPassword,
            gender,
            avatar : gender === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){
            genToken(res, newUser._id);
            await newUser.save();

            res.status(201).json({
                user: newUser
            });
        } else{
            res.status(400).json({
                "message": "Invalid User data",
            })
        }



    } catch(error){
        console.log("Error in Signup Controller " ,error.message);
        return res.status(404).send({error : error});
    }
};

const Login = async(req, res)=>{
    try{
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if(!user){
            return res.status(400).send({message : "User Does not Exists"});
        }

        //Decoding Password
        const passCorrect = await bcrypt.compare(password, user.password || "")
        if(!passCorrect){
            return res.status(400).send({message : "Incorrect Password"});
        }

        //generating token
        genToken(res, user._id);
        res.status(201).json({
            user: user
        });

    } catch(error){
        console.log("Error in Login Controller " ,error.message);
        return res.status(404).send({error : error});
    }
};

const Logout = (req, res)=>{
    try{
        res.cookie("token", "", {maxAge : 0});

        res.status(201).json({
            "message": "User logged out successfully"
        });

    } catch(error){
        console.log("Error in Logout Controller " ,error.message);
        return res.status(404).send({error : error});
    }
};


export default {Signup, Login, Logout};