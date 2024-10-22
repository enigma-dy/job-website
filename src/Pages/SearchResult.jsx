import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Joblist from "../Components/Joblist";
import { JobProvider } from "../Components/JobContext";

const SearchResults = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const query = new URLSearchParams(location.search).get("q");
      if (query) {
        try {
          const response = await axios.get(
            `https://api.adzuna.com/v1/api/jobs/gb/search/${query}?app_id=b15da56f&app_key=5201c0d564c7ebc2efe5079bfa155d53`
          );
          setJobs(response.data.results);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchJobs();
  }, [location]);

  return (
    <JobProvider
      value={{ jobs, setJobs, loading, setLoading, error, setError }}>
      <Joblist />
    </JobProvider>
  );
};

export default SearchResults;
