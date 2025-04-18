


import React from "react";
import { JobData } from "../data/JobData.js";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="p-4">
      {JobData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 m-4 p-4 bg-white/5 border border-blue-500/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md hover:scale-105"
          >
            {/* LEFT: Logo + Info */}
            <div className="flex items-start gap-3 w-full">
              <img
                src={data.logo}
                alt="job-logo"
                className="w-12 h-12 object-contain"
              />

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">{data.title}</h3>

                <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-300">
                  <span>{data.location}</span>
                  <span>{data.salary}</span>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full animate-pulse">
                    🟢 Active Now
                  </span>
                </div>

                <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full w-fit">
                  Contractual
                </span>
              </div>
            </div>

            {/* RIGHT: Apply Button */}
            <div className="w-full md:w-auto">
              <Link to={`/apply/:${data.id}`}>
                <button className="w-full md:w-auto flex justify-center items-center gap-1 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-600 border border-transparent hover:border-blue-600 transition-all mt-2 md:mt-0">
                  Apply Now <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
