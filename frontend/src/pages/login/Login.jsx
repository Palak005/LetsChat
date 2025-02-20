const Login = ()=>{
    return (
        <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center" >
            <div className="w-1/2 h-3/4 bg-[#2C2638] rounded-3xl flex gap-0.5">
                <div className="h-full w-1/2 bg-[#3C364C] rounded-3xl"></div>
                <div className="h-full w-1/2 rounded-3xl flex flex-col items-center justify-evenly ">
                    <h1 className="font-bold text-3xl ">Login</h1>
                    <form action="" className="flex flex-col items-center gap-4 w-3/4 p-4">
                        <label htmlFor="username" className="w-full">
                            <span>Username</span>
                        <input id="username" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" />
                        </label>
                        <label htmlFor="Password" className="w-full">
                            <span>Password</span>
                        <input id="Password" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered rounded-xl w-full max-w-xs" />
                        </label>
                        

                        <div className="w-full flex justify-center mt-5">
                            <button className="btn w-full max-w-xs p-6 rounded-2xl bg-[#6D54B5]">Login</button>
                        </div>

                        
                        <a href="">
                            Don't have an account?
                        </a>
                    </form>
                </div>
            </div>
    
        </div>
    )
}

export default Login;

//Starter Login Page Code
// const Login = ()=>{
//     return (
//         <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center" >
//             <div className="w-1/2 h-3/4 bg-[#2C2638] rounded-3xl flex gap-0.5">
//                 <div className="h-full w-1/2 bg-[#3C364C] rounded-3xl"></div>
//                 <div className="h-full w-1/2 not-odd:rounded-3xl flex flex-col items-center justify-evenly">
//                     <h1 className="font-bold text-3xl ">Login</h1>
//                     <form action="" className="flex flex-col gap-5">
//                         <label htmlFor="username">
//                             <span>Username</span>
//                         <input id="username" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>
//                         <label htmlFor="password">
//                             <span>Password</span>
//                         <input id="password" type="text" placeholder="Type here" className="input bg-[#3C364C] input-bordered w-full max-w-xs" />
//                         </label>

//                         <a href="">
//                             Don't have an account?
//                         </a>

//                         <div>
//                         <button className="btn btn-primary bg-[#6D54B5]">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
    
//         </div>
//     )
// }

// export default Login;