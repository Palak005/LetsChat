import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation  from "./Conversation.jsx";

const Conversations = ()=>{
    const {loading, conversations} = useGetConversations();
    console.log(conversations)
    return  conversations.length === 0 ? 
    (<div className="flex flex-col items-center justify-center h-5/6">
        <span className="text-gray-400">No Friends Added Yet</span>
    </div> )  :    
    (<div className="user-list h-4/6 overflow-y-auto no-scrollbar flex flex-col items-center gap-3 pt-3">
        {conversations.map((conversation)=>(
            <Conversation
                key={conversation._id}
                conversation={conversation}
            />
        ))}
        {loading ? <span className="loading loading-infinity loading-lg"></span> : null}
    </div>)
}

export default Conversations;




//Starter Code For this file
// import Conversation  from "./Conversation.jsx";

// const Conversations = ()=>{
//     return  <div className="user-list h-4/6 overflow-y-auto no-scrollbar flex flex-col items-center gap-3 pt-3">
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
// }

// export default Conversations;