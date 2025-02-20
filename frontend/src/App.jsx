import "./App.css";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";

const App = ()=>{
  return(
    <div>
      <Login/>
      <Signup/>
      <Home/>
    </div>
  )
}

export default App;