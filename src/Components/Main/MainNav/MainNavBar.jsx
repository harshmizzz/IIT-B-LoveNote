import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./MainNavBar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../StoreFeatures/userSlice";
import { auth } from "../../StoreFeatures/firebase";
function MainNavBar() {
  const user = useSelector(selectUser);
  return (
    <div className="MainNavBar">
      <a href="/">
        <p>Home</p>
      </a>
      <a href="/">
        <p>About</p>
      </a>
      <a href="/">
        <p>Meet Us</p>
      </a>
      <div>
        <AccountCircleOutlinedIcon />
        <div>
          <p>{auth.currentUser ? auth.currentUser.displayName : ""}</p>
          <div className="MainNavLine"></div>
        </div>
      </div>
    </div>
  );
}

export default MainNavBar;
