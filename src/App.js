import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { lazy, Suspense } from "react";
import UserData from "./Components/Main/UserData/UserData";
import VerificationPage from "./Components/VerificationPage/VerificationPage";
import Home from "./Pages/Home/Home";
import { createBrowserHistory } from "history";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Components/StoreFeatures/Store";
import { useEffect } from "react";
import { auth, db } from "./Components/StoreFeatures/firebase";
import {
  login,
  logout,
  selectUser,
} from "./Components/StoreFeatures/userSlice";
import Documents from "./Pages/GuideLines/Documents.jsx";
import firebase from "firebase";
import smartlookClient from "smartlook-client";
import useScript from "./Hooks/useScript";
import FeedbackPage from "./Pages/FeedbackPage";
import ReactPixel from "react-facebook-pixel";
import { useState } from "react";
import Feedback2 from "./Components/Main/New Feedback/Feedback2";
import { Helmet } from "react-helmet";
const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));
const App = () => {
  const dispatch = useDispatch();

  const appHistory = createBrowserHistory({ forceRefresh: true });
  useScript("https://rec.smartlook.com/recorder.js");

  ReactPixel.init("1106251906816500");
  ReactPixel.pageView();
  smartlookClient.init("40c0a7c40bdd5c58bafeac8683e3d3e650978197");
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  const token = localStorage.getItem("token");
  return (
    <Provider store={store}>
      <Router history={appHistory}>
        <div className="App">
          <Helmet>
            <meta
              name="facebook-domain-verification"
              content="locfhkrofr0my3n52ruu13xmtrrp0z"
            />
          </Helmet>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" exact>
              <Home />
            </Route>
            <Suspense
              fallback={
                <div className="LoadingScreen">
                  <CircularProgress color="disabled" />
                  <p>Loading...</p>
                </div>
              }
            >
              <Route path="/SignUp" exact>
                {!token ? <SignUp /> : <Redirect to="/Dashboard" />}
              </Route>
              <Route path="/Profile" exact>
                <SignUp />
              </Route>
              <Route path="/Preferences" exact>
                <SignUp />
              </Route>
              <Route path="/Feedback" exact>
                <SignUp />
              </Route>
              <Route path="/Login" exact>
                <SignUp />
              </Route>
              <Route path="/Dashboard" exact>
                <MainPage />
              </Route>
              <Route path="/MyProfile" exact>
                <UserData />
              </Route>
              <Route path="/Verify" exact>
                <VerificationPage />
              </Route>
              <Route path="/UserFeedback" component={Feedback2} exact />
              <Route path="/communityguidelines" component={Documents} exact />
              <Route path="/t&c" component={Documents} exact />
              <Route path="/faqs" component={Documents} exact />
              <Route path="/privacy&policy" component={Documents} exact />
            </Suspense>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
