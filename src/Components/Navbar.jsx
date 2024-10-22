import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import profile_pic from "./images/profile_pic.jpg";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Searchjob from "./Searchjob";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="hidden md:block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full">
        <div className="flex space-x-6 justify-between items-center px-10 py-5 max-w-screen-xl mx-auto">
          <div className="flex space-x-10 items-center">
            <img
              src={logo}
              alt="Company Logo"
              className="w-12 h-12 rounded-full shadow-lg"
            />
            <nav className="flex space-x-5">
              {["/", "employers", "upload-jobs", "about-us"].map(
                (path, index) => (
                  <NavLink
                    key={index}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-white underline"
                        : "font-normal text-white hover:text-gray-200 transition duration-300"
                    }>
                    {path === "/"
                      ? "Home"
                      : path
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                  </NavLink>
                )
              )}
            </nav>
          </div>

          <div className="flex justify-center items-center gap-8">
            <FaRegBell
              size={24}
              color="white"
              aria-label="Notifications"
              className="hover:text-yellow-300 transition duration-300"
            />
            <div className="text-right">
              <p className="font-bold text-white">Emma R.</p>
              <p className="text-gray-200 text-sm italic font-light">
                Quality Assurance
              </p>
            </div>
            <img
              src={profile_pic}
              alt="Profile"
              className="w-16 h-16 rounded-full shadow-lg bg-center"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-4">
          <Searchjob />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
        <img
          src={logo}
          alt="Company Logo"
          className="w-10 h-10 rounded-full shadow-lg"
        />
        <div
          onClick={toggleNav}
          aria-label={isNavOpen ? "Close Menu" : "Open Menu"}
          className="cursor-pointer text-white">
          {isNavOpen ? (
            <AiOutlineClose size={24} aria-label="Close Menu" />
          ) : (
            <AiOutlineMenu size={24} aria-label="Open Menu" />
          )}
        </div>
      </div>

      {isNavOpen && (
        <nav className="md:hidden flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute left-0 top-0 mt-16 h-full w-full space-y-2 shadow-lg z-10">
          {["Home", "employers", "upload-jobs", "about-us"].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block px-4 py-2 text-lg ${
                  isActive
                    ? "bg-pink-700 text-white font-bold"
                    : "text-white hover:bg-pink-600 transition duration-300"
                }`
              }>
              {path
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </NavLink>
          ))}
        </nav>
      )}

      <Outlet />
    </>
  );
};

export default Navbar;
