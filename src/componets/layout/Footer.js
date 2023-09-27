import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-2 my-4 bg-black">
        <ul className="nav justify-content-center bg-black border-bottom pb-3 text-light mb-3">
          <li className="nav-item">
            <NavLink to="/Home" className="nav-link px-2 text-light">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link px-2 text-light">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Category" className="nav-link px-2 text-light">
              Category
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Privacy" className="nav-link px-2 text-light">
              Privacy
            </NavLink>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </>
  );
};

export default Footer;
