import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
// import Home from "./pages/Home.jsx";
// import Aboutus from "./pages/Aboutus.jsx";
// import Navbar from "../src/components/Navbar/Navbar";
// import Sidebar from "../src/components/Sidebar/Sidebar";
// import Signup from "../src/components/Signup/Signup";
// import Profile from "./pages/Profile";
// import Signin from "../src/components/Signin/Signin";
// import ForgotPassword from "../src/components/Signin/ForgotPassword/ForgotPassword";
// import FAQ from "./pages/FAQ.jsx";
// import Results from "./pages/Results";
// import Footer from "./components/Footer/Footer";
// import Contact from "./components/Contact/Contact";
// import EmployerDashboard from "./components/Employer/EmployerDashboard";
// import Resume from "./components/Resume/Resume";
// import ApplicationPage from "./components/ApplicationPage/ApplicationPage";
// import ResumeEmployer from "./components/Resume/ResumeEmployer";

const Home = lazy(() => import("./pages/Home.jsx"));
const Aboutus = lazy(() => import("./pages/Aboutus.jsx"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
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
const Resume = lazy(() => import("./components/Resume/Resume"));
const ResumeEmployer = lazy(() => import("./components/Resume/ResumeEmployer"));
const ApplicationPage = lazy(() =>
  import("./components/ApplicationPage/ApplicationPage")
);
const renderLoader = () => (
  <Flex justifyContent="center" alignItems="center" height="100vh" bg="#000">
    <Spinner size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" />
  </Flex>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
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
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume/:id" element={<ResumeEmployer />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/apply/:id/:title" element={<ApplicationPage />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
