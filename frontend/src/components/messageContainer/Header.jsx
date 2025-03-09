import useConversation from "../../zustand/useConversation.js"

const Header = ()=>{
    const {selectedConversation} = useConversation();
    return <div class="navbar w-full bg-[#6D54B5] rounded-t-2xl">
        <div className="avatar">
        <div className="w-13 rounded-full ml-5">
            <img src={selectedConversation? selectedConversation.avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }/>
        </div>
        </div>
        <button class="btn btn-ghost text-xl">{selectedConversation? selectedConversation.username: "User" }</button>
    </div>
}

export default Header;