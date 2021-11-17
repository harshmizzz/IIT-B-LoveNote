import React from "react";
import "./AppModal.css";
import phone from "../../../Images/Phone.png";
function AppModal() {
  return (
    <div className="AppModal">
      <div className="AppModalItems">
        <p className="AppModalHeading">Your matches are waiting!</p>
        <p className="AppModalText">
          ...And your forever story awaits you only on LoveNote
        </p>
        {/* <div className="AppModalButton">Download LoveNote</div> */}
        <div className="AppModalButton">Want to participate</div>
        <img className="AppModalImg" src={phone} alt="phone" />
      </div>
    </div>
  );
}

export default AppModal;
