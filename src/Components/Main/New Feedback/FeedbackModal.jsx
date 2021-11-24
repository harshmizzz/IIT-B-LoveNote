import React from "react";
import "./FeedbackModal.css";
import phone from "../../../Images/Phone.png";

function FeedbackModal() {
  return (
    <div className="FeedbackModal">
      <div className="FeedbackModalItems">
        <p className="FeedbackModalHeading">High five! You are in</p>
        <p className="FeedbackModalText">
        Thank you for registering for our feedback, we shall get in touch with you shortly
        </p>
        <img className="FeedbackModalImg" src={phone} alt="phone" />
      </div>
    </div>
  )
}
export default FeedbackModal;
