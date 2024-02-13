import React, { useState } from "react";
import logo from "../images/logo.png";
import hamberger from "../images/hamberger.png";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <section>
        <div className="container">
          <navbar className="navbar-flex">
            <img
              src={hamberger}
              alt="hamberger"
              className="hamberger"
              onClick={handleToggleClick}
            />
            <img src={logo} alt="logo" className="logo" />
            {/* {toggle && (
              <AiOutlineClose
                className="close-icon"
                onClick={handleToggleClick}
              />
            )} */}
            <button type="button" className="navbar-btn">
              DO I QUALIFY?
            </button>
          </navbar>
        </div>
      </section>
    </div>
  );
};
