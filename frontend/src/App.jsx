import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import { useEffect } from "react";
import Profile from "./pages/Profile.jsx";
import FriendsList from "./pages/FriendsList.jsx";
import Navbar from "./components/Navbar.jsx";
import Connect from "./pages/Connect.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";

const App = ()=>{
  const {setAuthUser, authUser} = useAuthContext();

  useEffect(()=>{
    //Clearing expired user from local storage
    if (authUser) {
        const currentTime = Date.now();
        const timeElapsed = currentTime - authUser.timestamp;

        if (timeElapsed > 24 * 60 * 60 * 1000) {
            localStorage.removeItem("authUser"); //Clear storage if time exceeded
            setAuthUser(null);
        }
    }
  }, []);

  return(
    <div>
        {authUser?<Navbar/> : null}
      <Routes>
        <Route path="/" element={authUser? <Home/> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser? <Navigate to="/" /> : <Login/>}/>
        <Route path="/signup" element={authUser? <Navigate to="/" /> :<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/edit" element={<ProfileEdit/>}/>
        <Route path="/friends" element={<FriendsList/>}/>
        <Route path="/connect" element={<Connect/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App;