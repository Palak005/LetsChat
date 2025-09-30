import { useState } from "react";
import GenderCheckBox from "./GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
    const { loading, signup } = useSignup();

    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const handleChange = (event) => {
        const target = event.target;
        setInputs({
            ...inputs,
            [target.id]: target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await signup(inputs);
    }

    const handleCheckboxChange = (gender) => {
        setInputs({
            ...inputs,
            gender
        })
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-[#736E8A] via-[#615D73] to-[#8A85A6] flex justify-center items-center p-6">
            <div className="w-full max-w-5xl h-[90vh] bg-white/20 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 flex overflow-hidden">
                {/* Left Side - Image (Smaller) */}
                <div className="w-2/5 h-full rounded-l-3xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="" 
                        className="h-full w-full object-cover brightness-110"
                    />
                </div>

                {/* Right Side - Signup Form (Bigger) */}
                <div className="w-3/5 h-full bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] rounded-r-3xl flex flex-col items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        {/* Header */}
                        <div className="text-center mb-6">
                            <h1 className="font-bold text-5xl text-white mb-4">Join Us!</h1>
                            <p className="text-white/80 text-lg">Create your account to get started</p>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-4">
                                {/* Full Name */}
                                <label htmlFor="fullname" className="block">
                                    <span className="text-white font-semibold text-lg mb-2 block">Full Name</span>
                                    <input 
                                        id="fullname" 
                                        type="text" 
                                        placeholder="Enter your full name" 
                                        className="input bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white text-lg placeholder-white/60"
                                        value={inputs.fullname}
                                        onChange={handleChange}
                                    />
                                </label>
                                
                                {/* Username */}
                                <label htmlFor="username" className="block">
                                    <span className="text-white font-semibold text-lg mb-2 block">Username</span>
                                    <input 
                                        id="username" 
                                        type="text" 
                                        placeholder="Choose a username" 
                                        className="input bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white text-lg placeholder-white/60"
                                        value={inputs.username}
                                        onChange={handleChange}
                                    />
                                </label>
                                
                                {/* Password Fields - Side by Side */}
                                <div className="grid grid-cols-2 gap-4">
                                    <label htmlFor="password" className="block">
                                        <span className="text-white font-semibold text-lg mb-2 block">Password</span>
                                        <input 
                                            id="password" 
                                            type="password" 
                                            placeholder="Create password" 
                                            className="input bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white text-lg placeholder-white/60"
                                            value={inputs.password}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    
                                    <label htmlFor="confirmPassword" className="block">
                                        <span className="text-white font-semibold text-lg mb-2 block">Confirm Password</span>
                                        <input 
                                            id="confirmPassword" 
                                            type="password" 
                                            placeholder="Confirm password" 
                                            className="input bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white text-lg placeholder-white/60"
                                            value={inputs.confirmPassword}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Gender Checkbox */}
                            <div className="py-3">
                                <GenderCheckBox 
                                    handleCheckboxChange={handleCheckboxChange}
                                    selectedGender={inputs.gender}
                                />
                            </div>
                            
                            {/* Signup Button */}
                            <div className="pt-4">
                                <button 
                                    className="btn w-full p-5 rounded-2xl border-0 bg-white text-[#6D54B5] font-bold text-lg hover:bg-[#392b54] hover:text-white
                                            transition-all duration-300 shadow-lg"
                                    disabled={loading}
                                >
                                    {loading ? "Creating Account..." : "Sign Up"}
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="text-center pt-4">
                                <p className="text-white">
                                    Already have an account?{" "}
                                    <Link 
                                        to="/login" 
                                        className="font-bold text-white underline transition-colors duration-200"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;