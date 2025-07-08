// import React from "react";
// import { CompanyData } from "../data/CompanyData.js";
// const CompanyCard = () => {
//   return (
//     <div className="flex justify-center p-4 items-center flex-wrap gap-10">
//       {CompanyData.map((data) => {
//         return (
//           <div key={data.id}>
//             <div className=" w-full max-w-xs bg-white/5 gap-2 text-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-blue-500 hover:shadow-md transition-all hover:scale-105 duration-300 cursor-pointer">
//               <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-white rounded-full">
//                 <img
//                   src={data.logo}
//                   alt="Feature Logo"
//                   className="w-10 h-10 object-contain"
//                 />
//               </div>

//               <h3 className="text-center text-lg font-semibold text-white">
//                 {data.name}
//               </h3>

//               {/* Location */}
//               <p className="text-center text-sm text-gray-500 mt-1">
//                 {data.location}
//               </p>

//               {/* Industry Tag */}
//               <div className="flex justify-center mt-3">
//                 <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
//                   {data.industry}
//                 </span>
//               </div>

//               {/* Stats */}
//               <div className="mt-4 text-center">
//                 <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full">
//                   {`🚀 ${data.openPositions} Active Features`}
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CompanyCard;



import React from "react";
import { CompanyData } from "../data/CompanyData.js";

const CompanyCard = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 px-4">
      {CompanyData.map((data) => (
        <div key={data.id} className="w-full max-w-[300px]">
          <div className="bg-white/5 text-white border border-white/10 rounded-xl p-5 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
              <img
                src={data.logo}
                alt="Feature Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="text-center text-lg font-semibold truncate">{data.name}</h3>

            <p className="text-center text-sm text-gray-400 mt-1 truncate">
              {data.location}
            </p>

            <div className="flex justify-center mt-3">
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full truncate">
                {data.industry}
              </span>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full">
                🚀 {data.openPositions} Active Features
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCard;
