import useLogout from "../../hooks/useLogout.js";

const Logout = ()=>{
    const {loading, logout} = useLogout();

    const handleLogout = async()=>{
        await logout()
    }

    return <button  
        className="btn btn-active h-13 bg-[#6D54B5] rounded-2xl"
        onClick={handleLogout}
    >Logout</button>
}

export default Logout;