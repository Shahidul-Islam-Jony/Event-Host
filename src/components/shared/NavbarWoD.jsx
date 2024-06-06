import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";

const NavbarWoD = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="w-11/12 mx-auto text-white bg-gradient-to-r from-[#591BFF] from-10% to-[#9c7fecef] to-90%  rounded-lg  mt-5">
      <div className="flex justify-between">
        <div className="md:border-r-4 border-white p-5 w-48 border-dashed relative">
          <div className="flex items-center gap-3 relative">
            <div onClick={()=>setIsOpen(!isOpen)} className="text-2xl md:hidden">
              <IoReorderThreeSharp />
            </div>
            <div className={isOpen?'flex flex-col p-4 w-32 gap-4 absolute top-8 z-50 bg-gradient-to-r from-[#591BFF] from-10% to-[#9c7fecef] to-90%  rounded-lg':'hidden'}>
              <NavLink>Home</NavLink>
              <NavLink>Events</NavLink>
              <NavLink>About Us</NavLink>
              <NavLink>Contact</NavLink>
            </div>
            <h3 className="text-xl">
              Event<span className="font-bold">Host</span>
            </h3>
          </div>
          <div className="hidden md:visible w-5 h-5 bg-white rounded-full absolute left-[96%] -top-3"></div>
          <div className="hidden md:visible w-5 h-5 bg-white rounded-full absolute left-[95%] -bottom-3"></div>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <NavLink>Home</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div className="md:border-l-4 pl-10 border-dashed relative">
          <div className="flex text-4xl gap-4 items-center h-full p-4 relative">
            <FaUserCircle></FaUserCircle>
            <IoCart></IoCart>
            <span className="absolute bg-white text-lg text-blue-400 w-6 h-6 text-center rounded-full top-2 right-3">
              3
            </span>
          </div>
          <div className="hidden md:visible w-5 h-5 bg-white rounded-full absolute right-[95%] -top-3"></div>
          <div className="hidden md:visible w-5 h-5 bg-white rounded-full absolute right-[95%] -bottom-3"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWoD;
