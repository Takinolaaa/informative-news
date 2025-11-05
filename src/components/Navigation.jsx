import { Link } from "react-router-dom";

import { logo } from "src/assets/InLogo.png";

export default function Navbar() {
  return (
    <nav className=" bg-black text-white font-mono shadow-md">
      <div className=" mr-7 mx-auto flex items-center justify-between px-2 py-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold tracking-wide">
          <img className="h-12 w-12 object-contain" src={logo} />
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Informative News
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm sm:text-base">
          <NavLink to="/news">Trending News</NavLink>
          <NavLink to="/news-search">Explore</NavLink>
        </div>
      </div>
    </nav>
  );
}

// Helper component for modern link styling
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative group hover:text-gray-200 transition-colors duration-200"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}
