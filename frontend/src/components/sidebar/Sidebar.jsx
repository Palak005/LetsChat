import Conversations from "./Conversations.jsx";
import Logout from "./Logout.jsx";
import SearchBar from "./SearchBar.jsx";

const Sidebar = ()=>{
    return <div className="h-screen w-1/5 bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] p-6 flex flex-col gap-5">
        <SearchBar/>
        <Conversations/>
        <Logout/>
    </div>
}

export default Sidebar;



///Starter Code for this file
// import Conversations from "./Conversations.jsx";
// import SearchBar from "./SearchBar.jsx";

// const Sidebar = ()=>{
//     return <div className="h-screen w-1/5 bg-[#2C2638] p-6">
//         <SearchBar/>
//         <Conversations/>
//         <Logout/>
//     </div>
// }

// export default Sidebar;