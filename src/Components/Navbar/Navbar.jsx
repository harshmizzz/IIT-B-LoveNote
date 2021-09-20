import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Homebg from "../Homebg/Homebg";
import { Link } from "react-scroll";
import Logo from "../../Images/Logo.png";
import "./Navbar.css";
const Navbar = ({ hideBG }) => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Images/scroll-down-arrows.json"),
    });
  }, []);
  return (
    <>
      <div className="body">
        <div className="">
          <nav>
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="active navItems"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="About" spy={true} smooth={true} className="navItems">
                  About
                </Link>
              </li>
              <li>
                <Link to="MeetUs" spy={true} smooth={true} className="navItems">
                  Meet Us
                </Link>
              </li>
              <li className="joinNow">
                <Link
                  to="/SignUp"
                  onClick={() => {
                    window.open("/SignUp", "_blank");
                  }}
                >
                  Join Now
                </Link>
              </li>
            </ul>
          </nav>
          {!hideBG && <Homebg />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
