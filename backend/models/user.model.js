import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minlength: 5,
    },
    gender : {
        type : String,
        required : true,
        enum: ["male", "female"],
    },
    avatar : {
        type : String,
        default: "",
    },
    friendList : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        default : [],
    }],
    interests: {
        type: [String],
        default: []
    },
    bio : {
        type : String,
    }, 
    location : {
        type : String,
    },
    subscription: {
        type: String,
        enum: ["free", "premium"],
        default: "free"
    }
}, {timestamps : true});

export const User = mongoose.model("User", userSchema);