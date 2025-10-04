import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messageContainer/MessageContainer.jsx";

const Home = ()=>{
    return <div className="h-screen w-screen bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] flex p-">
        <Sidebar/>
        <MessageContainer/>
    </div>
}

export default Home;