import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import "./App.css"; 
import Footer from "./Footer";
import Courses from "./Course";
import Registration from "./Registration";
import RegistrationData from "./RegistrationData";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/RegistrationData" element={<RegistrationData />} /> {/* Added Registration Route */}
          </Routes>
        </div>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
