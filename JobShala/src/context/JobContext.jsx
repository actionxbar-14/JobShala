import { createContext, useContext, useState } from "react";

// Create context
const JobContext = createContext();

// Create provider
export const JobProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const applyToJob = (jobApplication) => {
    setApplications((prev) => [...prev, jobApplication]);
  };

  return (
    <JobContext.Provider value={{ applications, applyToJob }}>
      {children}
    </JobContext.Provider>
  );
};

// Custom hook
export const useJobContext = () => useContext(JobContext);
