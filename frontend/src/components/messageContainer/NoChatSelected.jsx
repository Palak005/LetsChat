import { useAuthContext } from "../../context/AuthContext.jsx";

const NoChatSelected = ()=>{
    const {authUser}  = useAuthContext();
    return <div className=" h-full flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-3xl">Hi {authUser.user.username}! Welcome to LetsChat</h1>
        <p className="text-xl">Select Chat to Start a Conversation</p>
    </div>
}

export default NoChatSelected;