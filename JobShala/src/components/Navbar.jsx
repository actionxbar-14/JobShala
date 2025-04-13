

import { Link } from "react-router-dom";
import JobShalaLogo from "../assets/Images/JobShalaLogo.png";

const Navbar = () => {
  return (
    <header className="p-2 pb-0 ml-0 pt-0 grid place-items-center w-full">
      <div className=" flex justify-center items-center p-1 gap-96 w-full z-50  bg-[#003554]/20 border-b border-white/10 shadow-md">
        <div className="head-logo flex items-center justify-center">
          <img src={JobShalaLogo} alt="" width={200} height={200} />
        </div>

        <div className="head-links flex gap-4 pb-2 pr-4">
          <Link to="/" className="text-gray-300 hover:text-white px-4 py-2 transition duration-300">
             Home
          </Link>
          <Link
            to="/status"
            className="text-gray-300 hover:text-white px-4 py-2 transition duration-300"
          >
            Applied Jobs
          </Link>
        </div>
      </div>
    </header>
    // <nav className="fixed top-4 left-0 rounded-full w-full z-50 backdrop-blur-xl bg-[#003554]/20 border-b border-white/10 shadow-xl">
    //   <div className="max-w-7xl mx-auto px-1 py-1 flex items-center justify-center gap-80">
    //

    //     <div className="head-links flex gap-4">
    //       <Link to="/" className="text-gray-300 hover:text-white transition">
    //         Home
    //       </Link>
    //       <Link
    //         to="/status"
    //         className="text-gray-300 hover:text-white transition"
    //       >
    //         Applied Jobs
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
