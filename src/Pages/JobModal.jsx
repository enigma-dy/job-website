import React from "react";
import { FaWindowClose } from "react-icons/fa";

const JobModal = ({ job, onClose }) => {
  if (!job) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-lg w-11/12 max-w-2xl transform transition-all duration-300 scale-100 hover:scale-105">
        <div className="bg-white p-8 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {job.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 transition duration-300"
            >
              <FaWindowClose size={24} />
            </button>
          </div>
          <p className="text-gray-700 mb-6">{job.description}</p>
          <a
            href={job.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-full px-6 py-3 shadow-lg"
          >
            Apply Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
