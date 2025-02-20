const SearchBar = ()=>{
    return <div className="navbar text-primary-content p-3 rounded-2xl bg-[#3C364C]">
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered rounded-2xl w-24 md:w-auto bg-[#3C364C]" />
        </div>
        <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
        </div>
    </div>
}

export default SearchBar;


//Starter Code Snippet
// const SearchBar = ()=>{
//     return <div className="navbar text-primary-content p-3 rounded-2xl bg-[#3C364C]">
//         <div className="form-control">
//             <input type="text" placeholder="Search" className="input input-bordered rounded-2xl w-24 md:w-auto bg-[#3C364C]" />
//         </div>
//         <div className="navbar-end">
//         <button className="btn btn-ghost btn-circle">
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//         </button>
//         </div>
//     </div>
// }

// export default SearchBar;