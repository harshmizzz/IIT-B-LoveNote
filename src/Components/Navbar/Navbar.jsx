import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  
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
        <div className="wrap">
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
                <Link>Join Now</Link>
              </li>
            </ul>
          </nav>
          <section className="homeBg">
            <div class="centered">
              <p>
                <span className="love">Love</span>
                <span className="note">
                  <strong>Note</strong>
                </span>
              </p>
              <p className="tagLine">BEGIN A FOREVER STORY</p>
            </div>
            <div className="bottomSec">
              <button className="beginButton">
                <Link>
                  <strong>Begin my journey</strong>
                </Link>
              </button>
              <p>
                Find your companion.
                <span>
                  <br /> 
                </span>
                According to your own style 
              </p>
              {/* <p className="container" ref={container}></p> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
