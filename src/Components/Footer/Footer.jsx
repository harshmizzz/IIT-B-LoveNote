import React from "react";
import "./Footer.css";
import { Link, useHistory } from "react-router-dom";
import FooterIllustration from "../../Images/BirthLoveNote/FooterIllustration.png";
const Excited = () => {
  const history = useHistory();
  return (
    <>
      <div className="excitedBody">
        <div className="excitedCover">
          <div className="footerTitle">
            <img className="footerImg" src={FooterIllustration} alt="" />
            <h2 className="excitedHeading excitedText">
              <strong>EXCITED? SO ARE WE!</strong>
            </h2>
          </div>

          <p className="excitedText">Cant't wait to have you</p>
          <button
            // onClick={() => {
            //   history.push("/SignUp");
            // }}
            className="excitedButton"
          >
            <Link to="/SignUp" target="_blank">
              Begin my forever story
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Excited;
