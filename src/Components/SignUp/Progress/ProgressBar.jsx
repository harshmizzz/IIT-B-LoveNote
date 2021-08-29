import React from "react";
import "./ProgressBar.css";
import { withRouter } from "react-router-dom";
function ProgressBar({ location: { pathname } }) {
  const isFirstStep = pathname === "/SignUp";
  const isSecondStep = pathname === "/profile";
  const isThirdStep = pathname === "/preferences";
  const isFourthStep = pathname === "/feedback";
  return (
    <div className="SignUpProgress">
      <div
        className={`${
          isFirstStep
            ? "SignUpProgressItems SignUpActive"
            : "SignUpProgressItems"
        }`}
      >
        <div
          className={`${
            isSecondStep || isThirdStep || isFourthStep
              ? "ProgressTickCircle"
              : "ProgressCircle"
          }`}
        >
          <p
            className={`${
              isSecondStep || isThirdStep || isFourthStep
                ? "ProgressCircleTick"
                : "ProgressCircleText"
            }`}
          >
            {isSecondStep || isThirdStep || isFourthStep ? "✓" : "1"}
          </p>
        </div>
        <p className="ProgressText"> Sign Up </p>
      </div>
      <div
        className={`${
          isSecondStep
            ? "SignUpProgressItems SignUpActive"
            : "SignUpProgressItems"
        }`}
      >
        <div
          className={`${
            isThirdStep || isFourthStep
              ? "ProgressTickCircle"
              : "ProgressCircle"
          }`}
        >
          <p
            className={`${
              isThirdStep || isFourthStep
                ? "ProgressCircleTick"
                : "ProgressCircleText"
            }`}
          >
            {isThirdStep || isFourthStep ? "✓" : "2"}
          </p>
        </div>
        <p className="ProgressText">Profile</p>
      </div>
      <div
        className={`${
          isThirdStep
            ? "SignUpProgressItems SignUpActive"
            : "SignUpProgressItems"
        }`}
      >
        <div
          className={`${
            isFourthStep ? "ProgressTickCircle" : "ProgressCircle"
          }`}
        >
          <p
            className={`${
              isFourthStep ? "ProgressCircleTick" : "ProgressCircleText"
            }`}
          >
            {isFourthStep ? "✓" : "3"}
          </p>
        </div>
        <p className="ProgressText">Preferences</p>
      </div>
      <div
        className={`${
          isFourthStep
            ? "SignUpProgressItems SignUpActive"
            : "SignUpProgressItems"
        }`}
      >
        <div className="ProgressCircle">
          <p className="ProgressCircleText">4</p>
        </div>
        <p className="ProgressText">Feedback</p>
      </div>
    </div>
  );
}

export default withRouter(ProgressBar);
