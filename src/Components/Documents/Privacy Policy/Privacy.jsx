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
            Aify innovation labs Pvt Ltd built the Lovenote app.This page is used
            to informvisitors regarding our policies with the collection, use,
            and disclosure of PersonalInformation if anyone decided to use our
            Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use ofinformation concerning this policy. The Personal
            Information that we collect is usedfor providing and improving the
            Service. We will not use or share your informationwith anyone except
            as described in this Privacy Policy.The terms used in this Privacy
            Policy have the same meanings as in our Terms andConditions, which
            is accessible at Lovenote unless otherwise defined in this
            PrivacyPolicy.
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
                you to provide uswith certain personally identifiable
                information, including but not limited to name,age, location,
                phone number. We will also fetch your interactions with our app
                inorder to understand your behaviour. We will use this
                information to improve our services and user experience. The
                information that we request will be retained by usand used as
                described in this privacy policy. <br /> The app does use
                third-party services that may collect information used to
                identify you. <br /> Link to privacy policy of third party
                service providers used by the app.
                <ul>
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>Google Play Services</li>
                  </a>
                  <a
                    href="https://firebase.google.com/support/privacy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>Firebase Crashlytics</li>
                  </a>
                  <a
                    href="https://www.facebook.com/about/privacy/update/printable"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>Facebook</li>
                  </a>
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
              Last Updated: This Privacy Policy was last updated on
              [08/10/2021].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
