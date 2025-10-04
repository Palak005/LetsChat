import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px] w-screen bg-gradient-to-r from-[#4A3F6B] to-[#6D54B5] flex items-center justify-between px-10 shadow-lg fixed top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-white font-extrabold text-3xl tracking-wide hover:opacity-90 transition"
      >
        LetsChat
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-10 text-lg font-semibold text-white">
        <Link
          to="/connect"
          className="hover:text-[#FFD9FF] transition duration-200"
        >
          Connect
        </Link>

        <Link
          to="/friends"
          className="hover:text-[#FFD9FF] transition duration-200"
        >
          Friends
        </Link>

        {/* Profile Avatar */}
        <Link to="/profile">
          <div className="w-11 h-11 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-base font-bold text-white hover:bg-white/30 transition duration-300">
            P
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
