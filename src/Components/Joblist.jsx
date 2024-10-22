import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CiBookmark } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import JobModal from "../Pages/JobModal";
import ThreeDotsWave from "./Threesdot";
import { JobContext } from "./JobContext";

const Joblist = () => {
  const { jobs, setJobs, loading, setLoading, error, setError } =
    useContext(JobContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const restoreScroll = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;

  const fetchJobs = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/${pageNumber}?app_id=b15da56f&app_key=5201c0d564c7ebc2efe5079bfa155d53`
      );
      setLoading(true);
      setJobs(response.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs(page);
  }, [page, restoreScroll]);

  const PreviosPage = () => {
    const prevPage = Math.max(page - 1, 1);
    navigate(`?page=${prevPage}`);
  };

  const nextPage = () => {
    const nextPage = page + 1;
    navigate(`?page=${nextPage}`);
  };

  const handleClickedJob = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      {loading && <ThreeDotsWave />}
      {error && <p>Error: {error}</p>}
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li
            key={index}
            onClick={() => handleClickedJob(job)}
            className="flex flex-col md:flex-row md:justify-around md:items-center gap-4 md:gap-8 p-4 border-b border-gray-200 cursor-pointer transition transform hover:bg-gray-100 hover:shadow-lg rounded-lg">
            <div className="flex flex-col w-full md:w-60">
              <p className="font-bold truncate">{job.title}</p>
              <p className="text-sm font-light italic text-gray-500">
                {job.company.display_name}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-80">
              {job.category.label && (
                <p className="font-sans rounded-lg bg-blue-100 text-blue-800 px-2 py-1">
                  {job.category.label}
                </p>
              )}
              {job.contract_time && (
                <p className="font-sans rounded-lg bg-green-100 text-green-800 px-2 py-1">
                  {job.contract_time}
                </p>
              )}
            </div>
            <p className="truncate w-full md:w-52 text-left">
              {job.location.display_name}
            </p>

            <div className="flex-shrink-0">
              <CiBookmark
                className="text-gray-500 hover:text-blue-500 transition duration-300"
                size={24}
              />
            </div>
            <div>
              <a
                href={job.redirect_url}
                className="bg-pink-300 text-white px-3 py-2 rounded-lg">
                Apply
              </a>
            </div>
          </li>
        ))}
      </ul>
      {!loading && (
        <div className="flex justify-between mt-6">
          <button
            onClick={PreviosPage}
            disabled={page <= 1}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200 transition duration-300">
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Next
          </button>
        </div>
      )}
      <JobModal job={selectedJob} onClose={closeModal} />
    </div>
  );
};

export default Joblist;
