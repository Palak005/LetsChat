import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login, loading } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-[#736E8A] via-[#615D73] to-[#8A85A6] flex justify-center items-center p-6">
            <div className="w-full max-w-5xl h-[85vh] bg-white/20 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 flex overflow-hidden">
                {/* Left Side - Image (Smaller) */}
                <div className="w-2/5 h-full rounded-l-3xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1604881991405-b273c7a4386a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="" 
                        className="h-full w-full object-cover brightness-110"
                    />
                </div>

                {/* Right Side - Login Form (Bigger) */}
                <div className="w-3/5 h-full bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] rounded-r-3xl flex flex-col items-center justify-center p-12">
                    <div className="w-full max-w-md">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="font-bold text-5xl text-white mb-4">Welcome Back!</h1>
                            <p className="text-white/80 text-lg">Sign in to continue your journey</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                <label htmlFor="username" className="block">
                                    <span className="text-white font-semibold text-lg mb-2 block">Username</span>
                                    <input 
                                        id="username" 
                                        type="text" 
                                        placeholder="Enter your username" 
                                        className="input bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white text-lg"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </label>
                                
                                <label htmlFor="password" className="block">
                                    <span className="text-white font-semibold text-lg mb-2 block">Password</span>
                                    <input 
                                        id="password" 
                                        type="password" 
                                        placeholder="Enter your password"  
                                        className="input bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white text-lg"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                            </div>
                            
                            {/* Login Button */}
                            <div className="pt-4">
                                <button 
                                    className="btn w-full p-5 rounded-2xl border-0 bg-white text-[#6D54B5] font-bold text-lg hover:bg-[#392b54] hover:text-white
                                            transition-all duration-300 shadow-lg"
                                    disabled={loading}
                                >
                                    {loading ? "Signing in..." : "Sign In"}
                                </button>
                            </div>

                            {/* Signup Link */}
                            <div className="text-center pt-6">
                                <p className="text-white">
                                    Don't have an account?{" "}
                                    <Link 
                                        to="/signup" 
                                        className="font-bold text-white underline transition-colors duration-200"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;