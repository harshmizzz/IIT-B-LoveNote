import React from "react";
import "./BirthLoveNote.css";
import birthImage1 from "../../Images/BirthLoveNote/Image1.png";
import birthImage2 from "../../Images/BirthLoveNote/Image2.png";

const BirthLoveNote = () => {
  return (
    <>
      <div className="body">
        <div className="coverBody">
          <h3> THE "BIRTH OF LOVENOTE" </h3>
          <div className="firstSection">
            <p className="para para1"> 
              People don't "fall" in love, they "rise" in love{" "}
              <span>
                <br />
              </span>
              But nowdays this journey of finding that love has just turned into
              a race of swiping right and left which leads you nowhere. We
              understand how important a healthy relationship can be to multiply
              your strength but this forest is too dense and dark, affecting
              your potential to be happy and successfull. Trust us, this is a
              huge problem.
            </p>
            <img src={birthImage1} className="birthImage1" alt="" />
          </div>
          <br />
          <br /> 
          <div className="secondSection ">
            <p className="para2">
                No more worries, LoveNote is at your rescue! <span><br /></span>
                We are here to help you in this journey and provide you a safer environment, this being our only vission
                and mission. We don't make our users madly run in the race of swiping left and right but we work
                calmly, safely and taking you at your own pace.
                <span><br /><br /></span>
                Be ready to join our hands so that you can hold your partner's
                hands forever.
                <span><br /><br /></span>
                Join us to being a forever story <span><br /></span>
                @LoveNote
            </p>
            <img src={birthImage2} className="birthImage2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthLoveNote;
