import React from "react";
import "./VerificationModal.css";
function VerificationModal({ progress, open, onclose }) {
  if (!open) return null;
  return (
    <>
      <div className="VerificationModalWrapper" />
      <div className="VerificationModal">
        <div className="VerificationModalContent">
          <p className="VerificationModalHeading">Thank you!</p>
          <p>
            We will get back to you after verification! You would then explore
            amazing and authentic people and be able to match with them
          </p>
          <p>Note: This might take few days, thanks for your patience</p>
        </div>
        <div className="VerificationButtonContainer">
          <button
            onClick={() => {
              navigator.clipboard.writeText("Copy this text to clipboard");
            }}
          >
            Invite your friends
          </button>
          <button
            onClick={
              progress === 100
                ? () => (window.location = "/main")
                : () => alert("Uploading Files Wait for few seconds")
            }
          >
            Done
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export default VerificationModal;
