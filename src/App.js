import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserData from "./Components/Main/UserData/UserData";
import VerificationPage from "./Components/VerificationPage/VerificationPage";
import Home from "./Pages/Home/Home";
import { createBrowserHistory } from "history";
import MainPage from "./Pages/MainPage/MainPage";
import SignUp from "./Pages/SignUp/SignUp";
import { Provider, useDispatch } from "react-redux";
import { store } from "./Components/StoreFeatures/Store";
import { useEffect } from "react";
import { auth } from "./Components/StoreFeatures/firebase";
import { login, logout } from "./Components/StoreFeatures/userSlice";

const App = () => {
  const dispatch = useDispatch();
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

  return (
    <Provider store={store}>
      <Router history={appHistory}>
        <div className="App">
          <Switch>
            <Route path="/SignUp" component={SignUp} exact />
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/" component={Home} exact />
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
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
