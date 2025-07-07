


// // import React from "react";
// // import { JobData } from "../data/JobData.js";
// // import { Link } from "react-router-dom";

// // const JobCard = () => {
// //   return (
// //     <div className="p-4">
// //       {JobData.map((data) => {
// //         return (
// //           <div
// //             key={data.id}
// //             className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 m-4 p-4 bg-white/5 border border-blue-500/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md hover:scale-105"
// //           >
// //             {/* LEFT: Logo + Info */}
// //             <div className="flex items-start gap-3 w-full">
// //               <img
// //                 src={data.logo}
// //                 alt="job-logo"
// //                 className="w-12 h-12 object-contain"
// //               />

// //               <div className="flex flex-col">
// //                 <h3 className="text-lg font-semibold text-white">{data.title}</h3>

// //                 <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-300">
// //                   <span>{data.location}</span>
// //                   <span>{data.salary}</span>
// //                   <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full animate-pulse">
// //                     🟢 Active Now
// //                   </span>
// //                 </div>

// //                 <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full w-fit">
// //                   Contractual
// //                 </span>
// //               </div>
// //             </div>

// //             {/* RIGHT: Apply Button */}
// //             <div className="w-full md:w-auto">
// //               <Link to={`/apply/:${data.id}`}>
// //                 <button className="w-full md:w-auto flex justify-center items-center gap-1 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-600 border border-transparent hover:border-blue-600 transition-all mt-2 md:mt-0">
// //                   Apply Now <span>→</span>
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default JobCard;





// import React from "react";
// import { JobData } from "../data/JobData.js";
// import { Link } from "react-router-dom";

// const JobCard = () => {
//   return (
//     <div className="container mx-auto px-4">
//       {JobData.map((data) => (
//         <div
//           key={data.id}
//           className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 bg-white/5 border border-blue-500/20 rounded-xl backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
//         >
//           {/* LEFT: Logo + Info */}
//           <div className="flex items-start gap-4 w-full max-w-full overflow-hidden">
//             <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-inner">
//               <img
//                 src={data.logo}
//                 alt="job-logo"
//                 className="w-8 h-8 object-contain"
//               />
//             </div>

//             <div className="flex flex-col flex-1 text-white text-sm">
//               <h3 className="text-base font-semibold">
//                 {data.title}
//               </h3>

//               <div className="flex flex-wrap gap-2 mt-1 text-xs">
//                 <span>{data.location}</span>
//                 <span>{data.salary}</span>
//                 <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full animate-pulse">
//                   🟢 Active Now
//                 </span>
//               </div>

//               <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full w-fit">
//                 Contractual
//               </span>
//             </div>
//           </div>

//           {/* RIGHT: Apply Button */}
//           <div className="w-full sm:w-auto">
//             <Link to={`/apply/${data.id}`}>
//               <button className="flex gap-2 items-center justify-center font-sm rounded-md p-1.5 bg-white/10 hover:bg-white/20 text-white">
//                 Apply Now <span>→</span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobCard;





import React from "react";
import { JobData } from "../data/JobData.js";
import { Link } from "react-router-dom";


const JobCard = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-4">
      {JobData.map((data) => (
        <div
          key={data.id}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-5 p-4 bg-white/5 border border-blue-500/20 rounded-xl backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* LEFT: Logo + Info */}
          <div className="flex items-start gap-3 w-full min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-inner">
              <img
                src={data.logo}
                alt="job-logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col flex-1 min-w-0 text-white">
              <h3 className="text-base font-semibold truncate">
                {data.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-300">
                <span className="truncate max-w-[50%]">{data.location}</span>
                <span>{data.salary}</span>
                <span className="inline-block px-2 py-0.5 font-medium bg-green-600 text-white rounded-full animate-pulse">
                  🟢 Active
                </span>
              </div>

              <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full w-fit">
                Contractual
              </span>
            </div>
          </div>

          {/* RIGHT: Apply Button */}
          <div className="w-full sm:w-auto">
            <Link to={`/apply/${data.id}`}>
              <button className="w-full sm:w-auto flex justify-center items-center gap-1 text-xs font-medium bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1.5 rounded-md hover:from-white hover:to-white hover:text-blue-600 border border-blue-600 transition-all shadow-sm">
                Apply <span>→</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
