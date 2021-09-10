import React from "react";
import "./MobileProgressBar.css";
import { withRouter } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";
function MobileProgressBar({ location: { pathname } }) {
  const isFirstStep = pathname === "/SignUp";
  const isSecondStep = pathname === "/profile";
  const isThirdStep = pathname === "/preferences";
  const isFourthStep = pathname === "/feedback";
  return (
    <div className="MobileProgress">
      <div
        className={
          isFirstStep ? "MobileProgressActive" : "MobileProgressNotActive"
        }
      >
        <p>
          {isSecondStep || isThirdStep || isFourthStep ? (
            <DoneIcon fontSize="large" />
          ) : (
            "1"
          )}
        </p>
      </div>
      <div
        className={
          isSecondStep ? "MobileProgressActive" : "MobileProgressNotActive"
        }
      >
        <p>
          {isThirdStep || isFourthStep ? <DoneIcon fontSize="large" /> : "2"}
        </p>
      </div>
      <div
        className={
          isThirdStep ? "MobileProgressActive" : "MobileProgressNotActive"
        }
      >
        <p>{isFourthStep ? <DoneIcon fontSize="large" /> : "3"}</p>
      </div>
      <div
        className={
          isFourthStep ? "MobileProgressActive" : "MobileProgressNotActive"
        }
      >
        <p>4</p>
      </div>
    </div>
  );
}

export default withRouter(MobileProgressBar);
