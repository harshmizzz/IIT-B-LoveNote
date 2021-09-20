import React from "react";
import "./Verified.css";
import Hands from "../../../Images/Main/Hands Grip.png";
function Verified() {
  return (
    <div className="Verified">
      <div className="VerifiedItems">
        <p className="VerifiedHeading">Thank you for verifying!</p>
        <p className="VerifiedText">
          Sweet! We will get back to you after verification, where we personally
          validate each profile. We do this to provide you secure and real
          people, so stay put and we would get back to you with your
          verification result. See you soon!
        </p>
      </div>
      <div className="VerifiedImage">
        <img src={Hands} alt="hand" />
      </div>
    </div>
  );
}

export default Verified;
