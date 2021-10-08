import React, { useState } from "react";
import "../../Navbar/Hamburger.css";
import { Turn as Hamburger } from "hamburger-react";
import { useHistory } from "react-router-dom";
function HamburgerBox3() {
  const [isOpen, setOpen] = useState(false);
  let history = useHistory();
  return (
    <div>
      <div className="HamburgerIconHome">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <div className="hamburger">
        <div className={isOpen ? "hamburgerOpen" : "hamburgerItems"}>
          <h3
            onClick={() => {
              window.location = "/";
              setOpen(false);
            }}
          >
            Home
          </h3>
          <h3
            onClick={() => {
              window.location = "/";

              setOpen(false);
            }}
          >
            About
          </h3>
          <h3
            onClick={() => {
              window.location = "/";
              setOpen(false);
            }}
          >
            Meet Us
          </h3>
          <div className="JoinNowDisabled">
            <p>Join Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerBox3;
