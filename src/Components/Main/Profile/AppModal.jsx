import React from "react";
import "./AppModal.css";
import phone from "../../../Images/Phone.png";
function AppModal() {
  const onsubmit = () => {
    window.location = "/UserFeedback"
  }
  return (
    <div className="AppModal">
      <div className="AppModalItems">
        <p className="AppModalHeading">Let’s grow together :)</p>
        <p className="AppModalText">
        We would love for you to join our community! Contribute your ideas and help us grow together  
        </p>
        {/* <div className="AppModalButton">Download LoveNote</div> */}
        <button onClick={onsubmit} type="submit"  className="AppModalButton">Want to participate</button>
        <img className="AppModalImg" src={phone} alt="phone" />
      </div>
    </div>
  );
}

export default AppModal;
