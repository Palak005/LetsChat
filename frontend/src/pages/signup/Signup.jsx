import GenderCheckBox from "./GenderCheckbox.jsx";

const Signup = ()=>{
    return (
        <div className="w-screen h-screen bg-[rgb(97,93,115)] flex justify-center items-center" >
            <div className="w-2/3 h-4/5 bg-[#2C2638] rounded-3xl flex gap-0.5">
                <div className="h-full w-1/2 bg-[#3C364C] rounded-3xl"></div>
                <div className="h-full w-1/2 not-odd:rounded-3xl flex flex-col items-center justify-evenly">
                    <h1 className="font-bold text-3xl ">Signup</h1>
                    <form action="" className="flex flex-col items-center gap-4 w-3/4 h-4/5 p-4">
                        <label htmlFor="fullname" className="w-full">
                            <span>Fullname</span>
                        <input id="fullname" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" />
                        </label>
                        <label htmlFor="username" className="w-full">
                            <span>Username</span>
                        <input id="username" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" />
                        </label>
                        <label htmlFor="Password" className="w-full">
                            <span>Password</span>
                        <input id="Password" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" />
                        </label>
                        <label htmlFor="confirmPassword" className="w-full">
                            <span>Confirm Password</span>
                        <input id="confirmPassword" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" />
                        </label>
                        

                        <GenderCheckBox/>

                        <div className="w-full flex justify-center">
                            <button className="btn w-full max-w-xs p-6 rounded-2xl bg-[#6D54B5]">Signup</button>
                        </div>

                        
                        <a href="">
                            Already have an account?
                        </a>
                    </form>
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
//                         <input id="fullname" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="username" className="w-full">
//                             <span>Username</span>
//                         <input id="username" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="Password" className="w-full">
//                             <span>Password</span>
//                         <input id="Password" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="confirmPassword" className="w-full">
//                             <span>Confirm Password</span>
//                         <input id="confirmPassword" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
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