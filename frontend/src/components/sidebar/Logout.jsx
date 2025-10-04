import useLogout from "../../hooks/useLogout.js";

const Logout = ()=>{
    const {loading, logout} = useLogout();

    const handleLogout = async()=>{
        await logout()
    }

    return <button  
        className="btn btn-active h-13 border-0 bg-white text-[#6D54B5] rounded-2xl text-xl font-bold hover:bg-[#392b54] hover:text-amber-50"
        onClick={handleLogout}
    >Logout</button>
}

export default Logout;