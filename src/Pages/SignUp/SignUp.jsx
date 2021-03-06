import React, { useEffect } from "react";
import SignUpPage from "../../Components/SignUp/FirstPage/SignUpPage";
import ProgressBar from "../../Components/SignUp/Progress/ProgressBar";
import SignUPSecond from "../../Components/SignUp/SecondPage/SignUPSecond";
import SignUPNav from "../../Components/SignUp/SignUpNav/SignUPNav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import "./SignUp.css";
import Media from "react-media";
import firebase from "firebase";
import SignUpThird from "../../Components/SignUp/ThirdPage/SignUpThird";
import SignUpFourth from "../../Components/SignUp/FourthPage/SignUpFourth";
import LoginPage from "../../Components/SignUp/Loginpage/LoginPage";
import HamburgerBox2 from "../../Components/SignUp/SignUpNav/HamburgerBox2";
import MobileProgressBar from "../../Components/SignUp/Progress/MobileProgressBar";
import { useSelector } from "react-redux";
import { selectUser } from "../../Components/StoreFeatures/userSlice";
const SignUp = () => {
  return (
    <Router>
      <div>
        <Media query={{ maxWidth: 800 }}>
          {(matches) => (matches ? <HamburgerBox2 /> : <SignUPNav />)}
        </Media>
        {firebase.analytics().logEvent("User Visited Sign Up Page")}
        <div className="SignUpBody">
          <div className="SignUpHeading">
            <div className="signUpBig">Sign Up</div>
            <div className="signUpsmall">
              All your information can be edited later
            </div>
            <Media query={{ maxWidth: 800 }}>
              {(matches) => (matches ? <MobileProgressBar /> : "")}
            </Media>
          </div>
          <div className="SignUpBox">
            <Media query={{ maxWidth: 800 }}>
              {(matches) => (matches ? "" : <ProgressBar />)}
            </Media>

            <Switch>
              <div className="SignUpContainer">
                <Route path="/SignUp" exact>
                  <SignUpPage />
                </Route>
                <Route component={SignUPSecond} path="/Profile" exact />
                <Route component={SignUpThird} path="/Preferences" exact />
                <Route component={SignUpFourth} path="/Feedback" exact />
                <Route component={LoginPage} path="/Login" exact />
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default withRouter(SignUp);
