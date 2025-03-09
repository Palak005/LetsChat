import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignup = ()=>{
    const [loading, setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext();

    const signup = async({fullname, username, password, confirmPassword, gender})=>{
        const success = inputErrorHandling(fullname, username, password, confirmPassword, gender);

        if(!success) return;

        //fetching the data
        setLoading(true);
        try{
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullname, username, password, confirmPassword, gender}),
            })
            
            const status = res.status;

            //Parsing JSON response
            const data = await res.json();

            //Checking errors
            if(data.error){
                throw new Error(data.error);
            }

            if(status === 400){
                throw new Error(data.message);
            }

            //Save user to local Storage
            const chatUser = {
                user: data.user, 
                timestamp: Date.now()
            };

            localStorage.setItem("chatUser", JSON.stringify(chatUser));
            
            //Updating the context]
            setAuthUser(data);
            toast.success("Signed in Successfully");

        }catch(error){
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    return {signup, loading};
}

const inputErrorHandling = (fullname, username, password, confirmPassword, gender)=>{
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error("Please Enter Complete Details");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Password Do Not Match");
        return false;      
    }

    if(password.length<6){
        toast.error("Password Length Must Be More Than 5");
        return false;
    }

    return true;
}

export default useSignup;