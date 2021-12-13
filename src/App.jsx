import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Navbar from "../src/components/Navbar/Navbar";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Signup from '../src/components/Signup/Signup';
import Profile from './pages/Profile';
import Signin from "../src/components/Signin/Signin";
import ForgotPassword from '../src/components/Signin/ForgotPassword/ForgotPassword';
import FAQ from './pages/FAQ.jsx';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<FAQ />}/>
      </Routes>
    </Router>
  );
}

export default App;