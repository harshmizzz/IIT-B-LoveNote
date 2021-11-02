import React from "react";
import "./Footer2.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Facebook from "@material-ui/icons/Facebook";
import { Instagram } from "@material-ui/icons";
function Footer2() {
  const notify = () =>
    toast("Email Copied to Clipboard", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="Footer2">
      <ToastContainer />
      <div className="Footer2Top">
        <Link
          onClick={() => {
            window.location = "/communityguidelines";
          }}
        >
          <div>Community Guidelines</div>
        </Link>
        <Link
          onClick={() => {
            window.location = "/faqs";
          }}
        >
          <div>FAQs</div>
        </Link>
        <Link
          onClick={() => {
            window.location = "/t&c";
          }}
        >
          <div>Terms and Conditions</div>
        </Link>
        <Link
          onClick={() => {
            window.location = "/privacy&policy";
          }}
        >
          <div>Privacy Policy</div>
        </Link>
        <Link
          onClick={() => {
            navigator.clipboard.writeText("social@lovenote.co.in");
            notify();
          }}
        >
          <div>Contact Us</div>
        </Link>
      </div>
      <div className="Footer2Bottom">
        <Link>
          <Facebook />
        </Link>
        <Link>
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

export default Footer2;
