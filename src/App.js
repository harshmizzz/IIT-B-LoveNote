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
import { auth } from "./Components/StoreFeatures/firebase";
import {
  login,
  logout,
  selectUser,
} from "./Components/StoreFeatures/userSlice";
import Documents from "./Pages/GuideLines/Documents.jsx";
const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const appHistory = createBrowserHistory({ forceRefresh: true });
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
                {!token ? <SignUp /> : <Redirect to="/main" />}
              </Route>
              <Route path="/profile" exact>
                <SignUp />
              </Route>
              <Route path="/preferences" exact>
                <SignUp />
              </Route>
              <Route path="/feedback" exact>
                <SignUp />
              </Route>
              <Route path="/login" exact>
                <SignUp />
              </Route>
              <Route path="/main" exact>
                <MainPage />
              </Route>
              <Route path="/userprofile" exact>
                <UserData />
              </Route>
              <Route path="/verify" exact>
                <VerificationPage />
              </Route>
              <Route path="/communityguidelines" component={Documents} exact />
              <Route path="/faqs" component={Documents} exact />
              <Route path="/t&c" component={Documents} exact />
              <Route path="/privacy&policy" component={Documents} exact />
            </Suspense>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
