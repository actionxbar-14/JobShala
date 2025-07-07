



// import React from "react";
// import heroImg from "../assets/Images/heroImg.png";
// import { FaArrowRightLong } from "react-icons/fa6";
// import JobCard from "./JobCard.jsx";
// import { Link } from "react-router-dom";
// import CompanyCard from "./CompanyCard.jsx";

// const Home = () => {
//   return (
//     <>
//       <div className="hero-section border-b-2 border-gray-500 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 p-6 md:p-16">
//         <div className="hero-text-section w-full md:w-[90%]">
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#c1dcf7] text-center md:text-left mb-6">
//             Discover Your Perfect Job: Matching Your Interests and Skills
//           </h1>

//           <p className="text-[#93b1b5] text-center md:text-left">
//             Unlock Your Potential, Embrace Your Future.
//           </p>

//           <p className="text-white pt-2 text-sm text-justify">
//             Each month, more than 3 million job seekers turn to our website in their
//             search for work, making over 140,000 applications every single day.
//           </p>
//         </div>

//         <div className="hero-img-section w-full flex justify-center">
//           <div className="rounded-md p-2 backdrop-blur-md bg-white/10 border border-white/10 shadow-xl w-fit">
//             <img src={heroImg} alt="Hero Graphic" className="animate-bounce w-full max-w-[300px] sm:max-w-[400px]" />
//           </div>
//         </div>
//       </div>

//       <div className="Jobs-Feature-section p-4">
//         <div className="Feature-header flex flex-col sm:flex-row justify-between items-center px-4 py-6">
//           <h2 className="text-xl font-semibold text-white mb-2 sm:mb-0">Featured Jobs</h2>
//           <Link to="/JobList">
//             <button className="flex justify-center items-center gap-2 text-blue-400 hover:text-white transition">
//               <span>View All</span>
//               <FaArrowRightLong />
//             </button>
//           </Link>
//         </div>

//         <div className="feature-card">
//           <JobCard />
//         </div>
//       </div>

//       <div className="Feature-companies py-8 px-4">
//         <div className="Feature-Company-header flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-white">Top Companies</h2>
//         </div>

//         <div className="Company-Card flex flex-wrap justify-center gap-4">
//           <CompanyCard />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;




import React from "react";
import heroImg from "../assets/Images/heroImg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import JobCard from "./JobCard.jsx";
import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard.jsx";

const Home = () => {
  return (
    <>
      <div className="hero-section border-b-2 border-gray-500 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 p-6 md:p-16">
        <div className="hero-text-section w-full md:w-[90%]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#c1dcf7] text-center md:text-left mb-6">
            Discover Your Perfect Job: Matching Your Interests and Skills
          </h1>

          <p className="text-[#93b1b5] text-center md:text-left">
            Unlock Your Potential, Embrace Your Future.
          </p>

          <p className="text-white pt-2 text-sm text-justify">
            Each month, more than 3 million job seekers turn to our website in their
            search for work, making over 140,000 applications every single day.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link to="/AuthPage">
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-2 rounded-md text-sm font-medium shadow-md transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-img-section w-full flex justify-center">
          <div className="rounded-md p-2 backdrop-blur-md bg-white/10 border border-white/10 shadow-xl w-fit">
            <img src={heroImg} alt="Hero Graphic" className="animate-bounce w-full max-w-[300px] sm:max-w-[400px]" />
          </div>
        </div>
      </div>

      <div className="Jobs-Feature-section p-4">
        <div className="Feature-header flex flex-col sm:flex-row justify-between items-center px-4 py-6">
          <h2 className="text-xl font-semibold text-white mb-2 sm:mb-0">Featured Jobs</h2>
          <Link to="/JobList">
            <button className="flex justify-center items-center gap-2 text-blue-400 hover:text-white transition">
              <span>View All</span>
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div className="feature-card">
          <JobCard />
        </div>
      </div>

      <div className="Feature-companies py-8 px-4">
        {/* <div className="Feature-Company-header flex justify-between items-center"> */}
          <h2 className="text-xl text-center font-semibold text-white">Top Companies</h2>
        {/* </div> */}

        <div className="Company-Card flex flex-wrap justify-center gap-4">
          <CompanyCard />
        </div>
      </div>
    </>
  );
};

export default Home;
