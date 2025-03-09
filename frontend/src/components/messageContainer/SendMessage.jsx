import toast from "react-hot-toast";
import {useState} from "react"
import useSendMessage from "../../hooks/useSendMessage.js";


const SendMessage = ()=>{
    const [message, setMessage] = useState("");
    const{loading, sendMessage} = useSendMessage();
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!message) return;

        //Adding message to the database
        await sendMessage(message);
        setMessage("");
    }

    return <div className="navbar w-8/9 bg-[#3C364C] rounded-2xl p-4 mb-5">
        <form action="" 
            className="flex w-full"
            onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Message" 
                className="input input-bordered w-full rounded-2xl bg-[#3C364C]" 
                onChange={(e)=> setMessage(e.target.value)}
                value={message}
            />
            <button className="btn bg-[#6D54B5] rounded-2xl text-xl ml-2">Send</button>
        </form>
    </div>
}

export default SendMessage;