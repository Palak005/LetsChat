import jwt from "jsonwebtoken";

const genToken = (res, userId) =>{
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn : "1d",
    });

    res.cookie("token", token, {
        maxAge: 24 * 60 * 60* 1000,
        httpOnly: true, //preventing XXS
        sameSite: "strict", //preventing forgery, and cross site requests
        secure: process.env.ENVIRONMENT !== "development"
    });
}

export default genToken;