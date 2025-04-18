


import React, { useEffect, useState } from "react";

const JobStatusPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setApplications(stored);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Your Applications</h2>

      {applications.length === 0 ? (
        <div className="text-center text-gray-300">No applications found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, i) => (
            <div
              key={i}
              className="bg-white/10 text-white p-5 rounded-xl backdrop-blur-md border border-white/10 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-1">{app.jobTitle}</h3>
              <p className="text-sm text-gray-300 mb-2">Application ID: {app.jobId}</p>
              <hr className="border-white/10 mb-4" />

              <div className="space-y-1 text-sm">
                <p><strong>Name:</strong> {app.name}</p>
                <p><strong>Email:</strong> {app.email}</p>
                <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
                <p><strong>Resume:</strong> {app.resume?.name || "N/A"}</p>
              </div>

              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
                  ✅ Submitted
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobStatusPage;
