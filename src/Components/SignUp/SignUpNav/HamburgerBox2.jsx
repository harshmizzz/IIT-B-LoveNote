import React, { useState } from "react";
import "../../Navbar/Hamburger.css";
import { Turn as Hamburger } from "hamburger-react";
import { useHistory } from "react-router-dom";
function HamburgerBox2() {
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
          <h3
            onClick={() => {
              history.push("/SignUp");
              setOpen(false);
            }}
          >
            <p>Join Now</p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HamburgerBox2;
