// // import React from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { CompanyData } from "../data/CompanyData";
// // import { JobData } from "../data/JobData";

// // /**
// //  * ViewJob – detailed company profile page.
// //  * Route: /company/:id  (adjust in your router + JobListCard links)
// //  */
// // const ViewJob = () => {
// //   const { id } = useParams();
// //   const company = CompanyData.find((c) => String(c.id) === id);

// //   if (!company) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center text-white">
// //         Company not found
// //       </div>
// //     );
// //   }

// //   // Filter jobs belonging to this company (if JobData has companyId)
// //   const companyJobs = CompanyData.filter((j) => String(j.companyId) === id);

// //   return (
// //     <div className="min-h-screen bg-[#001a26] text-white overflow-x-hidden px-4 sm:px-8 py-8">
// //       {/* Header */}
// //       <header className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-6">
// //         <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-xl">
// //           <img src={company.logo} alt="logo" className="w-24 h-24 object-contain" />
// //         </div>
// //         <div className="flex flex-col gap-2 text-center sm:text-left">
// //           <h1 className="text-2xl sm:text-3xl font-bold">{company.name}</h1>
// //           <p className="text-gray-400 text-sm">{company.location}</p>
// //           <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium rounded-full w-fit">
// //             {company.industry}
// //           </span>
// //         </div>
// //       </header>

// //       {/* Description */}
// //       <section className="max-w-5xl mx-auto mb-10 bg-white/5 border border-white/10 rounded-xl p-6">
// //         <h2 className="text-lg font-semibold mb-2">About {company.name}</h2>
// //         <p className="text-gray-300 text-sm leading-relaxed">
// //           {company.description || "No description available. Replace this with real company details fetched from your backend."}
// //         </p>
// //       </section>

// //       {/* Open Positions */}
// //       <section className="max-w-5xl mx-auto mb-10">
// //         <h2 className="text-lg font-semibold mb-4">Open Positions</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {companyJobs.length ? (
// //             companyJobs.map((job) => (
// //               <div
// //                 key={job.id}
// //                 className="bg-white/5 border border-white/10 rounded-lg p-4 hover:shadow-md transition"
// //               >
// //                 <h3 className="font-medium mb-1">{job.title}</h3>
// //                 <p className="text-xs text-gray-400 mb-2">{job.location}</p>
// //                 <p className="text-xs text-gray-400 mb-4">💰 {job.salary}</p>
// //                 <Link
// //                   to={`/apply/${job.id}`}
// //                   className="text-blue-400 hover:underline text-sm"
// //                 >
// //                   Apply →
// //                 </Link>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-gray-400 text-sm">No jobs listed right now.</p>
// //           )}
// //         </div>
// //       </section>

// //       {/* Ongoing Tests & Interviews */}
// //       <section className="max-w-5xl mx-auto mb-10">
// //         <h2 className="text-lg font-semibold mb-4">Live Tests & Interviews</h2>
// //         {company.tests?.length ? (
// //           <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
// //             {company.tests.map((t, idx) => (
// //               <li key={idx}>{t}</li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-gray-400 text-sm">No live assessments at the moment.</p>
// //         )}
// //       </section>

// //       {/* Salary Info */}
// //       <section className="max-w-5xl mx-auto mb-10">
// //         <h2 className="text-lg font-semibold mb-4">Salary & Benefits</h2>
// //         <p className="text-gray-300 text-sm">
// //           {company.salaryRange || "Salary details coming soon. Replace with backend data."}
// //         </p>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ViewJob;






// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { CompanyData } from "../data/CompanyData";
// import { JobData } from "../data/JobData";
// import JobListData from "../data/JobListData";

// /**
//  * ViewJob – detailed company profile page.
//  * Route: /company/:id  (adjust in your router + JobListCard links)
//  */
// const ViewJob = () => {
//   const { id } = useParams();
//   const company = JobListData.find((c) => String(c.id) === id);

//   if (!company) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Company not found
//       </div>
//     );
//   }

//   // Filter jobs belonging to this company (if JobData has companyId)
//   const companyJobs = JobListData.filter((j) => String(j.id) === id);

//   return (
//     <div className="min-h-screen bg-[#001a26] text-white overflow-x-hidden px-4 sm:px-8 py-8">
//       {/* Header */}
//       <header className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-6">
//         <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-xl">
//           <img src={company.logo} alt="logo" className="w-24 h-24 object-contain" />
//         </div>
//         <div className="flex flex-col gap-2 text-center sm:text-left">
//           <h1 className="text-2xl sm:text-3xl font-bold">{company.name}</h1>
//           <p className="text-gray-400 text-sm">{company.location}</p>
//           <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium rounded-full w-fit">
//             {company.industry}
//           </span>
//         </div>
//       </header>

