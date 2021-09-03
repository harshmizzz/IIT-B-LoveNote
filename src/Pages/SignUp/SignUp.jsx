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
} from "react-router-dom";
import "./SignUp.css";
import Media from "react-media";
import SignUpThird from "../../Components/SignUp/ThirdPage/SignUpThird";
import SignUpFourth from "../../Components/SignUp/FourthPage/SignUpFourth";
import LoginPage from "../../Components/SignUp/Loginpage/LoginPage";
import HamburgerBox2 from "../../Components/SignUp/SignUpNav/HamburgerBox2";
import MobileProgressBar from "../../Components/SignUp/Progress/MobileProgressBar";
const SignUp = () => {
  return (
    <Router>
      <div>
        <Media query={{ maxWidth: 800 }}>
          {(matches) => (matches ? <HamburgerBox2 /> : <SignUPNav />)}
        </Media>

        {/* <SignUPNav /> */}
        <div className="SignUpBody">
          <div className="SignUpHeading">
            <div className="signUpBig">Sign Up</div>
            <div className="signUpsmall">
              All your information can be edited later
            </div>
          </div>
          <div className="SignUpBox">
            <Media query={{ maxWidth: 800 }}>
              {(matches) => (matches ? <MobileProgressBar /> : <ProgressBar />)}
            </Media>

            <Switch>
              <div className="SignUpContainer">
                <Route component={SignUpPage} path="/SignUp" exact />
                <Route component={SignUPSecond} path="/profile" exact />
                <Route component={SignUpThird} path="/preferences" exact />
                <Route component={SignUpFourth} path="/feedback" exact />
                <Route component={LoginPage} path="/login" exact />
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default withRouter(SignUp);
