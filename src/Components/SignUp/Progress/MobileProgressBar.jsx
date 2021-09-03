import React from "react";
import "./ProgressBar.css";
import { withRouter } from "react-router-dom";
function MobileProgressBar({ location: { pathname } }) {
  const isFirstStep = pathname === "/SignUp";
  const isSecondStep = pathname === "/profile";
  const isThirdStep = pathname === "/preferences";
  const isFourthStep = pathname === "/feedback";
  return <div className="MobileProgress">
      
  </div>;
}

export default withRouter(MobileProgressBar);
