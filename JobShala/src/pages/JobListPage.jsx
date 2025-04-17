import React from "react";
import JobListFooter from "../components/JobListFooter";
import JobListCard from "../components/JobListCard.jsx";

const JobListPage = () => {
  return (
    <>
      <div className="flex flex-wrap  border-b-2 border-white/5 justify-center items-center bg-white/5 p-4 pb-8">
        <JobListCard />
      </div>
      <JobListFooter />
    </>
  );
};

export default JobListPage;
