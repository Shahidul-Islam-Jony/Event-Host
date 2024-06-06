import { FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar mt-5 rounded-lg text-white bg-gradient-to-r from-[#591BFF] from-10% to-[#9c7fecef] to-90% ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-gradient-to-r from-[#591BFF] from-10% to-[#9c7fecef] to-90% rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <p className="text-xl w-fit pr-[88px] py-2 md:border-r-4 border-dashed relative">
            Event<span className="font-bold">Host</span>
            <div className="hidden md:block w-5 h-5 rounded-full bg-white absolute left-44 -bottom-6"></div>
            <div className="hidden md:block w-5 h-5 rounded-full bg-white absolute left-44 -top-6"></div>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end relative">
          <div className="py-2 pl-[84px] md:border-l-4 border-dashed flex gap-2 relative">
            <FaUserCircle className="text-3xl"></FaUserCircle>
            <IoCart className="text-3xl"></IoCart>
            <span className="absolute right-0 top-1 bg-white text-blue-400 rounded-full px-1">3</span>
          </div>
          <div className="hidden md:block w-5 h-5 rounded-full bg-white absolute right-36 -top-6 "></div>
          <div className="hidden md:block w-5 h-5 rounded-full bg-white absolute right-36 -bottom-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
