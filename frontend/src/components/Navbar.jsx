import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px] w-screen bg-[#2C2638] flex items-center justify-between px-8 shadow-md fixed top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-white font-bold text-2xl">
        LetsChat
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-white font-medium">
        <Link
          to="/connect"
          className="hover:text-[#6D54B5] transition duration-200"
        >
          Connect
        </Link>

        <Link
          to="/friends"
          className="hover:text-[#6D54B5] transition duration-200"
        >
        Friends
        </Link>

        {/* Profile Avatar */}
        <Link to="/profile">
          <div className="w-10 h-10 rounded-full bg-[#3C364C] border-2 border-[#6D54B5] flex items-center justify-center text-sm font-bold text-white hover:bg-[#6D54B5] transition duration-200">
            P
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
