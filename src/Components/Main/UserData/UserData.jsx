import React, { useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { CircularProgress } from "@material-ui/core";
import MainNavBar from "../MainNav/MainNavBar";
import "./UserData.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { auth, db } from "../../StoreFeatures/firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../StoreFeatures/userSlice";
import firebase from "firebase";
import { useState } from "react";
import PasswordChangeModal from "./PasswordChangeModal";
import Media from "react-media";
import HamburgerBox2 from "../../SignUp/SignUpNav/HamburgerBox2";
import ProfileEdit from "../EditData/ProfileEdit";
import PreferencesEdit from "../EditData/PreferencesEdit";
function UserData() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const [profile, setprofile] = useState(false);
  const [preferences, setpreferences] = useState(false);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobile1, setmobile1] = useState(true);
  const user = auth.currentUser;
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
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        console.log("not signed in");
      }
    });
  }, []);
  const sendPasswordResetEmail = async () => {
    try {
      await auth.sendPasswordResetEmail(user.email);
      window.alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  //signout
  const signout = () => {
    auth.signOut().then(() => {
      auth.signOut().then(() => dispatch(logout()));
    });
    localStorage.removeItem("token");
    window.close();
  };

  if (loading)
    return (
      <div className="LoadingScreen">
        <CircularProgress color="disabled" />
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="UserData">
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox2 /> : <MainNavBar />)}
      </Media>
      <div className="UserDataContainer">
        <div className="UserDataHeading">
          <div className="UserDataHeadingLeft">
            <h3>Hi {data.Fullname}! Welcome Back</h3>
            <p>Let’s explore and find someone awesome for you</p>
          </div>
          <div className="UserDataHeadingRight">
            <Link to="/main">
              <p>Explore</p> <DoubleArrowIcon fontSize="small" />
            </Link>
          </div>
        </div>
        <div className="UserDataMobileNav">
          <div
            className={
              mobile1 ? "UserDataMobileNavOpen" : "UserDataMobileNavClose"
            }
          >
            <p
              onClick={() => {
                setmobile1(true);
              }}
            >
              Profile Information
            </p>
          </div>
          <div
            className={
              mobile1 === false
                ? "UserDataMobileNavOpen"
                : "UserDataMobileNavClose"
            }
          >
            <p
              onClick={() => {
                setmobile1(false);
              }}
            >
              Your Preferences
            </p>
          </div>
        </div>
        <div className={mobile1 ? "UserDataMobile" : "UserDataItems"}>
          <Media query={{ maxWidth: 800 }}>
            {(matches) =>
              matches ? (
                <>
                  <div className="UserDataLeft">
                    <div className="UserDataInformation">
                      <div className="UserDataInfoHeading">
                        <p>Profile information</p>
                        <div
                          onClick={() => {
                            setprofile(true);
                          }}
                        >
                          <EditOutlinedIcon fontSize="small" />
                          <ProfileEdit
                            open={profile}
                            onclose={() => setprofile(false)}
                          />
                        </div>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Name</p>
                        <p className="UserDataValue">{data.Fullname}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Age</p>
                        <p className="UserDataValue">{data.Age}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Gender</p>
                        <p className="UserDataValue">{data.Gender}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Height</p>
                        <p className="UserDataValue">{data.HeightFt} ft</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Location</p>
                        <p className="UserDataValue">{data.State}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Religion</p>
                        <p className="UserDataValue">{data.Religion}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Languages you speak</p>
                        <div className="UserDataValueLanguage">
                          {data.Languages.map((n) => (
                            <p>{n}</p>
                          ))}
                        </div>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Occupation</p>
                        <p className="UserDataValue">{data.Profession}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Current Status</p>
                        <p className="UserDataValue">{data.Relationship}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Email id</p>
                        <p className="UserDataValue">{user.email}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Password</p>
                        <p className="UserDataValue">***********</p>
                      </div>

                      <div className="UserDataInfo">
                        <p className="UserDataTitle"></p>
                        <div className="UserDataValueButton">
                          <p onClick={sendPasswordResetEmail}>Forgot</p>
                          <p
                            onClick={() => {
                              setisOpen(true);
                            }}
                          >
                            Change
                          </p>
                          <PasswordChangeModal
                            open={isOpen}
                            onclose={() => setisOpen(false)}
                          />
                        </div>
                      </div>

                      <div className="UserDataLine"></div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Diet</p>
                        <p className="UserDataValue">{data.Diet}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Exercise</p>
                        <p className="UserDataValue">{data.Exercise}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Smoke</p>
                        <p className="UserDataValue">{data.IsSmoke}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Drink</p>
                        <p className="UserDataValue">{data.IsDrink}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Want Children?</p>
                        <p className="UserDataValue">{data.WantChildren}</p>
                      </div>
                    </div>
                  </div>
                  <div className="UserDataRight">
                    <div className="UserDataPreferences">
                      <div className="UserDataInfoHeading">
                        <p>Your preferences</p>
                        <div onClick={() => setpreferences(true)}>
                          <EditOutlinedIcon fontSize="small" />
                          <PreferencesEdit
                            open={preferences}
                            onclose={() => setpreferences(false)}
                            age0={data.Preferences.PAge[0]}
                            age1={data.Preferences.PAge[1]}
                          />
                        </div>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Age Range</p>
                        <p className="UserDataValue">
                          {data.Preferences.PAge[0]}-{data.Preferences.PAge[1]}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Preferred gender</p>
                        <p className="UserDataValue">
                          {data.Preferences.PGender}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Location</p>
                        <p className="UserDataValue">
                          {data.Preferences.PState}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Religion</p>
                        <p className="UserDataValue">
                          {data.Preferences.PReligion}
                        </p>
                      </div>
                      <div className="UserDataLine"></div>

                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Diet</p>
                        <p className="UserDataValue">
                          {data.Preferences.PDiet}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Exercise</p>
                        <p className="UserDataValue">
                          {data.Preferences.PExercise}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Smoke</p>
                        <p className="UserDataValue">
                          {data.Preferences.PIsSmoke}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Drink</p>
                        <p className="UserDataValue">
                          {data.Preferences.PIsDrink}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Want Children?</p>
                        <p className="UserDataValue">
                          {data.Preferences.PWantChildren}
                        </p>
                      </div>
                    </div>
                    <div onClick={signout} className="UserDataLogOut">
                      <p>Log Out</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="UserDataLeft">
                    <div className="UserDataInformation">
                      <div className="UserDataInfoHeading">
                        <p>Profile information</p>
                        <div onClick={() => setprofile(true)}>
                          <EditOutlinedIcon fontSize="small" />
                          <ProfileEdit
                            open={profile}
                            onclose={() => setprofile(false)}
                          />
                        </div>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Name</p>
                        <p className="UserDataValue">{data.Fullname}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Age</p>
                        <p className="UserDataValue">{data.Age}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Gender</p>
                        <p className="UserDataValue">{data.Gender}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Height</p>
                        <p className="UserDataValue">{data.HeightFt} ft</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Location</p>
                        <p className="UserDataValue">{data.State}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Religion</p>
                        <p className="UserDataValue">{data.Religion}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Languages you speak</p>
                        <div className="UserDataValueLanguage">
                          {data.Languages.map((n) => (
                            <p>{n}</p>
                          ))}
                        </div>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Occupation</p>
                        <p className="UserDataValue">{data.Profession}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Current Status</p>
                        <p className="UserDataValue">{data.Relationship}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Email id</p>
                        <p className="UserDataValue">{user.email}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Password</p>
                        <p className="UserDataValue">***********</p>
                      </div>

                      <div className="UserDataInfo">
                        <p className="UserDataTitle"></p>
                        <div className="UserDataValueButton">
                          <p onClick={sendPasswordResetEmail}>Forgot</p>
                          <p
                            onClick={() => {
                              setisOpen(true);
                            }}
                          >
                            Change
                          </p>
                          <PasswordChangeModal
                            open={isOpen}
                            onclose={() => setisOpen(false)}
                          />
                        </div>
                      </div>

                      <div className="UserDataLine"></div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Diet</p>
                        <p className="UserDataValue">{data.Diet}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Exercise</p>
                        <p className="UserDataValue">{data.Exercise}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Smoke</p>
                        <p className="UserDataValue">{data.IsSmoke}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Drink</p>
                        <p className="UserDataValue">{data.IsDrink}</p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitle">Want Children?</p>
                        <p className="UserDataValue">{data.WantChildren}</p>
                      </div>
                    </div>
                  </div>
                  <div className="UserDataRight">
                    <div className="UserDataPreferences">
                      <div className="UserDataInfoHeading">
                        <p>Your preferences</p>
                        <div onClick={() => setpreferences(true)}>
                          <EditOutlinedIcon fontSize="small" />
                          <PreferencesEdit
                            open={preferences}
                            onclose={() => setpreferences(false)}
                            age0={data.Preferences.PAge[0]}
                            age1={data.Preferences.PAge[1]}
                          />
                        </div>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Age Range</p>
                        <p className="UserDataValue">
                          {data.Preferences.PAge[0]} {"-"}
                          {data.Preferences.PAge[1]}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Preferred gender</p>
                        <p className="UserDataValue">
                          {data.Preferences.PGender}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Location</p>
                        <p className="UserDataValue">
                          {data.Preferences.PState}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Religion</p>
                        <p className="UserDataValue">
                          {data.Preferences.PReligion}
                        </p>
                      </div>
                      <div className="UserDataLine"></div>

                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Diet</p>
                        <p className="UserDataValue">
                          {data.Preferences.PDiet}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Exercise</p>
                        <p className="UserDataValue">
                          {data.Preferences.PExercise}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Smoke</p>
                        <p className="UserDataValue">
                          {data.Preferences.PIsSmoke}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Drink</p>
                        <p className="UserDataValue">
                          {data.Preferences.PIsDrink}
                        </p>
                      </div>
                      <div className="UserDataInfo">
                        <p className="UserDataTitleP">Want Children?</p>
                        <p className="UserDataValue">
                          {data.Preferences.PWantChildren}
                        </p>
                      </div>
                    </div>
                    <div onClick={signout} className="UserDataLogOut">
                      <p>Log Out</p>
                    </div>
                  </div>
                </>
              )
            }
          </Media>
        </div>
      </div>
    </div>
  );
}

export default UserData;
