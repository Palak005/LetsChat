import { useEffect } from "react";
import useConversation from "../../zustand/useConversation.js";
import Header from "./Header.jsx";
import Messages from "./Messages.jsx";
import NoChatSelected from "./NoChatSelected.jsx";
import SendMessage from "./SendMessage.jsx";

const MessageContainer = ()=>{
    const {selectedConversation, setSelectedConversation, message, setMessage} = useConversation();

    const noChatSelected = selectedConversation? false: true;
    useEffect(()=>{
        return () =>setSelectedConversation(null);
    }, [setSelectedConversation]);

    return <div className="h-screen p-[40px] w-4/5 bg-gradient-to-br from-[#736E8A] via-[#615D73] to-[#8A85A6] flex justify-center items-center">
        <div className="h-10/11 w-5/6 mt-6 bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] flex flex-col justify-center items-center gap-5 rounded-2xl">
        {noChatSelected? <NoChatSelected/> : (
                <>
                    <Header/>
                    <Messages/>
                    <SendMessage/>
                </>
        )}
        </div>
    </div>
}

export default MessageContainer;