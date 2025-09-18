import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

//To consume the wrapped values we have in useAuthContext
export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) =>{
    //Setting the Authenticated User : using Stringify to convert JS object into string as getItem and setItem
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chatUser")) || null);
    
    //Wrapping the child components with the values
    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;
