import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/Home.jsx"));
const Aboutus = lazy(() => import("./pages/Aboutus.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const FAQ = lazy(() => import("./pages/FAQ.jsx"));
const Results = lazy(() => import("./pages/Results"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Signin = lazy(() => import("./components/Signin/Signin"));
const ForgotPassword = lazy(() =>
  import("./components/Signin/ForgotPassword/ForgotPassword")
);
const Contact = lazy(() => import("./components/Contact/Contact"));
const EmployerDashboard = lazy(() =>
  import("./components/Employer/EmployerDashboard")
);
const EmployerListings = lazy(() =>
  import("./components/Employer/EmployerListings")
);

const Resume = lazy(() => import("./components/Resume/Resume"));
const ResumeEmployer = lazy(() => import("./components/Resume/ResumeEmployer"));
const ApplicationPage = lazy(() =>
  import("./components/ApplicationPage/ApplicationPage")
);

const PageRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/dashboard" element={<EmployerDashboard />} />
        <Route path="/listings" element={<EmployerListings />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/:id" element={<ResumeEmployer />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/apply/:id/:title" element={<ApplicationPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PageRoutes;
