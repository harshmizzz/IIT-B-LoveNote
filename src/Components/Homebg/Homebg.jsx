import React from "react";
import { Link } from "react-router-dom";
import "./Homebg.css";
const Homebg = ({ hideBG }) => {
  return (
    <div id="Home">
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
            <Link to="/SignUp">
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
  );
};

export default Homebg;
