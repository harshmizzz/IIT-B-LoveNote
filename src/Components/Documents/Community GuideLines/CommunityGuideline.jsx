import React from "react";
import "./CommunityGuidelines.css";
import { guidelines } from "./data";
function CommunityGuideline() {
  return (
    <div className="CommunityGuideline">
      <div className="CommunityGuidelineTop">
        <div className="CommunityGuidelineTopLeft">
          <p>
            Community <br /> Guidelines
          </p>
        </div>
        <div className="CommunityGuidelineTopRight">
          <p>
            Welcome to the Lovenote community. We want our users to freely
            express themselves, as long as it doesn’t offend or hurt others. We
            consider everyone equal on Lovenote. We are requesting you to think
            before you act and follow our community guidelines.
          </p>
          <p>
            Below are some community policies that you need to comply with for
            being in our community. Any violations of these guidelines may lead
            to the termination of your account. We encourage you to report any
            behaviour that violates our guidelines and make our community safe
            and clean.
          </p>
        </div>
      </div>
      <div className="CommunityGuidelineBottom">
        <div className="CommunityGuidelineBottomTop">
          <p>Love Note does not allow:</p>
        </div>
        <div className="CommunityGuidelineBottomMiddle">
          {guidelines.map((data) => {
            return (
              <div
                className="CommunityGuidelineBottomMiddleItems"
                key={data.id}
              >
                <div className="CommunityGuidelineBottomMiddleItemsid">
                  <div> {data.id}</div>
                </div>
                <div className="CommunityGuidelineBottomMiddleItemsContent">
                  <div className="guidelinescontentHeading">{data.heading}</div>
                  <div className="guidelinescontentdetails">{data.details}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CommunityGuideline;
