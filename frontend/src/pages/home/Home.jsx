import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messageContainer/MessageContainer.jsx";

const Home = ()=>{
    return <div className="h-screen w-screen bg-[rgb(97,93,115)] flex p-">
        <Sidebar/>
        <MessageContainer/>
    </div>
}

export default Home;