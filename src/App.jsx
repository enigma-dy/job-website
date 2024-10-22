import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { JobProvider } from "./Components/JobContext";

const Findjobs = React.lazy(() => import("./Pages/Findjobs"));
const Employers = React.lazy(() => import("./Pages/Employers"));
const Uploadjob = React.lazy(() => import("./Pages/Uploadjob"));
const Aboutus = React.lazy(() => import("./Pages/Aboutus"));
const SearchResults = React.lazy(() => import("./Pages/SearchResult"));

function App() {
  return (
    <JobProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Findjobs />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/upload-jobs" element={<Uploadjob />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/search" element={<SearchResults />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;
