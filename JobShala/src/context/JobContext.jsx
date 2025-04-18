import { createContext, useContext, useState } from "react";

const JobContext = createContext();


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


export const useJobContext = () => useContext(JobContext);
