import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Homebg from "../Homebg/Homebg";
import { Link } from "react-router-dom";
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
            <div className="logo">Logo</div>
            <ul>
              <li>
                <Link className="active navItems" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navItems">About</Link>
              </li>
              <li>
                <Link className="navItems">Meet Us</Link>
              </li>
              <li className="joinNow">
                <Link to="/SignUp">Join Now</Link>
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
