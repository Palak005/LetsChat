import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = ()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async({username, password})=>{
        const success = validateInput({username, password});
        if(!success){
            return;
        }

        setLoading(true);
        try{
            const res = await fetch("/api/auth/login", {
                method : "POST",
                headers : {"Content-type": "application/json"},
                body : JSON.stringify({username, password})
            }) 

            const status = res.status;
            const data = await res.json();

            // Error handling
            if(data.error){
                throw new Error(data.error);
            }

            if(status === 400){
                toast.error(data.message);
                return;
            }

            //Storing in localStorage
            const chatUser = {
                user : data.user, 
                timestamp: Date.now()
            };

            localStorage.setItem("chatUser", JSON.stringify(chatUser));

            //Setting auth user
            setAuthUser(data);
            toast.success("Logged in Successfully");

        } catch(error){
            toast.error(error);
        } finally{
            setLoading(false);
        }
    }

    return {login, loading};
}

const validateInput = ({username, password})=>{
    if(!username || !password){
        toast.error("Please Enter Complete Details");
        return false;
    }

    if(password.length<6){
        toast.error("Password Length Must Be More Than 5");
        return false;
    }

    return true;
}

export default useLogin;