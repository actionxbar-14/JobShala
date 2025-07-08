


import React from "react";
import JobListFooter from "../components/JobListFooter";
import JobListCard from "../components/JobListCard";
import CompanyCard from "../components/CompanyCard";

const JobListPage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Top band */}
      <section className="bg-white/5 border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <JobListCard/>
        </div>
      </section>

      {/* Footer */}
      <JobListFooter />
    </div>
  );
};

export default JobListPage;
