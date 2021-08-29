import React from "react";
import { useHistory } from "react-router";
import "./VerificationModal.css";
function VerificationModal({ progress, open, onclose }) {
  const history = useHistory();
  if (!open) return null;
  return (
    <>
      <div onClick={onclose} className="VerificationModalWrapper" />
      <div className="VerificationModal">
        <div className="VerificationModalClose">
          <p onClick={onclose}>X</p>
        </div>
        <div className="VerificationModalContent">
          <h5>Thank you!</h5>
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
                : () => alert ("Uploading Files Wait for few seconds")
            }
          >
            Go Home
          </button> 
        </div>
      </div>
      ;
    </>
  );
}

export default VerificationModal;
