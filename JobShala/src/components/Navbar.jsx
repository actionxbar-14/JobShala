


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import JobShalaLogo from "../assets/Images/JobShalaLogo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full bg-[#003554]/20 border-b border-white/10 ml-0  shadow-md z-50">
//       <div className="flex w-full items-center justify-between px-4 py-2 md:px-8">
      
//         <div className="flex items-center">
//           <img src={JobShalaLogo} alt="JobShala Logo" width={160} height={160} />
//         </div>

      
//         <div className="hidden md:flex gap-6 items-center">
//           <Link to="/" className="text-gray-300 hover:text-white px-4 py-2 transition duration-300">
//             Home
//           </Link>
//           <Link to="/JobStatusPage" className="text-gray-300 hover:text-white px-4 py-2 transition duration-300">
//             Applied Jobs
//           </Link>
//         </div>

       
//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className={`fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-md border-l border-white/10 transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 md:hidden flex flex-col pt-20 px-6 gap-4`}>
//           <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2">
//             Home
//           </Link>
//           <Link to="/status" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2">
//             Applied Jobs
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import JobShalaLogo from "../assets/Images/JobShalaLogo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full bg-[#003554]/20 border-b border-white/10 ml-0 shadow-md z-50">
//       {/* TOP BAR */}
//       <div className="flex w-full items-center justify-between px-4 py-2 md:px-8">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={JobShalaLogo}
//             alt="JobShala Logo"
//             className="w-40 h-auto object-contain"
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex gap-6 items-center">
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-white px-4 py-2 transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/status"
//             className="text-gray-300 hover:text-white px-4 py-2 transition duration-300"
//           >
//             Applied Jobs
//           </Link>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* MOBILE OFF‑CANVAS SIDEBAR */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-md border-l border-white/10 transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 md:hidden flex flex-col pt-20 px-6 gap-4`}
//       >
//         {/* Close button inside sidebar */}
//         <button
//           onClick={toggleMenu}
//           aria-label="Close menu"
//           className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
//         >
//           <FaTimes size={24} />
//         </button>

//         <Link
//           to="/"
//           onClick={toggleMenu}
//           className="w-full text-center py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium"
//         >
//           Home
//         </Link>
//         <Link
//           to="/status"
//           onClick={toggleMenu}
//           className="w-full text-center py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium"
//         >
//           Applied Jobs
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import JobShalaLogo from "../assets/Images/JobShalaLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#003554]/20 border-b border-white/10 ml-0 shadow-md z-50 relative">
      {/* TOP BAR */}
      <div className="flex w-full items-center justify-between px-4 py-2 md:px-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={JobShalaLogo}
            alt="JobShala Logo"
            className=" md:w-40  h-auto object-contain"
            style={{"width":"180px"}}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="w-full  text-center rounded-md px-2 py-1.5 bg-white/5 hover:bg-white/20 text-white"
          >
            Home
          </Link>
        
           <Link
            to="/JobDashboard"
            className="w-full text-center  rounded-md px-2 py-1.5 bg-white/5 hover:bg-white/20 text-white"
          >
            Dashboard
          </Link>
            <Link
            to="/status"
            className="w-full text-center  rounded-md px-2 py-1.5 bg-white/5 hover:bg-white/20 text-white"
          >
            Jobs
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE OFF‑CANVAS SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-md border-l border-white/10 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col pt-20 px-6 gap-4 z-[9999]`}
      >
        {/* Close button inside sidebar */}
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        >
          <FaTimes size={20} />
        </button>

        <Link
          to="/"
          onClick={toggleMenu}
          className="w-full text-center py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium"
        >
          Home
        </Link>
        <Link
          to="/status"
          onClick={toggleMenu}
          className="w-full text-center py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium"
        >
          Applied Jobs
        </Link>
         <Link
          to="/JobDashboard"
          onClick={toggleMenu}
          className="w-full text-center py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium"
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
