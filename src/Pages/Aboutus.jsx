import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center px-6">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader animate-spin w-12 h-12 border-4 border-t-4 border-t-white border-purple-800 rounded-full"></div>
        </div>
      ) : (
        <div className="mt-10 bg-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wider">
            About Us
          </h1>
          <p className="text-lg font-medium text-gray-300 mb-12">
            We are a team of passionate individuals dedicated to helping people
            find their dream jobs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-3 transition duration-500">
              <h2 className="text-2xl font-bold text-white mb-2">
                Our Mission
              </h2>
              <p className="text-lg font-medium text-gray-400">
                Our mission is to provide a platform for job seekers to find
                their ideal career opportunities and for employers to find the
                best talent.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-3 transition duration-500">
              <h2 className="text-2xl font-bold text-white mb-2">Our Vision</h2>
              <p className="text-lg font-medium text-gray-400">
                Our vision is to be the leading job listing website, connecting
                millions of job seekers with their dream jobs.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-3 transition duration-500">
              <h2 className="text-2xl font-bold text-white mb-2">Our Values</h2>
              <p className="text-lg font-medium text-gray-400">
                We value innovation, teamwork, and customer satisfaction. We
                strive to provide the best possible experience for our users.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/301",
              "https://picsum.photos/200/302",
            ].map((src, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={src}
                  alt="Team Member"
                  className="w-20 h-20 rounded-full mb-4 mx-auto"
                />
                <h3 className="text-xl font-bold text-white">John Doe</h3>
                <p className="text-lg font-medium text-gray-400">
                  CEO & Founder
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Find Jobs
          </Link>
        </div>
      )}
    </div>
  );
};

export default Aboutus;
