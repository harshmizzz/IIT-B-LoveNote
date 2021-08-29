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
import { login, selectUser } from "../../Components/StoreFeatures/userSlice";
import { useState } from "react";
function MainPage() {
  const user = useSelector(selectUser);
  // const isVerified = localStorage.getItem("isVerified");
  const [data, setdata] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const response = db.collection("users").doc(user.uid);
        response
          .get()
          .then((doc) => {
            if (doc.exists) {
              setdata(doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        console.log("not signed in");
      }
    });
  }, []);
  return (
    <div className="MainPage">
      <MainNavBar />
      <div className="MainPageContainer">
        <div className="MainPageHeading">
          <div className="MainPageHeadingLeft">
            {console.log(data)}
            <h3>Hi Aparna! Welcome Back</h3>
            <p>Let’s explore and find someone awesome for you</p>
          </div>
          <div className="MainPageHeadingRight">
            <Link to="/userprofile">
              <p>Go to my profile </p> <DoubleArrowIcon fontSize="small" />
            </Link>
          </div>
        </div>
        <div className="MainPageItems">
          <div className="MainPageVerificationBox">
            {console.log(data.isVerified)}

            {data.isVerified ===false ? <MainVerification /> : <Verified />}
          </div>
          <div className="MainPageProfileBox">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
