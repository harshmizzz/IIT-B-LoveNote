import React, { useState } from "react";
import Homebg from "../Homebg/Homebg";
import "./Hamburger.css";
import { Turn as Hamburger } from "hamburger-react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
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
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            className="active navItems"
            to="/"
          >
            <h3
              onClick={() => {
                history.push("/");
                setOpen(false);
              }}
            >
              Home
            </h3>
          </Link>
          <Link to="About" spy={true} smooth={true}>
            <h3
              onClick={() => {
                history.push("/");
                setOpen(false);
              }}
            >
              About
            </h3>
          </Link>
          <Link to="MeetUs" spy={true} smooth={true}>
            <h3
              onClick={() => {
                history.push("/");
                setOpen(false);
              }}
            >
              Meet Us
            </h3>
          </Link>

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
