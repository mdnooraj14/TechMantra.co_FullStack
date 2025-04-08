import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [cursor, setCursor] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleLeave = () => {
    setCursor((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <nav className="bg-transparent py-3 sticky-top shadow z-10">
      <div className="container d-flex justify-content-center">
        <ul
          className="position-relative d-flex gap-3 p-2 m-0 border border-dark rounded-pill bg-dark"
          style={{ listStyle: "none" }}
          onMouseLeave={handleLeave}
        >
          <Tab to="/home" label="Home" setCursor={setCursor} />
          <Tab to="/about" label="About" setCursor={setCursor} />
          <Tab to="/courses" label="Courses" setCursor={setCursor} />
          <Tab to="/registration" label="Register" setCursor={setCursor} />

          <motion.li
            animate={{ ...cursor }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="position-absolute bg-danger rounded-pill"
            style={{ height: "36px", top: 4, zIndex: 0 }}
          />
        </ul>
      </div>
    </nav>
  );
};

const Tab = ({ to, label, setCursor }) => {
  const ref = useRef(null);

  const handleEnter = () => {
    if (!ref.current) return;

    const { width, left } = ref.current.getBoundingClientRect();
    const parentLeft = ref.current.offsetParent.getBoundingClientRect().left;

    setCursor({
      left: left - parentLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleEnter}
      className="position-relative z-1 px-3 py-2 fw-semibold tab-hover"
    >
      <Link to={to} className="text-light text-decoration-none">
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
