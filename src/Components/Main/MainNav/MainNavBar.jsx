import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./MainNavBar.css";
function MainNavBar() {
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
          <p>Name</p>
          <div className="MainNavLine"></div>
        </div>
      </div>
    </div>
  );
}

export default MainNavBar;
