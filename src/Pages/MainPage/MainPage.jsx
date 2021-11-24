import React, { useEffect } from "react";
import MainNavBar from "../../Components/Main/MainNav/MainNavBar";
import "./MainPage.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import MainVerification from "../../Components/Main/Verification/MainVerification";
import Verified from "../../Components/Main/Verification/Verified";
import Profile from "../../Components/Main/Profile/Profile";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth, db } from "../../Components/StoreFeatures/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectUser,
} from "../../Components/StoreFeatures/userSlice";
import { useState } from "react";
import HamburgerBox2 from "../../Components/SignUp/SignUpNav/HamburgerBox2";
import Media from "react-media";
import AppModal from "../../Components/Main/Profile/AppModal";
import { CircularProgress } from "@material-ui/core";
import FeedbackModal from "../../Components/Main/New Feedback/FeedbackModal";
import FeedbackPage from "../FeedbackPage";
function MainPage() {
  const user = useSelector(selectUser);
  const [data, setdata] = useState("");
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.analytics().logEvent("User On MainPage");

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const response = db
          .collection("users")
          .doc(user.uid)
          .collection("UserFormInputs")
          .doc("userDetails");
        response
          .get()
          .then((doc) => {
            if (doc.exists) {
              setdata(doc.data());
            } else {
              dispatch(logout());
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          })
          .finally(setloading(false));
      } else {
        console.log("not signed in");
      }
    });
  }, []);

  if (loading)
    return (
      <div className="LoadingScreen">
        <CircularProgress color="disabled" />
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="MainPage">
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox2 /> : <MainNavBar />)}
      </Media>
      {firebase.analytics().logEvent("User Visited Main Profiles Page")}
      <div className="MainPageContainer">
        <div className="MainPageHeading">
          <div className="MainPageHeadingLeft">
            {console.log(data)}
            <h3>Hi {auth.currentUser.displayName}! Welcome Back</h3>
            <p>Let’s explore and find someone awesome for you</p>
          </div>
          <div className="MainPageHeadingRight">
            <Link to="/MyProfile">
              <p>Go to my profile </p> <DoubleArrowIcon fontSize="small" />
            </Link>
          </div>
        </div>
        <div className="MainPageItems">
          <div className="MainPageVerificationBox">
            {data.isVerified === true ? <Verified /> : <MainVerification />}
          </div>
          <div className="MainPageProfileBox">
            {data.isVerified === true ?  <FeedbackPage /> : <Profile />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