//       {/* Description */}
//       <section className="max-w-5xl mx-auto mb-10 bg-white/5 border border-white/10 rounded-xl p-6">
//         <h2 className="text-lg font-semibold mb-2">About {company.name}</h2>
//         <p className="text-gray-300 text-sm leading-relaxed">
//           {company.description || "No description available. Replace this with real company details fetched from your backend."}
//         </p>
//       </section>

//       {/* Open Positions */}
//       <section className="max-w-5xl mx-auto mb-10">
//         <h2 className="text-lg font-semibold mb-4">Open Positions</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {companyJobs.length ? (
//             companyJobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-white/5 border border-white/10 rounded-lg p-4 hover:shadow-md transition"
//               >
//                 <h3 className="font-medium mb-1">{job.title}</h3>
//                 <p className="text-xs text-gray-400 mb-2">{job.location}</p>
//                 <p className="text-xs text-gray-400 mb-4">💰 {job.salary}</p>
//                 <Link
//                   to={`/apply/${job.id}`}
//                   className="text-blue-400 hover:underline text-sm"
//                 >
//                   Apply →
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400 text-sm">No jobs listed right now.</p>
//           )}
//         </div>
//       </section>

//       {/* Ongoing Tests & Interviews */}
//       <section className="max-w-5xl mx-auto mb-10">
//         <h2 className="text-lg font-semibold mb-4">Live Tests & Interviews</h2>
//         {company.tests?.length ? (
//           <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
//             {company.tests.map((t, idx) => (
//               <li key={idx}>{t}</li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-400 text-sm">No live assessments at the moment.</p>
//         )}
//       </section>

//       {/* Salary Info */}
//       <section className="max-w-5xl mx-auto mb-10">
//         <h2 className="text-lg font-semibold mb-4">Salary & Benefits</h2>
//         <p className="text-gray-300 text-sm">
//           {company.salaryRange || "Salary details coming soon. Replace with backend data."}
//         </p>
//       </section>
//     </div>
//   );
// };

// export default ViewJob;




import React from "react";
import { useParams, Link } from "react-router-dom";
import jobListData from "../data/JobListData";
import { JobData } from "../data/JobData";

const ViewJob = () => {
  const { id } = useParams();
  const company = jobListData.find((c) => String(c.id) === id);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Company not found
      </div>
    );
  }

  const companyJobs = JobData.filter((j) => String(j.companyId) === id);

  return (
    <div className="min-h-screen bg-[#001a26] text-white overflow-x-hidden px-4 sm:px-8 py-8">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-xl">
          <img src={company.logo} alt="logo" className="w-24 h-24 object-contain" />
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">{company.name}</h1>
          <p className="text-gray-400 text-sm">{company.location}</p>
          <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium rounded-full w-fit">
            {company.category}
          </span>
        </div>
      </header>

      {/* Description Placeholder */}
      <section className="max-w-5xl mx-auto mb-10 bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-2">About {company.name}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          This company specializes in {company.category}. More detailed description can be integrated from backend in the future.
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-5xl mx-auto mb-10">
        <h2 className="text-lg font-semibold mb-4">Open Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companyJobs.length ? (
            companyJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="font-medium mb-1">{job.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{job.location}</p>
                <p className="text-xs text-gray-400 mb-4">💰 {job.salary}</p>
                <Link
                  to={`/apply/${job.id}`}
                  className="text-blue-400 hover:underline text-sm"
                >
                  Apply →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No jobs listed right now.</p>
          )}
        </div>
      </section>

      {/* Tests Placeholder */}
      <section className="max-w-5xl mx-auto mb-10">
        <h2 className="text-lg font-semibold mb-4">Live Tests & Interviews</h2>
        <p className="text-gray-400 text-sm">No data available yet. Future integration planned.</p>
      </section>

      {/* Salary Info */}
      <section className="max-w-5xl mx-auto mb-10">
        <h2 className="text-lg font-semibold mb-4">Salary & Benefits</h2>
        <p className="text-gray-300 text-sm">
          Average salary range varies by role. Detailed compensation will be fetched from backend soon.
        </p>
      </section>
    </div>
  );
};

export default ViewJob;
