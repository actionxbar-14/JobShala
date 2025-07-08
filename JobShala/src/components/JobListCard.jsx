// import React from 'react';
// import JobListData  from '../data/JobListData.js';
// import { Link } from 'react-router-dom';

// const JobListCard = () => {
 


//   return (
//     <div className="p-8 bg-white/5 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-white mb-6">
//         Featured <span className="text-blue-600">Jobs</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {JobListData.map((data, id) => (
//           <div
//             key={data.id}
//             className="border border-gray-200 rounded-xl p-5 bg-white/5 hover:shadow transition"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <img
//                 src={data.logo}
//                 alt={data.name}
//                 className="w-10 h-10 object-cover rounded-full"
//               />
//               <div>
//                 <h3 className="text-md font-semibold text-white">
//                   {data.name}
//                 </h3>
//                 <p className="text-sm text-gray-400 flex items-center">
//                   <svg
//                     className="w-4 h-4 mr-1 text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   {data.location}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 mb-4">
//               <span className="inline-block text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
//                 {data.category}
//               </span>
//               <span className="inline-block text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
//                 {data.positions} Open Position
//               </span>
//             </div>
         
//          <div className="jobList-card-btns flex justify-between">
//          <Link
//               to={`/apply/${data.id}`}
//               className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
//             >
//               View Profile →
//             </Link>
            
//             <Link
//               to={`/apply/${data.id}`}
//               className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
//             >
//               Apply →
//             </Link>

//          </div>
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListCard;





// import React from 'react';
// import JobListData from '../data/JobListData.js';
// import { Link } from 'react-router-dom';

// const JobListCard = () => {
//   return (
//     <div className="px-4 sm:px-8 py-6 bg-white/5 rounded-lg shadow-lg">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl sm:text-2xl font-bold text-white">
//           Featured <span className="text-blue-500">Jobs</span>
//         </h2>
//         <Link
//           to="/joblist"
//           className="text-xs sm:text-sm px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-md hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent transition-all"
//         >
//           View All
//         </Link>
//       </div>

//       {/* Horizontal scroll cards for mobile, grid on larger */}
//       <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto scrollbar-hide">
//         {JobListData.map((data) => (
//           <div
//             key={data.id}
//             className="min-w-[250px] sm:min-w-0 flex-shrink-0 border border-white/10 rounded-xl p-4 bg-white/5 hover:shadow-md transition"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <img
//                 src={data.logo}
//                 alt={data.name}
//                 className="w-10 h-10 object-cover rounded-full"
//               />
//               <div>
//                 <h3 className="text-sm font-semibold text-white">
//                   {data.name}
//                 </h3>
//                 <p className="text-xs text-gray-400 flex items-center">
//                   <svg
//                     className="w-4 h-4 mr-1 text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   {data.location}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 mb-4">
//               <span className="inline-block text-xs text-gray-300 bg-gray-800 px-3 py-1 rounded-full font-medium">
//                 {data.category}
//               </span>
//               <span className="inline-block text-xs text-gray-300 bg-gray-800 px-3 py-1 rounded-full font-medium">
//                 {data.positions} Open Position
//               </span>
//             </div>

//             <div className="jobList-card-btns flex justify-between text-sm">
//               <Link
//                 to={`/apply/${data.id}`}
//                 className="text-blue-400 font-medium hover:underline flex items-center gap-1"
//               >
//                 View Profile →
//               </Link>
//               <Link
//                 to={`/apply/${data.id}`}
//                 className="text-blue-400 font-medium hover:underline flex items-center gap-1"
//               >
//                 Apply →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListCard;






import React from 'react';
import JobListData from '../data/JobListData.js';
import { Link } from 'react-router-dom';

const JobListCard = () => {
  return (
    <div className="p-4 sm:p-8 bg-white/5 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        Featured <span className="text-blue-600">Jobs</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {JobListData.map((data) => (
          <div
            key={data.id}
            className="border border-white/10 rounded-xl p-4 sm:p-5 bg-white/5 hover:shadow transition"
          >
            <div className="flex items-start sm:items-center gap-3 mb-4">
              <img
                src={data.logo}
                alt={data.name}
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-md font-semibold text-white">
                  {data.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {data.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <span className="inline-block text-xs sm:text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded-full font-medium">
                {data.category}
              </span>
              <span className="inline-block text-xs sm:text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded-full font-medium">
                {data.positions} Open Position
              </span>
            </div>

            <div className="jobList-card-btns flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <Link
                to='/ViewJob'
                className="text-blue-400 font-medium text-sm hover:underline flex items-center gap-1"
              >
                View Profile →
              </Link>

              <Link
                to={`/apply/${data.id}`}
                className="text-blue-400 font-medium text-sm hover:underline flex items-center gap-1"
              >
                Apply →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListCard;