


import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import JobShalaLogo from "../assets/Images/JobShalaLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#003554]/20 border-b border-white/10 ml-0 shadow-md z-50">
      <div className="flex w-full items-center justify-between px-4 py-2 md:px-8">
      
        <div className="flex items-center">
          <img src={JobShalaLogo} alt="JobShala Logo" width={160} height={160} />
        </div>

      
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-300 hover:text-white px-4 py-2 transition duration-300">
            Home
          </Link>
          <Link to="/JobStatusPage" className="text-gray-300 hover:text-white px-4 py-2 transition duration-300">
            Applied Jobs
          </Link>
        </div>

       
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#003584] transition-all 300s border-t border-white/10 pb-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2">
            Home
          </Link>
          <Link to="/status" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2">
            Applied Jobs
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
