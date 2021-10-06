import React from "react";
import "./Privacy.css";
import { privacy } from "./data";
import { Link } from "react-router-dom";
function Privacy() {
  return (
    <div className="Privacy">
      <div className="PrivacyTop">
        <div className="PrivacyTopLeft">
          <p>
            Privacy <br /> Policy
          </p>
        </div>
        <div className="PrivacyTopRight">
          <p>
            Aify innovation labs Pvt Ltd built the Lovenote app as a Freemium
            app. This SERVICE is provided by Aify innovation labs Pvt Ltd at no
            cost and is intended for use as is.
          </p>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service. If you choose to use our Service, then
            you agree to the collection and use of information in relation to
            this policy. The Personal Information that we collect is used for
            providing and improving the Service. We will not use or share your
            information with anyone except as described in this Privacy Policy.
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at Lovenote unless
            otherwise defined in this Privacy Policy.
          </p>
        </div>
      </div>
      <div className="PrivacyBottom">
        <div className="PrivacyBottomMiddle">
          <div className="PrivacyBottomMiddleItems">
            <div className="PrivacyBottomMiddleItemsid">
              <div>1</div>
            </div>
            <div className="PrivacyBottomMiddleItemsContent">
              <div className="PrivacycontentHeading">
                Information Collection and Use
              </div>
              <div className="Privacycontentdetails">
                For a better experience, while using our Service, we may require
                you to provide us with certain personally identifiable
                information, including but not limited to
                name,age,location,phone number. The information that we request
                will be retained by us and used as described in this privacy
                policy. The app does use third party services that may collect
                information used to identify you. Link to privacy policy of
                third party service providers used by the app.
                <ul>
                  <Link to="https://www.google.com/policies/privacy/">
                    <li>Google Play Services</li>
                  </Link>
                  <Link to="https://firebase.google.com/support/privacy/">
                    <li>Firebase Crashlytics</li>
                  </Link>
                  <Link to="https://www.facebook.com/about/privacy/update/printable">
                    <li>Facebooks</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {privacy.map((data) => {
            return (
              <div className="PrivacyBottomMiddleItems" key={data.id}>
                <div className="PrivacyBottomMiddleItemsid">
                  <div> {data.id}</div>
                </div>
                <div className="PrivacyBottomMiddleItemsContent">
                  <div className="PrivacycontentHeading">{data.heading}</div>
                  <div className="Privacycontentdetails">{data.details}</div>
                </div>
              </div>
            );
          })}
          <div className="PrivacyBottomMiddleItemsContent PrivacyContactUs">
            <p>Contact Us</p>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at &nbsp;
              <a href="mailto:social@lovenote.co.in">
                social@lovenote.co.in
              </a>{" "}
              <br />
              Last Updated: This Privacy Policy was last updated on [Insert
              Date].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
