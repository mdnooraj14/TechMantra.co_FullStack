import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-0 fixed-bottom">
      <p className="mb-1">Your trusted platform for skill development.&copy; 2024 TechMantra. Created by Mohammed Zakir Nooraj</p>
      
      <div>
        <a href="TechMantra.html" className="mx-2 text-danger">.in</a> |
        <a href="TM about.html" className="mx-2 text-danger">X</a> |
        <a href="Courses.html" className="mx-2 text-danger">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
