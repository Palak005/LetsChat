import { useContext, useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () =>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async()=>{
        setLoading(true);

        try{
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            //Removing user from local Storage and setting auth user as null
            localStorage.removeItem("chatUser");
            setAuthUser(null);

            toast.success(data.message);

        } catch(error){
            toast(error);
        } finally{
            setLoading(false);
        }
    }

    return {loading, logout};
}

export default useLogout;