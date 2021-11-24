import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "../Components/StoreFeatures/firebase";
import { logout, selectUser } from "../Components/StoreFeatures/userSlice";
import Feedback2 from "../Components/Main/New Feedback/Feedback2";
import FeedbackModal from "../Components/Main/New Feedback/FeedbackModal";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import firebase from "firebase";
import AppModal from "../Components/Main/Profile/AppModal";
function FeedbackPage() {
  const user = useSelector(selectUser);
  const [data, setdata] = useState("");
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const response = db
          .collection("users")
          .doc(user.uid)
          .collection("UserFormInputs")
          .doc("userDetails");
        // const response = db
        //   .collection("users")
        //   .doc(user.uid)
        //   .collection("UserFormInputs")
        //   .doc("Feedback");
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
    <div>{data.isFeedback === true ? <FeedbackModal /> : <AppModal /> }
    </div>
  );
}

export default FeedbackPage;
