import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/feed">Feed</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
