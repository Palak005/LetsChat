import {Conversation} from "../models/conversation.model.js";
import {Message} from "../models/message.model.js";

const sendMessage = async(req, res)=>{
    try{
        const { id : receiverId } = req.params;
        const { message } = req.body;

        if(!message){
            return res.status(400).json({
                message : "No message is there",
            })
        }

        const senderId = req.user._id;

        //Finding is converstion exists previously or not
        let conversation = await Conversation.findOne({participants : {$all: [senderId, receiverId]}});

        //Initailising new conversation if doen't exists previously
        if(!conversation){
            conversation = new Conversation({
                participants : [senderId, receiverId]
            });
        };

        //Creating the instance of a message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(!newMessage){
            return res.status(400).json({
                message : "Error while creating the instance of the new message",
            })
        }

        //Adding message to the conversation
        conversation.message.push(newMessage);


        //For parallell execution of both the operations
        Promise.all([conversation.save(),newMessage.save()]);
        res.status(200).json({
            newMessage,
        });

    } catch(error){
        console.log("Error while sending message", error.message);
        return res.status(400).json({
            error : error.message
        });
    }
};

const getMessage = async(req, res)=>{
    try{
        const { id : receiverId } = req.params;
        const senderId = req.user._id;

        //Finding the existing conversation between the two users
        let conversation = await Conversation.findOne({participants : {$all: [senderId, receiverId]}}).populate("message");

        if(!conversation){
            return res.status(400).json([]);
        };

        //Getting all the messages from the conversation
        let messages = conversation.message;

        if(!messages){
            messages = [];
        }

        res.status(200).json({
            messages
        });

    } catch(error){
        console.log("Error while getting message", error.message);
        return res.status(400).json({
            error : error.message
        });
    }
};

export default {sendMessage, getMessage};