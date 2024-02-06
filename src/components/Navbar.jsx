import React from "react";
import logo from "../images/logo.png";
import hamberger from "../images/hamberger.png"

import './styles.css'

export const Navbar = () => {
  return (
    <div>
      <section>
        <div className="container">
          <navbar className="navbar-flex">
            <img src={hamberger} alt="hamberger" className="hamberger"/>
            <img src={logo} alt="logo" className="logo" />
            <button type="button" className="navbar-btn">
              DO I QUALIFY?
            </button>
          </navbar>
        </div>
      </section>
    </div>
  );
};
