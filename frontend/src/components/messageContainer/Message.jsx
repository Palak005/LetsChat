import {useAuthContext} from "../../context/AuthContext.jsx"
import useConversation from "../../zustand/useConversation.js";

const Message = ({message})=>{
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser.user._id;
    const chatClass = fromMe?"chat-end" : "chat-start";
    const profilePic = fromMe? authUser.user.avatar : selectedConversation.avatar;
    const bubbleColor = fromMe? "bg-[#3C364C]" : "bg-[#6D54B5]";
    const shouldShake = message.shouldShake? "shake": "";

    return <div className={`chat ${chatClass}`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src={profilePic} />
      </div>
    </div>
    <div className={`chat-bubble ${bubbleColor} ${shouldShake}`}>{message.message}</div>
  </div>
}

export default Message;


//Starting Code
// const Message = ()=>{
//     return <div className="chat chat-start">
//     <div className="chat-header">
//       Obi-Wan Kenobi
//       <time className="text-xs opacity-50">2 hours ago</time>
//     </div>
//     <div className="chat-bubble">You were the Chosen One!</div>
//     <div className="chat-footer opacity-50">Seen</div>
//   </div>
// }

// export default Message;