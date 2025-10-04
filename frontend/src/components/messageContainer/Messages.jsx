import Message from "./Message.jsx";
import useGetMessage from '../../hooks/useGetMessage.js';
import { useEffect, useRef, useState } from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = ()=>{
    const {loading, messages} = useGetMessage();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(()=>{//Scrolling into bottom
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth"});
        }, 100);
    }, [messages]);

    return <div className="h-full w-8/9 overflow-auto no-scrollbar flex flex-col">
        {messages.length > 0 && messages.map((message)=>(
            <div key={message._id} ref={lastMessageRef}>
                <Message message={message}/>
            </div> 
        ))}
    </div>
}

export default Messages;


//Starter Code
// import Message from "./Message.jsx";
// const Messages = ()=>{
//     return <div className="h-3/4 w-8/9 overflow-auto no-scrollbar flex flex-col">
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
// }

// export default Messages;