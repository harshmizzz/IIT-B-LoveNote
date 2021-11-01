import React, { useEffect } from "react";
import "./LoginPage.css";
import Heart2 from "../../../Images/SignUp/Hands Heart.png";
import Flower2 from "../../../Images/SignUp/Hands Flower-1.png";
import eye from "../../../Images/SignUp/eye.png";
import google from "../../../Images/SignUp/google.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { auth, db } from "../../StoreFeatures/firebase";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { login, selectUser } from "../../StoreFeatures/userSlice";
import { useSelector } from "react-redux";
function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  const sendPasswordResetEmail = async () => {
    try {
      await auth.sendPasswordResetEmail(window.prompt("Enter Email"));
      window.alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    await auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        var newUser = result.additionalUserInfo.isNewUser;
        console.log(result.additionalUserInfo.isNewUser);
        auth.onAuthStateChanged((user) => {
          firebase.analytics().logEvent("User Logged in Via Google");
          if (newUser) {
            window.location = "/profile";
          } else if (user) {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                name: user.displayName,
              })
            );
            localStorage.setItem("token", user.uid);
            window.location = "/main";
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("success");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            name: user.displayName,
          })
        );
        localStorage.setItem("token", user.uid);
      firebase.analytics().logEvent("User Logged in Via Email");
        window.location = "/main";
      }
    });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="LoginContainer">
      <div className="LoginFirstPage">
        <img src={Flower2} alt="heart" className="LoginFlower" />
        <div className="LoginForm">
          <div className="LoginHeadingContainer">
            <h3 className="LoginFormHeading">Glad to see you back!</h3>
            <p className="LoginSmallHeading">Log in</p>
          </div>
          <form className="LoginFormBox" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("email", {
                required: "Please follow the format - abc@xyz.com",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              autoComplete="off"
              placeholder="Email id"
            />
            <div className="LoginLines"></div>

            <ErrorMessage
              errors={errors}
              name="email"
              as="p"
              className="LoginEmailError"
            />
            <div className="LoginPassword">
              <input
                type={passwordShown ? "text" : "password"}
                autoComplete="off"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Minimum length is 8",
                  },
                })}
                placeholder="Password"
              />
              <img onClick={togglePasswordVisiblity} alt="eye" src={eye} />
            </div>
            <div className="LoginLines"></div>
            <div
              className="LoginForgotPassword"
              onClick={sendPasswordResetEmail}
            >
              <p>Forgot password?</p>
            </div>
            <ErrorMessage
              errors={errors}
              name="password"
              as="p"
              className="LoginEmailError"
            />

            <input type="submit" value="Log In" />
          </form>
          <div className="LoginFormLineAlreadyLine"></div>
          <div className="LoginFormAlreadyAccount">
            <div className="left">Don't have an account?</div>
            <div className="right">
              <Link to="/SignUp">Sign Up</Link>
            </div>
          </div>
          <div onClick={signInWithGoogle} className="LoginLoginButton">
            <img src={google} alt="google" />
            <p>Log in with Google</p>
          </div>
        </div>
        <img src={Heart2} alt="Flower" className="LoginHeart" />
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
