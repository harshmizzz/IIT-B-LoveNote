import React from "react";
import "./MainVerification.css";
import Abstract from "../../../Images/Main/Città Abstract.png";
import Standing from "../../../Images/Main/Città Standing.png";
import firebase from "firebase";
import { useHistory } from "react-router";
function MainVerification() {
  const history = useHistory();
  const verify = () => {
    firebase.analytics().logEvent("User Visited Verification Page");
    history.push("/verify");
  };
  return (
    <div className="MainVerification">
      <div>
        <p>
          LoveNote is a safe place to explore! Thus we recommend verified users
          only. Authentication would open more opportunities for you, we request
          you to verify yourself
        </p>
      </div>
      <div className="MainPageVerifyButton" onClick={verify}>
        Verify Yourself
      </div>
      <div className="MainPageVerifyImages">
        <img className="VerificationAbstract" src={Abstract} alt="abstract" />
        <img className="VerificationStanding" src={Standing} alt="standing" />
      </div>
    </div>
  );
}

export default MainVerification;
