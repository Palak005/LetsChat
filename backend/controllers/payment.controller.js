import { createRazorpayInstance } from "../config/razorpay.config.js";
import crypto from "crypto";

const razorPayInstance = createRazorpayInstance();

export const createOrder = async(req, res)=>{
    //Not safe to consider the fare from frontend
    const {price} = req.body;

    //create an order
    const options = {
        amount: 5000*100, //amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_1"
    };

    try{
        razorPayInstance.orders.create(options, (err, order)=>{
            if(err){
                return res.status(500).json({
                    success : false,
                    message: "Something went wrong",
                })
            }
            return res.status(200).json(order);
        })
    } catch(error){
        return res.status(500).json({
            success : false,
            message: "Something went wrong"
        })
    }
}

export const verifyPayment = async(req, res)=>{
    const {order_id, payment_id, signature} = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(order_id + "|" + payment_id);
    const generatedSignature = hmac.digest("hex");

    if(generatedSignature === signature){
        return res.status(200).json({
            success : true,
            message : "Payment Verified",
        });
    }else{
        return res.status(400).json({
            success : false,
            message: "Payment not verified",
        })
    }
}