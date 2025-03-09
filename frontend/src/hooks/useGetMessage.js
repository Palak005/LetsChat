import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation.js";

const useGetMessage = ()=>{
    let [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(()=>{
        const getMessage = async()=>{
            setLoading(true);
            try{
                const req = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await req.json();

                if(data.error) throw new Error(data.error);
                setMessages(data);
            } catch(error){
                toast.error(error);
            } finally{
                setLoading(false);
            }
        }

        if(selectedConversation) getMessage();
    }, [selectedConversation?._id, setMessages]);

    return {loading, messages};
}

export default useGetMessage;