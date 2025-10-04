import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation.js"

const Conversation = ({conversation})=>{
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return <div className={`flex items-center gap-4 hover:bg-[#6D54B5] bg-white/20 border-2 border-white/30 p-2 rounded-2xl w-full mt-2
        ${isSelected ? "bg-[#6D54B5]": ""}
    `}
        onClick={()=>setSelectedConversation(conversation)}
    >
        <div className={`avatar text-xl font-bold hover:bg-[#392b54] hover:text-amber-50
                ${isOnline? "avatar-online" : ""}`
        }>
            <div className="w-15 rounded-full">
                <img src={conversation.avatar} />
            </div>
        </div>
        <span className="text-lg font-bold">{conversation.username}</span>
    </div>
}

export default Conversation;

//Starter Code 
// const Conversation = ()=>{
//     return <div class="avatar flex items-center gap-4 bg-[#3C364C] p-2 rounded-2xl w-full mt-2">
//         <div class="w-15 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//         </div>
//         <span>User1</span>
//     </div>
// }

// export default Conversation;