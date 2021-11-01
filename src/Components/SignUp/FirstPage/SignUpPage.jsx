import React from "react";
import "./SignUpPage.css";
import Heart from "../../../Images/SignUp/We Are Women Love.png";
import Flower from "../../../Images/SignUp/Hands Flower.png";
import eye from "../../../Images/SignUp/eye.png";
import google from "../../../Images/SignUp/google.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, db } from "../../StoreFeatures/firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../StoreFeatures/userSlice";
function SignUpPage() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onSubmit = async (data) => {
    try {
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      auth.onAuthStateChanged((user) => {
        firebase.analytics().logEvent("User Signed Up Via Email");
        if (user) {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              name: user.displayName,
            })
          );
          history.push("/profile");
        }
      });
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
      })
      .catch((error) => {
        console.log(error.message);
      });
    auth.onAuthStateChanged((user) => {
      firebase.analytics().logEvent("User Signed Up Via Google");

      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            name: user.displayName,
          })
        );
        localStorage.setItem("email", user.email);
        window.location = "/profile";
      }
    });
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="SignUpContainer">
      <div className="SignUpFirstPage">
        <img src={Heart} alt="heart" className="signUpHeart" />
        <div className="SignUpForm">
          <div className="SignUpHeadingContainer">
            <h3 className="SignUpFormHeading">Let's get you started!</h3>
            <p className="SignUpSmallHeading">Sign Up</p>
          </div>
          <form className="SignUpFormBox" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Fill in your email"
            />
            <div className="SignUpLines"></div>

            <ErrorMessage
              errors={errors}
              name="email"
              as="p"
              className="SignUpEmailError"
            />
            <div className="signUpPassword">
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
                placeholder="Create a password"
              />
              <img onClick={togglePasswordVisiblity} alt="eye" src={eye} />
            </div>
            <div className="SignUpLines"></div>
            <ErrorMessage
              errors={errors}
              name="password"
              as="p"
              className="SignUpEmailError"
            />
            <input type="submit" value="Sign Up" />
          </form>
          <div className="SignUpFormLineAlreadyLine"></div>
          <div className="SignUpFormAlreadyAccount">
            <div className="left">Already have an account?</div>
            <div className="right">
              <Link to="/login">Log In</Link>{" "}
            </div>
          </div>
          <div onClick={signInWithGoogle} className="SignUpLoginButton">
            <img src={google} alt="google" />
            <p>Sign Up with Google</p>
          </div>
        </div>
        <img src={Flower} alt="Flower" className="signUpFlower" />
      </div>
    </div>
  );
}
export default SignUpPage;
