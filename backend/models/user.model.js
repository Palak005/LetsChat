import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
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
}, {timestamps : true});

export const User = mongoose.model("User", userSchema);