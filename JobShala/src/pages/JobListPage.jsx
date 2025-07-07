// import React from "react";
// import JobListFooter from "../components/JobListFooter";
// import JobListCard from "../components/JobListCard.jsx";

// const JobListPage = () => {
//   return (
//     <>
//       <div className="flex flex-wrap  border-b-2 border-white/5 justify-center items-center bg-white/5 p-4 pb-8">
//         <JobListCard />
//       </div>
//       <JobListFooter />
//     </>
//   );
// };

// export default JobListPage;


import React from "react";
import JobListFooter from "../components/JobListFooter";
import JobListCard from "../components/JobListCard";

/**
 * JobListPage – wraps the JobListCard carousel/grid + a footer.
 * Uses a neutral container so JobListCard handles its own responsive layout.
 */
const JobListPage = () => {
  return (
    <>
      {/* Top Band */}
      <section className="bg-white/5 border-b border-white/10 py-6 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <JobListCard />
        </div>
      </section>

      {/* Footer */}
      <JobListFooter />
    </>
  );
};

export default JobListPage;
