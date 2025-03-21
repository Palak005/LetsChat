import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import notification from "../assets/notification.mp3"
const useListenMessages = () =>{
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            newMessage.shouldShake = true;
            const sound = new Audio(notification);

            sound.play();
            setMessages([
                ...messages,
                newMessage
            ]);
        })

        //Ensuring it runs only once
        return ()=> socket?.off("newMessage");
    }, [socket, setMessages, messages]);
}

export default useListenMessages;