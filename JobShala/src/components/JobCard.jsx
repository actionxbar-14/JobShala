// import React from "react";
// import { JobData } from "../data/JobData.js";
// import { Link } from "react-router-dom";

// const JobCard = () => {
//   return (
//     <div>
//       {JobData.map((data) => {
//         return (
//           <div
//             key={data.id}
//             className="flex justify-around items-center m-8 p-4 mb-4 bg-white/5 border border-blue-500/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md hover:scale-105 "
//           >
//             {/* LEFT: Job Details */}
//             <div className="flex items-start gap-2">
//               {/* Logo */}
//               <img
//                 src={data.logo}
//                 alt="job-logo"
//                 className="w-12 h-12 object-contain"
//               />

//               {/* Info */}
//               <div>
//                 <h3 className="text-lg font-semibold text-white">
//                   {data.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-300">
//                   <span>📍 {data.location}</span>
//                   <span>💰 {data.salary}</span>

//                   {/* 🔥 Active Status Tag */}
//                   <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full animate-pulse">
//                     🟢 Active Now
//                   </span>
//                 </div>

//                 {/* Type badge */}
//                 <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full">
//                   Contractual
//                 </span>
//               </div>
//             </div>

//             {/* RIGHT: Apply Button */}
//             <Link to="/apply/:id">
//               <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-600 border border-transparent hover:border-blue-600 transition-all">
//                 Apply Now <span>→</span>
//               </button>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default JobCard;




import React from "react";
import { JobData } from "../data/JobData.js";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div>
      {JobData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex justify-around items-center m-8 p-4 mb-4 bg-white/5 border border-blue-500/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md hover:scale-105 "
          >
            {/* LEFT: Job Details */}
            <div className="flex items-start gap-2">
              {/* Logo */}
              <img
                src={data.logo}
                alt="job-logo"
                className="w-12 h-12 object-contain"
              />

              {/* Info */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {data.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-300">
                  <span> {data.location}</span>
                  <span> {data.salary}</span>

                  {/* 🔥 Active Status Tag */}
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full animate-pulse">
                    🟢 Active Now
                  </span>
                </div>

                {/* Type badge */}
                <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full">
                  Contractual
                </span>
              </div>
            </div>

            {/* RIGHT: Apply Button */}
            <Link to={`/apply/${data.id}`}>

              <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-600 border border-transparent hover:border-blue-600 transition-all">
                Apply Now <span>→</span>
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
