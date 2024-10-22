import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Searchjob = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    if (inputElement) {
      const inputValue = inputElement.value.trim();
      setQuery(inputValue);
      navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <div className="flex bg-white w-[80%] h-20 items-center justify-between m-8 py-2 px-5 rounded-full shadow-md">
      <div className="flex flex-grow items-center">
        <input
          type="search"
          name="query"
          placeholder="Job title or keyword"
          className="p-2 bg-transparent focus:outline-none"
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Searchjob;
