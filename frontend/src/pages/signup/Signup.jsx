import { useState } from "react";
import GenderCheckBox from "./GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useSignup from "../../hooks/useSignup.js";

const Signup = ()=>{
    const {loading, signup} = useSignup();

    const [inputs, setInputs] = useState({
        fullname : "",
        username : "",
        password : "",
        confirmPassword : "",
        gender : ""
    });

    const handleChange = (event)=>{
        const target = event.target;
        setInputs({
            ...inputs,
            [target.id] : target.value,
        });
    }

    const handleSubmit = async(event)=>{
        //Preventing Default Action that is Refreshing of the Page
        event.preventDefault();

        await signup(inputs);
    }

    const handleCheckboxChange = (gender)=>{
        setInputs({
            ...inputs,
            gender
        })
    }

    return (
        <div className="w-screen h-screen bg-[rgb(97,93,115)] flex justify-center items-center" >
            <div className="w-2/3 h-4/5 bg-[#2C2638] rounded-3xl flex gap-0.5">
                <div className="h-full w-1/2 bg-[#3C364C] rounded-3xl"></div>
                <div className="h-full w-1/2 not-odd:rounded-3xl flex flex-col items-center justify-evenly">
                    <h1 className="font-bold text-3xl ">Signup</h1>
                    <form action="" className="flex flex-col items-center gap-4 w-3/4 h-4/5 p-4"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="fullname" className="w-full">
                            <span>Fullname</span>
                        <input id="fullname" type="text" placeholder="Enter Fullname" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" 
                            value={inputs.fullname}
                            onChange={handleChange}
                        />      
                        </label>
                        <label htmlFor="username" className="w-full">
                            <span>Username</span>
                        <input id="username" type="text" placeholder="Enter Username" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" 
                            value={inputs.username}
                            onChange={handleChange}                        
                        />
                        </label>
                        <label htmlFor="password" className="w-full">
                            <span>Password</span>
                        <input id="password" type="text" placeholder="Enter Password" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" 
                            value={inputs.password}
                            onChange={handleChange}                       
                        />
                        </label>
                        <label htmlFor="confirmPassword" className="w-full">
                            <span>Confirm Password</span>
                        <input id="confirmPassword" type="text" placeholder="Re-enter Password" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" 
                            value={inputs.confirmPassword}
                            onChange={handleChange}                       
                        />
                        </label>
                        

                        <GenderCheckBox 
                            handleCheckboxChange={handleCheckboxChange}
                            selectedGender={inputs.gender}
                        />

                        <div className="w-full flex justify-center">
                            <button className="btn w-full max-w-xs p-6 rounded-2xl bg-[#6D54B5]">Signup</button>
                        </div>
                        <p>
                            Already have an account?
                            <Link to="/login" className="font-bold"> Login</Link>
                        </p>
                        
                    a</form>
                </div>
            </div>
    
        </div>
    )
}

export default Signup;



//Starting Code for Signup Page
// import GenderCheckBox from "./GenderCheckbox.jsx";

// const Signup = ()=>{
//     return (
//         <div className="w-screen h-screen bg-[rgb(97,93,115)] flex justify-center items-center" >
//             <div className="w-2/3 h-4/5 bg-[#2C2638] rounded-3xl flex gap-0.5">
//                 <div className="h-full w-1/2 bg-[#3C364C] rounded-3xl"></div>
//                 <div className="h-full w-1/2 not-odd:rounded-3xl flex flex-col items-center justify-evenly">
//                     <h1 className="font-bold text-3xl ">Signup</h1>
//                     <form action="" className="flex flex-col items-center gap-4 w-3/4 h-4/5 p-4">
//                         <label htmlFor="fullname" className="w-full">
//                             <span>Fullname</span>
//                         <input id="fullname" type="text" placeholder="Enter Fullname" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="username" className="w-full">
//                             <span>Username</span>
//                         <input id="username" type="text" placeholder="Enter Fullname" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="Password" className="w-full">
//                             <span>Password</span>
//                         <input id="Password" type="text" placeholder="Enter Fullname" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="confirmPassword" className="w-full">
//                             <span>Confirm Password</span>
//                         <input id="confirmPassword" type="text" placeholder="Enter Fullname" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
                        

//                         <GenderCheckBox/>

//                         <div className="w-full flex justify-center">
//                             <button className="btn w-full max-w-xs p-6 rounded-2xl bg-[#6D54B5]">Signup</button>
//                         </div>

                        
//                         <a href="">
//                             Already have an account?
//                         </a>
//                     </form>
//                 </div>
//             </div>
    
//         </div>
//     )
// }

// export default Signup;