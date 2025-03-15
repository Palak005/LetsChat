import { createContext, useContext, useEffect, useState} from "react";
import { useAuthContext } from "./AuthContext.jsx";
import {io} from "socket.io-client"

const SocketContext = createContext();

export const useSocketContext = ()=>{
    //To be able to consume the socket context
    return useContext(SocketContext);
} 

export const SocketContextProvider = ({children})=>{
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io("https://letschat-bplh.onrender.com",{ 
                query : {userId : authUser.user._id}
            });
            setSocket(socket);

            socket.on("getOnlineUsers",(users)=>{ //used to listeind to the events can be used on both client as well as server side
                setOnlineUsers(users);
            });
            return ()=> socket.close();
        } else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}