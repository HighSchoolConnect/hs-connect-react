import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
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
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const PageRoutes = lazy(() => import("./PageRoutes"));
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
        <PageRoutes />
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
