import React, { createContext, useState } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <JobContext.Provider
      value={{ jobs, setJobs, loading, setLoading, error, setError }}
    >
      {children}
    </JobContext.Provider>
  );
};
