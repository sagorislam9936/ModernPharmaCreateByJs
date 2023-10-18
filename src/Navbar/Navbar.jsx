import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <section className="navContainar containar">
        <div>
          <h1 className="Pharma">M. PharmaBD</h1>
        </div>

        <nav className="navArea">
          <ul>
            <li>
              <a href="#">
                <span className="span">Home</span>
              </a>
            </li>

            <li>
              <a href="#">Products</a>
            </li>

            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Singup</a>
            </li>
          </ul>
        </nav>
        <i className="fa-solid fa-bars"></i>
      </section>
    </div>
  );
};

export default Navbar;
