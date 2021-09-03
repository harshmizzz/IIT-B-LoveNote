import React, { useState } from "react";
import Homebg from "../Homebg/Homebg";
import "./Hamburger.css";
import { Turn as Hamburger } from "hamburger-react";
import { useHistory } from "react-router-dom";
function HamburgerBox() {
  const [isOpen, setOpen] = useState(false);
  let history = useHistory();
  return (
    <div>
      <div className="HamburgerIconHome">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <Homebg />
      <div className="hamburger">
        <div className={isOpen ? "hamburgerOpen" : "hamburgerItems"}>
          <h3
            onClick={() => {
              history.push("/");
              setOpen(false);
            }}
          >
            Home
          </h3>
          <h3
            onClick={() => {
              history.push("/");
              setOpen(false);
            }}
          >
            About
          </h3>
          <h3
            onClick={() => {
              history.push("/");
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

export default HamburgerBox;
